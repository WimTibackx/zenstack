# Changelog

## [2.0.0-alpha.3](https://github.com/WimTibackx/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-11-05)


### Features

* **enhance:** Prisma Pulse support ([#1658](https://github.com/WimTibackx/zenstack/issues/1658)) ([32c258c](https://github.com/WimTibackx/zenstack/commit/32c258c120628d2742f90da4edd8e377a3e672e7))
* implementing permission checker ([#1411](https://github.com/WimTibackx/zenstack/issues/1411)) ([0aa6ee9](https://github.com/WimTibackx/zenstack/commit/0aa6ee961bab005705287184b670ae9a3a57f06d))
* make parameters of transactions configurable ([#988](https://github.com/WimTibackx/zenstack/issues/988)) ([d0745b1](https://github.com/WimTibackx/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* tanstack-query v5 support ([#788](https://github.com/WimTibackx/zenstack/issues/788)) ([0d04d8e](https://github.com/WimTibackx/zenstack/commit/0d04d8e6dabd66ee06e98971cb4e1007c4ecd466))


### Bug Fixes

* clean up zod generation ([#883](https://github.com/WimTibackx/zenstack/issues/883)) ([909281f](https://github.com/WimTibackx/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/WimTibackx/zenstack/issues/883)) ([9d4a8ed](https://github.com/WimTibackx/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* **cli:** enhancer code fails to compile when generated into a custom folder ([#1678](https://github.com/WimTibackx/zenstack/issues/1678)) ([83bdd6d](https://github.com/WimTibackx/zenstack/commit/83bdd6df5ce9b7604ec64d32fb318e244c96d560))
* client-extension test failures ([#874](https://github.com/WimTibackx/zenstack/issues/874)) ([f2ab6a5](https://github.com/WimTibackx/zenstack/commit/f2ab6a521195c4981fd89a5d4094e4130c5b336c))
* **cli:** fixes the issue that enhancer ignores zod schemas if it's explicitly configured in ZModel ([#1632](https://github.com/WimTibackx/zenstack/issues/1632)) ([da69e02](https://github.com/WimTibackx/zenstack/commit/da69e0210bf6bb734236b72d0dc8b9382c786614))
* compatibility with Prisma's "omit" feature ([#1432](https://github.com/WimTibackx/zenstack/issues/1432)) ([296ca25](https://github.com/WimTibackx/zenstack/commit/296ca259c8dd3e38fa988378df4a9e351a11b20b))
* **delegate:** base fields not properly wrapped inside relation layer when injected from policies ([#1736](https://github.com/WimTibackx/zenstack/issues/1736)) ([bfe6983](https://github.com/WimTibackx/zenstack/commit/bfe698390c689dbe4350f7989cc6a1974ff1aad5))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/WimTibackx/zenstack/issues/851)) ([ea564c9](https://github.com/WimTibackx/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* generated code fails to compile when prisma's output path overlaps with zenstack ([#1765](https://github.com/WimTibackx/zenstack/issues/1765)) ([2d42606](https://github.com/WimTibackx/zenstack/commit/2d42606975f49cb74ab512e4c7aa068179f026fe))
* **hooks:** prefer to use global fetch when available ([3ed1614](https://github.com/WimTibackx/zenstack/commit/3ed1614939dd6a9359edd4fbece5a85cbfc61fd7))
* **hooks:** prefer to use global fetch when available ([#1826](https://github.com/WimTibackx/zenstack/issues/1826)) ([9eb241f](https://github.com/WimTibackx/zenstack/commit/9eb241fc9cb700a798682f6e0a47e2a03aa0299a))
* incorrect cross-model comparision for && and || expressions ([#1512](https://github.com/WimTibackx/zenstack/issues/1512)) ([908048b](https://github.com/WimTibackx/zenstack/commit/908048b01430ff6552e8df558d5b5905136ea5cc))
* incorrect reverse query built for to-many relation ([#815](https://github.com/WimTibackx/zenstack/issues/815)) ([2c345e1](https://github.com/WimTibackx/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* infinite recursion when injecting field selection for field-level permission check ([#1452](https://github.com/WimTibackx/zenstack/issues/1452)) ([29962e0](https://github.com/WimTibackx/zenstack/commit/29962e0b48a73ae6d42f43f2575048ba9cf6a953))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/WimTibackx/zenstack/issues/962)) ([2b2bfcf](https://github.com/WimTibackx/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issues with cross-model comparison identification and injection ([#1508](https://github.com/WimTibackx/zenstack/issues/1508)) ([665f9b3](https://github.com/WimTibackx/zenstack/commit/665f9b33b58acc5170c4ccb8e73be525fbb89734))
* post-update rules incorrectly reject update ([#826](https://github.com/WimTibackx/zenstack/issues/826)) ([d921a7c](https://github.com/WimTibackx/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/WimTibackx/zenstack/issues/826)) ([e85831e](https://github.com/WimTibackx/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* properly handle missing fields when evaluating `@[@validate](https://github.com/validate)` model-level rules ([#1097](https://github.com/WimTibackx/zenstack/issues/1097)) ([e8268d0](https://github.com/WimTibackx/zenstack/commit/e8268d03ae12f3ccbcf1bb1c531a2816b22f6da8))
* support for Prisma 5.16.0 ([#1541](https://github.com/WimTibackx/zenstack/issues/1541)) ([0a293ca](https://github.com/WimTibackx/zenstack/commit/0a293ca0afebee621848463e05408a39dfa934e2))
* support string literal keys for object expressions in ZModel ([#752](https://github.com/WimTibackx/zenstack/issues/752)) ([22b1bf9](https://github.com/WimTibackx/zenstack/commit/22b1bf9ddd4062000f2cd7d183e004dd3d5917c6))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/WimTibackx/zenstack/issues/995)) ([541cd97](https://github.com/WimTibackx/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* **tanstack:** incorrect InfiniteData import for vue-query ([#1498](https://github.com/WimTibackx/zenstack/issues/1498)) ([92f187f](https://github.com/WimTibackx/zenstack/commit/92f187f9190517df5baca795f12386c12c6694e9))
* unintended changes to "backlink" of abstract model's metadata ([#1691](https://github.com/WimTibackx/zenstack/issues/1691)) ([9e93985](https://github.com/WimTibackx/zenstack/commit/9e93985589abc4d22eba433b7927193b4fd405a6))
* **zmodel:** enum is resolved to wrong element after merging base models ([#1437](https://github.com/WimTibackx/zenstack/issues/1437)) ([6852958](https://github.com/WimTibackx/zenstack/commit/68529580028dfcfce50cb9af78a9b67d72e2a6a5))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
