/**
 * Travis CI 上でパッチバージョンを上げて git push と npm publish する。ただし .npmignore に記載されたファイルのみ変更の場合は無視する。
 * @function publishNpm
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const defaults = require('defaults')
const { runTasks } = require('ape-tasking')
const { join } = require('path')
const exec = require('./util/exec')
const { execSync } = require('child_process')
const { hasLibraryDiff, setGitConfig, isEmptyCommit, checkCiEnv, setGithubConfig } = require('./util')

/** @lends publishNpm */
function publishNpm (options = {}) {
  let { taskName, force } = defaults(options, {
    taskName: 'npm publish on Travis CI',
    force: false
  })

  return runTasks(taskName, [
    checkCiEnv,
    () => co(function * () {
      let shouldSkip = !force && !hasLibraryDiff() && !isEmptyCommit()
      if (shouldSkip) {
        return
      }

      let shouldPublish = isMasterBranch() && !isPullRequest()
      if (!shouldPublish) {
        console.log('No need to publish')
        return
      }
      setGitConfig()
      setGithubConfig()
      publishNewVersion()
    })
  ], false)
}

function publishNewVersion () {
  let shouldPreCommit = !nonGitStatus()
  if (shouldPreCommit) {
    [
      'git add .',
      'git commit -m "[ci skip] Travis CI committed after build"'
    ].forEach(command => exec(command))
  }
  [
    `npm version patch -m "[ci skip] Travis CI incremented the version to ${version()}"`,
    'git push origin HEAD:master',
    'npm publish'
  ].forEach(command => exec(command))
}

function isMasterBranch () {
  console.log('> echo $TRAVIS_BRANCH')
  console.log(process.env.TRAVIS_BRANCH)
  return process.env.TRAVIS_BRANCH === 'master'
}

function isPullRequest () {
  return process.env.TRAVIS_EVENT_TYPE === 'pull_request'
}

function version () {
  let version = require(join(process.cwd(), 'package.json')).version
  let split = version.split('.')
  split[ 2 ] = Number(split[ 2 ]) + 1
  let newVersion = split.join('.')
  return newVersion
}

function nonGitStatus () {
  console.log('> git status -s')
  let res = execSync('git status -s').toString()
  console.log(res)
  return res.length === 0
}

module.exports = publishNpm
