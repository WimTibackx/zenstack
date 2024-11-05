# Changelog

## [2.0.0-alpha.3](https://github.com/WimTibackx/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-11-05)


### Features

* automatic optimistic update for tanstack hooks ([#830](https://github.com/WimTibackx/zenstack/issues/830)) ([93dc7df](https://github.com/WimTibackx/zenstack/commit/93dc7df472427a4546ba71ec3703135d2d638ded))
* implementing permission checker ([#1411](https://github.com/WimTibackx/zenstack/issues/1411)) ([0aa6ee9](https://github.com/WimTibackx/zenstack/commit/0aa6ee961bab005705287184b670ae9a3a57f06d))
* JetBrains plugin for ZModel ([#904](https://github.com/WimTibackx/zenstack/issues/904)) ([c79be9e](https://github.com/WimTibackx/zenstack/commit/c79be9eb7f6b602bc84214bded2b927935b6273a))
* make parameters of transactions configurable ([#988](https://github.com/WimTibackx/zenstack/issues/988)) ([d0745b1](https://github.com/WimTibackx/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* **nestjs:** Add prop as optional parameter of getEnhancedPrisma [#1537](https://github.com/WimTibackx/zenstack/issues/1537) ([#1538](https://github.com/WimTibackx/zenstack/issues/1538)) ([4672875](https://github.com/WimTibackx/zenstack/commit/46728754d9da71c71f7eb9fc53ecbaf559bf7438))
* Nuxt server adapter and tanstack-query for "vue" hooks generation ([#757](https://github.com/WimTibackx/zenstack/issues/757)) ([033d95d](https://github.com/WimTibackx/zenstack/commit/033d95dcdeef67bc8183d1daeb3172ec9ee02b9b))
* **server:** implementing hono adapter ([#1739](https://github.com/WimTibackx/zenstack/issues/1739)) ([b4418ac](https://github.com/WimTibackx/zenstack/commit/b4418acaf2132cef9ba16242debc7dca84a991bf))


### Bug Fixes

* add missing await in test ([2f192be](https://github.com/WimTibackx/zenstack/commit/2f192be35d0174017bba38294bb13fba3fa95b20))
* **api:** support filtering with comma-separated values in rest handler ([#1620](https://github.com/WimTibackx/zenstack/issues/1620)) ([fdbc8cf](https://github.com/WimTibackx/zenstack/commit/fdbc8cf493f9b3543c0a8128e4ce5416497eeef1))
* build, lint and etc. ([#833](https://github.com/WimTibackx/zenstack/issues/833)) ([cccbc3c](https://github.com/WimTibackx/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* clean up zod generation ([#883](https://github.com/WimTibackx/zenstack/issues/883)) ([909281f](https://github.com/WimTibackx/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/WimTibackx/zenstack/issues/883)) ([9d4a8ed](https://github.com/WimTibackx/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* **delegate:** base fields not properly wrapped inside relation layer when injected from policies ([#1736](https://github.com/WimTibackx/zenstack/issues/1736)) ([bfe6983](https://github.com/WimTibackx/zenstack/commit/bfe698390c689dbe4350f7989cc6a1974ff1aad5))
* **delegate:** remove `createManyAndReturn` API from delegate model client ([#1769](https://github.com/WimTibackx/zenstack/issues/1769)) ([fc940eb](https://github.com/WimTibackx/zenstack/commit/fc940eb2dff79a65f02c6fcf44df5efa58f57e67))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/WimTibackx/zenstack/issues/851)) ([ea564c9](https://github.com/WimTibackx/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* generate both cjs and esm builds for swr plugin ([#892](https://github.com/WimTibackx/zenstack/issues/892)) ([385839f](https://github.com/WimTibackx/zenstack/commit/385839f101941234c5293d70d07e064c1c458387))
* **hooks:** prefer to use global fetch when available ([3ed1614](https://github.com/WimTibackx/zenstack/commit/3ed1614939dd6a9359edd4fbece5a85cbfc61fd7))
* **hooks:** prefer to use global fetch when available ([#1826](https://github.com/WimTibackx/zenstack/issues/1826)) ([9eb241f](https://github.com/WimTibackx/zenstack/commit/9eb241fc9cb700a798682f6e0a47e2a03aa0299a))
* incorrect cross-model comparision for && and || expressions ([#1512](https://github.com/WimTibackx/zenstack/issues/1512)) ([908048b](https://github.com/WimTibackx/zenstack/commit/908048b01430ff6552e8df558d5b5905136ea5cc))
* incorrect reverse query built for to-many relation ([#815](https://github.com/WimTibackx/zenstack/issues/815)) ([2c345e1](https://github.com/WimTibackx/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* infinite recursion when injecting field selection for field-level permission check ([#1452](https://github.com/WimTibackx/zenstack/issues/1452)) ([29962e0](https://github.com/WimTibackx/zenstack/commit/29962e0b48a73ae6d42f43f2575048ba9cf6a953))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/WimTibackx/zenstack/issues/962)) ([2b2bfcf](https://github.com/WimTibackx/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issues with cross-model comparison identification and injection ([#1508](https://github.com/WimTibackx/zenstack/issues/1508)) ([665f9b3](https://github.com/WimTibackx/zenstack/commit/665f9b33b58acc5170c4ccb8e73be525fbb89734))
* post-update rules incorrectly reject update ([#826](https://github.com/WimTibackx/zenstack/issues/826)) ([d921a7c](https://github.com/WimTibackx/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/WimTibackx/zenstack/issues/826)) ([e85831e](https://github.com/WimTibackx/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* **redwood:** fix incorrect error type thrown ([#1659](https://github.com/WimTibackx/zenstack/issues/1659)) ([1d81325](https://github.com/WimTibackx/zenstack/commit/1d81325696076038483a3c30a93962d0d91afb23))
* **server:** pass custom logger to api handler ([#1783](https://github.com/WimTibackx/zenstack/issues/1783)) ([c0ab830](https://github.com/WimTibackx/zenstack/commit/c0ab830374a2dadd53134c18e24896c1f7c90593))
* **server:** rest handler not returning correct id when model with compound id is read as a relation ([#1784](https://github.com/WimTibackx/zenstack/issues/1784)) ([4fc4cf7](https://github.com/WimTibackx/zenstack/commit/4fc4cf74460ae761209949bb86fc8f589d126396))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/WimTibackx/zenstack/issues/995)) ([541cd97](https://github.com/WimTibackx/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* **tanstack:** incorrect InfiniteData import for vue-query ([#1498](https://github.com/WimTibackx/zenstack/issues/1498)) ([92f187f](https://github.com/WimTibackx/zenstack/commit/92f187f9190517df5baca795f12386c12c6694e9))
* unintended changes to "backlink" of abstract model's metadata ([#1691](https://github.com/WimTibackx/zenstack/issues/1691)) ([9e93985](https://github.com/WimTibackx/zenstack/commit/9e93985589abc4d22eba433b7927193b4fd405a6))
* **zod:** add coercion call when generating schema for DateTime field ([#1068](https://github.com/WimTibackx/zenstack/issues/1068)) ([b60627c](https://github.com/WimTibackx/zenstack/commit/b60627c167706728ac232ce06366d914e3dde23f))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
