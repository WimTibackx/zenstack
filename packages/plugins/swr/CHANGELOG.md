# Changelog

## [2.0.0-alpha.3](https://github.com/WimTibackx/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-11-05)


### Features

* add `check` hooks generation to tanstack and swr plugins ([#1422](https://github.com/WimTibackx/zenstack/issues/1422)) ([1030770](https://github.com/WimTibackx/zenstack/commit/10307700c53bb015423b3125c3cdebe05dbc3821))
* improved automatic query invalidation for tanstack-query ([#790](https://github.com/WimTibackx/zenstack/issues/790)) ([42d654f](https://github.com/WimTibackx/zenstack/commit/42d654fcfaa40b09fde578db79792c69e1e3b908))
* make parameters of transactions configurable ([#988](https://github.com/WimTibackx/zenstack/issues/988)) ([d0745b1](https://github.com/WimTibackx/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* optimistic update support for SWR ([#860](https://github.com/WimTibackx/zenstack/issues/860)) ([0ca4670](https://github.com/WimTibackx/zenstack/commit/0ca46704f4c02b7d3e69470c68601835f426da59))


### Bug Fixes

* avoid importing prisma-related code into language server ([#1441](https://github.com/WimTibackx/zenstack/issues/1441)) ([b22c6a3](https://github.com/WimTibackx/zenstack/commit/b22c6a3ce238ec766d910f23e83aea4e8f10c05d))
* build, lint and etc. ([#833](https://github.com/WimTibackx/zenstack/issues/833)) ([cccbc3c](https://github.com/WimTibackx/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* clean up zod generation ([#883](https://github.com/WimTibackx/zenstack/issues/883)) ([909281f](https://github.com/WimTibackx/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/WimTibackx/zenstack/issues/883)) ([9d4a8ed](https://github.com/WimTibackx/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* compatibility with Prisma's "omit" feature ([#1432](https://github.com/WimTibackx/zenstack/issues/1432)) ([296ca25](https://github.com/WimTibackx/zenstack/commit/296ca259c8dd3e38fa988378df4a9e351a11b20b))
* **delegate:** base fields not properly wrapped inside relation layer when injected from policies ([#1736](https://github.com/WimTibackx/zenstack/issues/1736)) ([bfe6983](https://github.com/WimTibackx/zenstack/commit/bfe698390c689dbe4350f7989cc6a1974ff1aad5))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/WimTibackx/zenstack/issues/851)) ([ea564c9](https://github.com/WimTibackx/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* generate both cjs and esm builds for swr plugin ([#892](https://github.com/WimTibackx/zenstack/issues/892)) ([385839f](https://github.com/WimTibackx/zenstack/commit/385839f101941234c5293d70d07e064c1c458387))
* **hooks:** prefer to use global fetch when available ([3ed1614](https://github.com/WimTibackx/zenstack/commit/3ed1614939dd6a9359edd4fbece5a85cbfc61fd7))
* **hooks:** prefer to use global fetch when available ([#1826](https://github.com/WimTibackx/zenstack/issues/1826)) ([9eb241f](https://github.com/WimTibackx/zenstack/commit/9eb241fc9cb700a798682f6e0a47e2a03aa0299a))
* incorrect cross-model comparision for && and || expressions ([#1512](https://github.com/WimTibackx/zenstack/issues/1512)) ([908048b](https://github.com/WimTibackx/zenstack/commit/908048b01430ff6552e8df558d5b5905136ea5cc))
* incorrect reverse query built for to-many relation ([#815](https://github.com/WimTibackx/zenstack/issues/815)) ([2c345e1](https://github.com/WimTibackx/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* infinite recursion when injecting field selection for field-level permission check ([#1452](https://github.com/WimTibackx/zenstack/issues/1452)) ([29962e0](https://github.com/WimTibackx/zenstack/commit/29962e0b48a73ae6d42f43f2575048ba9cf6a953))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/WimTibackx/zenstack/issues/962)) ([2b2bfcf](https://github.com/WimTibackx/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issues with cross-model comparison identification and injection ([#1508](https://github.com/WimTibackx/zenstack/issues/1508)) ([665f9b3](https://github.com/WimTibackx/zenstack/commit/665f9b33b58acc5170c4ccb8e73be525fbb89734))
* lint issue in generated swr/tanstack hooks ([#877](https://github.com/WimTibackx/zenstack/issues/877)) ([4577232](https://github.com/WimTibackx/zenstack/commit/45772326c7980f5338452d4048c43f76a6b09bf0))
* optimize generated trpc typing and fix "select" issue ([#972](https://github.com/WimTibackx/zenstack/issues/972)) ([c0d60a0](https://github.com/WimTibackx/zenstack/commit/c0d60a00eac9392cb061927126a41a5287467289))
* post-update rules incorrectly reject update ([#826](https://github.com/WimTibackx/zenstack/issues/826)) ([d921a7c](https://github.com/WimTibackx/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/WimTibackx/zenstack/issues/826)) ([e85831e](https://github.com/WimTibackx/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* properly handle nullable fields in openapi generator ([#906](https://github.com/WimTibackx/zenstack/issues/906)) ([0e422ad](https://github.com/WimTibackx/zenstack/commit/0e422adf1a7f274b850eeba09ef1781b13ce9f1b))
* **runtime:** always use id fields to address existing entity during upsert ([#1273](https://github.com/WimTibackx/zenstack/issues/1273)) ([d8c1513](https://github.com/WimTibackx/zenstack/commit/d8c15135a7edb75b459b6f5f1736e5fa2d96a9fa))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/WimTibackx/zenstack/issues/995)) ([541cd97](https://github.com/WimTibackx/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* swr hooks support no revalidation ([#871](https://github.com/WimTibackx/zenstack/issues/871)) ([673bdd3](https://github.com/WimTibackx/zenstack/commit/673bdd3a4d54db72cdb0561669801b7be633c904))
* **tanstack,swr:** create/upsert hooks shouldn't be generated for delegate models ([#1567](https://github.com/WimTibackx/zenstack/issues/1567)) ([814d64e](https://github.com/WimTibackx/zenstack/commit/814d64e653aa561fc383ec8f50407c8a6cf209b5))
* **tanstack:** incorrect InfiniteData import for vue-query ([#1498](https://github.com/WimTibackx/zenstack/issues/1498)) ([92f187f](https://github.com/WimTibackx/zenstack/commit/92f187f9190517df5baca795f12386c12c6694e9))
* unintended changes to "backlink" of abstract model's metadata ([#1691](https://github.com/WimTibackx/zenstack/issues/1691)) ([9e93985](https://github.com/WimTibackx/zenstack/commit/9e93985589abc4d22eba433b7927193b4fd405a6))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
