# Changelog

## [2.0.0-alpha.3](https://github.com/WimTibackx/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-11-05)


### Features

* add `check` hooks generation to tanstack and swr plugins ([#1422](https://github.com/WimTibackx/zenstack/issues/1422)) ([1030770](https://github.com/WimTibackx/zenstack/commit/10307700c53bb015423b3125c3cdebe05dbc3821))
* automatic optimistic update for tanstack hooks ([#830](https://github.com/WimTibackx/zenstack/issues/830)) ([93dc7df](https://github.com/WimTibackx/zenstack/commit/93dc7df472427a4546ba71ec3703135d2d638ded))
* improved automatic query invalidation for tanstack-query ([#790](https://github.com/WimTibackx/zenstack/issues/790)) ([42d654f](https://github.com/WimTibackx/zenstack/commit/42d654fcfaa40b09fde578db79792c69e1e3b908))
* make parameters of transactions configurable ([#988](https://github.com/WimTibackx/zenstack/issues/988)) ([d0745b1](https://github.com/WimTibackx/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* Nuxt server adapter and tanstack-query for "vue" hooks generation ([#757](https://github.com/WimTibackx/zenstack/issues/757)) ([033d95d](https://github.com/WimTibackx/zenstack/commit/033d95dcdeef67bc8183d1daeb3172ec9ee02b9b))
* tanstack-query v5 support ([#788](https://github.com/WimTibackx/zenstack/issues/788)) ([0d04d8e](https://github.com/WimTibackx/zenstack/commit/0d04d8e6dabd66ee06e98971cb4e1007c4ecd466))


### Bug Fixes

* avoid importing prisma-related code into language server ([#1441](https://github.com/WimTibackx/zenstack/issues/1441)) ([b22c6a3](https://github.com/WimTibackx/zenstack/commit/b22c6a3ce238ec766d910f23e83aea4e8f10c05d))
* build, lint and etc. ([#833](https://github.com/WimTibackx/zenstack/issues/833)) ([cccbc3c](https://github.com/WimTibackx/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* clean up zod generation ([#883](https://github.com/WimTibackx/zenstack/issues/883)) ([909281f](https://github.com/WimTibackx/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/WimTibackx/zenstack/issues/883)) ([9d4a8ed](https://github.com/WimTibackx/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* compatibility with Prisma's "omit" feature ([#1432](https://github.com/WimTibackx/zenstack/issues/1432)) ([296ca25](https://github.com/WimTibackx/zenstack/commit/296ca259c8dd3e38fa988378df4a9e351a11b20b))
* **delegate:** base fields not properly wrapped inside relation layer when injected from policies ([#1736](https://github.com/WimTibackx/zenstack/issues/1736)) ([bfe6983](https://github.com/WimTibackx/zenstack/commit/bfe698390c689dbe4350f7989cc6a1974ff1aad5))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/WimTibackx/zenstack/issues/851)) ([ea564c9](https://github.com/WimTibackx/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* generate suspense queries in tanstack-query plugin ([#996](https://github.com/WimTibackx/zenstack/issues/996)) ([43eb615](https://github.com/WimTibackx/zenstack/commit/43eb61508fbde4431831343566dd637dff7a6d49))
* **hooks:** prefer to use global fetch when available ([3ed1614](https://github.com/WimTibackx/zenstack/commit/3ed1614939dd6a9359edd4fbece5a85cbfc61fd7))
* **hooks:** prefer to use global fetch when available ([#1826](https://github.com/WimTibackx/zenstack/issues/1826)) ([9eb241f](https://github.com/WimTibackx/zenstack/commit/9eb241fc9cb700a798682f6e0a47e2a03aa0299a))
* **hooks:** support optimistic update for "upsert" ([#1767](https://github.com/WimTibackx/zenstack/issues/1767)) ([374e962](https://github.com/WimTibackx/zenstack/commit/374e9627bf3fc7db67896d0fd83590f0d5657b0a))
* incorrect cross-model comparision for && and || expressions ([#1512](https://github.com/WimTibackx/zenstack/issues/1512)) ([908048b](https://github.com/WimTibackx/zenstack/commit/908048b01430ff6552e8df558d5b5905136ea5cc))
* incorrect reverse query built for to-many relation ([#815](https://github.com/WimTibackx/zenstack/issues/815)) ([2c345e1](https://github.com/WimTibackx/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* infinite recursion when injecting field selection for field-level permission check ([#1452](https://github.com/WimTibackx/zenstack/issues/1452)) ([29962e0](https://github.com/WimTibackx/zenstack/commit/29962e0b48a73ae6d42f43f2575048ba9cf6a953))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/WimTibackx/zenstack/issues/962)) ([2b2bfcf](https://github.com/WimTibackx/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issues with cross-model comparison identification and injection ([#1508](https://github.com/WimTibackx/zenstack/issues/1508)) ([665f9b3](https://github.com/WimTibackx/zenstack/commit/665f9b33b58acc5170c4ccb8e73be525fbb89734))
* lint issue in generated swr/tanstack hooks ([#877](https://github.com/WimTibackx/zenstack/issues/877)) ([4577232](https://github.com/WimTibackx/zenstack/commit/45772326c7980f5338452d4048c43f76a6b09bf0))
* post-update rules incorrectly reject update ([#826](https://github.com/WimTibackx/zenstack/issues/826)) ([d921a7c](https://github.com/WimTibackx/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/WimTibackx/zenstack/issues/826)) ([e85831e](https://github.com/WimTibackx/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* properly handle nullable fields in openapi generator ([#906](https://github.com/WimTibackx/zenstack/issues/906)) ([0e422ad](https://github.com/WimTibackx/zenstack/commit/0e422adf1a7f274b850eeba09ef1781b13ce9f1b))
* **runtime:** always use id fields to address existing entity during upsert ([#1273](https://github.com/WimTibackx/zenstack/issues/1273)) ([d8c1513](https://github.com/WimTibackx/zenstack/commit/d8c15135a7edb75b459b6f5f1736e5fa2d96a9fa))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/WimTibackx/zenstack/issues/995)) ([541cd97](https://github.com/WimTibackx/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* swr hooks support no revalidation ([#871](https://github.com/WimTibackx/zenstack/issues/871)) ([673bdd3](https://github.com/WimTibackx/zenstack/commit/673bdd3a4d54db72cdb0561669801b7be633c904))
* tanstack-query build issues and bugs in optimistic update ([#843](https://github.com/WimTibackx/zenstack/issues/843)) ([08d317d](https://github.com/WimTibackx/zenstack/commit/08d317d150b99fc38b8e5fb56bb4ab27fe1b4470))
* tanstack-query, fix the incorrect query typing when user provides a custom selector ([#967](https://github.com/WimTibackx/zenstack/issues/967)) ([cc98e30](https://github.com/WimTibackx/zenstack/commit/cc98e306559d7729d96d4ed77cda2815454fbb8f))
* **tanstack-query:** non-zenstack queries are accidentally visited during optimistic update ([#1775](https://github.com/WimTibackx/zenstack/issues/1775)) ([178f697](https://github.com/WimTibackx/zenstack/commit/178f6977cab8a61d816fe5f6fb9985fb92586efa))
* **tanstack,swr:** create/upsert hooks shouldn't be generated for delegate models ([#1567](https://github.com/WimTibackx/zenstack/issues/1567)) ([814d64e](https://github.com/WimTibackx/zenstack/commit/814d64e653aa561fc383ec8f50407c8a6cf209b5))
* **tanstack:** improve typing of mutation errors ([#1066](https://github.com/WimTibackx/zenstack/issues/1066)) ([a01065c](https://github.com/WimTibackx/zenstack/commit/a01065c0aa791d6591776b908f3e1e3c4d21424b))
* **tanstack:** incorrect InfiniteData import for vue-query ([#1498](https://github.com/WimTibackx/zenstack/issues/1498)) ([92f187f](https://github.com/WimTibackx/zenstack/commit/92f187f9190517df5baca795f12386c12c6694e9))
* **tanstack:** incorrect typing for svelte query hooks ([#1492](https://github.com/WimTibackx/zenstack/issues/1492)) ([ed5133c](https://github.com/WimTibackx/zenstack/commit/ed5133c0e8df96764a765c462863c0f9f3fb5735))
* **tanstack:** incorrect vue-query options typing for vue-query v5 ([#1565](https://github.com/WimTibackx/zenstack/issues/1565)) ([a4efa6e](https://github.com/WimTibackx/zenstack/commit/a4efa6e3fef670572e7abd284eb9a6071734007c))
* **tanstack:** infinite query typing issues ([#1480](https://github.com/WimTibackx/zenstack/issues/1480)) ([e158372](https://github.com/WimTibackx/zenstack/commit/e15837285e6bb6de0bd229d3c81bb5e0e21d9e9f))
* **tanstack:** make sure vue-query hooks' input is reactive ([#1185](https://github.com/WimTibackx/zenstack/issues/1185)) ([f259d73](https://github.com/WimTibackx/zenstack/commit/f259d733b88b5bb310d49f0af8c3b78e4822c6bb))
* typing generated for options parameter in the hooks method ([#946](https://github.com/WimTibackx/zenstack/issues/946)) ([acb23d1](https://github.com/WimTibackx/zenstack/commit/acb23d1d1e3f5ff1ce3452971ac7103c6a38326c))
* unintended changes to "backlink" of abstract model's metadata ([#1691](https://github.com/WimTibackx/zenstack/issues/1691)) ([9e93985](https://github.com/WimTibackx/zenstack/commit/9e93985589abc4d22eba433b7927193b4fd405a6))
* vue-query typing issue ([#1009](https://github.com/WimTibackx/zenstack/issues/1009)) ([b2e1635](https://github.com/WimTibackx/zenstack/commit/b2e1635cb1857afebde286a0c077c0f561d0bbec))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
