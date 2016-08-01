sg-travis
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-travis
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-travis
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-travis.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sg-travis
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sg-travis.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sg-travis/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-travis
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-travis.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-travis.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-travis
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-travis.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-travis
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-travis.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Scripts for Travis CI

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install sg-travis --save-dev
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
#!/usr/bin/env node

'use strict'

const sgTravis = require('sg-travis')

sgTravis.publishNpm({})

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Functions.md.hbs" Start -->

<a name="section-doc-guides-03-functions-md"></a>

Functions
---------

Available functions

| Signature | Description |
| ---- | ----------- |
| `.publishNpm(options) -> Promise` | Travis CI 上でパッチバージョンを上げて git push と npm publish する。ただし .npmignore に記載されたファイルのみ変更の場合は無視する。 |
| `.pushOtherRepository(options) -> Promise` | Travis CI 上で他のリポジトリに空 git push する。ただし .npmignore に記載されたファイルの変更のみの場合は無視する。 |
| `.setEnv(options) -> Promise` | Travis の環境変数を設定する。暗号化された環境変数を.travis.ymlに書く。 |


<!-- Section from "doc/guides/03.Functions.md.hbs" End -->

<!-- Section from "doc/guides/04.CLI.md.hbs" Start -->

<a name="section-doc-guides-04-c-l-i-md"></a>

CLI
----

```bash
$ npm install sg-travis -g
```

使い方は

```bash
$ sg-travis --help
```


<!-- Section from "doc/guides/04.CLI.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sg-travis/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugos][sugos_url]

[sugos_url]: https://github.com/realglobe-Inc/sugos

<!-- Links End -->
