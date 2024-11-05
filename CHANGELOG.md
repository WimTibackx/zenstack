# Changelog

## [2.0.0-alpha.2](https://github.com/WimTibackx/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-11-05)


### Features

* add @[@auth](https://github.com/auth) option for declaring auth model ([#787](https://github.com/WimTibackx/zenstack/issues/787)) ([c390de1](https://github.com/WimTibackx/zenstack/commit/c390de10cfa91ae3f954404bc07e0905973b0898))
* add `check` hooks generation to tanstack and swr plugins ([#1422](https://github.com/WimTibackx/zenstack/issues/1422)) ([1030770](https://github.com/WimTibackx/zenstack/commit/10307700c53bb015423b3125c3cdebe05dbc3821))
* add zenstack CLI repl command ([#808](https://github.com/WimTibackx/zenstack/issues/808)) ([616be65](https://github.com/WimTibackx/zenstack/commit/616be65c3b8362be8a2cca2fa3abb77f8d0fe947))
* allow comparing fields from different models in mutation policies ([#1476](https://github.com/WimTibackx/zenstack/issues/1476)) ([6610bd0](https://github.com/WimTibackx/zenstack/commit/6610bd09f8d43b62b073044bb60a8a3cc40ef9e2))
* allow specifying zmodel location in package.json ([#879](https://github.com/WimTibackx/zenstack/issues/879)) ([bb149bd](https://github.com/WimTibackx/zenstack/commit/bb149bd22e820a9ba5a6c5325d1a330a7c495c71))
* allow to pass in a custom `Prisma` module when calling `enhance` ([#1160](https://github.com/WimTibackx/zenstack/issues/1160)) ([018d59f](https://github.com/WimTibackx/zenstack/commit/018d59f58295cee4530b9650c49dc868251029dd))
* allow users to import from node_modules ([#1021](https://github.com/WimTibackx/zenstack/issues/1021)) ([f8f214d](https://github.com/WimTibackx/zenstack/commit/f8f214d8d22919d49de17e648b3c1f98ab98b507))
* automatic optimistic update for tanstack hooks ([#830](https://github.com/WimTibackx/zenstack/issues/830)) ([93dc7df](https://github.com/WimTibackx/zenstack/commit/93dc7df472427a4546ba71ec3703135d2d638ded))
* **cli:** allow to include/exclude plugins when generate ([#1676](https://github.com/WimTibackx/zenstack/issues/1676)) ([2275102](https://github.com/WimTibackx/zenstack/commit/227510260e9f81fa7860df35dcb5be07c2823c63))
* **cli:** new "check" command for validating ZModel ([#1652](https://github.com/WimTibackx/zenstack/issues/1652)) ([ca2a4f4](https://github.com/WimTibackx/zenstack/commit/ca2a4f4a4e62863a15fcd674a6e2109f2789ad47))
* create Zod's `default` function for entity's booleans ([#1773](https://github.com/WimTibackx/zenstack/issues/1773)) ([383b8fe](https://github.com/WimTibackx/zenstack/commit/383b8fe1f8461a7bbd728c917e68967c47d362d0))
* **enhance:** Prisma Pulse support ([#1658](https://github.com/WimTibackx/zenstack/issues/1658)) ([32c258c](https://github.com/WimTibackx/zenstack/commit/32c258c120628d2742f90da4edd8e377a3e672e7))
* field-level policy override ([#889](https://github.com/WimTibackx/zenstack/issues/889)) ([271d568](https://github.com/WimTibackx/zenstack/commit/271d568ad3695e85f216ad7a293d9b9e802e7aaa))
* implement relation check() function in ZModel ([#1556](https://github.com/WimTibackx/zenstack/issues/1556)) ([be82307](https://github.com/WimTibackx/zenstack/commit/be8230715cfc5b2a83f378645146a0c0e9222491))
* implementing permission checker ([#1411](https://github.com/WimTibackx/zenstack/issues/1411)) ([0aa6ee9](https://github.com/WimTibackx/zenstack/commit/0aa6ee961bab005705287184b670ae9a3a57f06d))
* improved automatic query invalidation for tanstack-query ([#790](https://github.com/WimTibackx/zenstack/issues/790)) ([42d654f](https://github.com/WimTibackx/zenstack/commit/42d654fcfaa40b09fde578db79792c69e1e3b908))
* JetBrains plugin for ZModel ([#904](https://github.com/WimTibackx/zenstack/issues/904)) ([c79be9e](https://github.com/WimTibackx/zenstack/commit/c79be9eb7f6b602bc84214bded2b927935b6273a))
* make parameters of transactions configurable ([#988](https://github.com/WimTibackx/zenstack/issues/988)) ([d0745b1](https://github.com/WimTibackx/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* Make ZModel color schema looks cool and consistent ([#791](https://github.com/WimTibackx/zenstack/issues/791)) ([6dabb02](https://github.com/WimTibackx/zenstack/commit/6dabb02dfa76e58b7538ea38d9d9a0ff27d3609d)), closes [#716](https://github.com/WimTibackx/zenstack/issues/716)
* **nestjs:** Add prop as optional parameter of getEnhancedPrisma [#1537](https://github.com/WimTibackx/zenstack/issues/1537) ([#1538](https://github.com/WimTibackx/zenstack/issues/1538)) ([4672875](https://github.com/WimTibackx/zenstack/commit/46728754d9da71c71f7eb9fc53ecbaf559bf7438))
* non-strict mode for zod plugin ([#1697](https://github.com/WimTibackx/zenstack/issues/1697)) ([7880bad](https://github.com/WimTibackx/zenstack/commit/7880bad8b8fd04c22206b326da8d98d2be4e9a07))
* Nuxt server adapter and tanstack-query for "vue" hooks generation ([#757](https://github.com/WimTibackx/zenstack/issues/757)) ([033d95d](https://github.com/WimTibackx/zenstack/commit/033d95dcdeef67bc8183d1daeb3172ec9ee02b9b))
* optimistic update support for SWR ([#860](https://github.com/WimTibackx/zenstack/issues/860)) ([0ca4670](https://github.com/WimTibackx/zenstack/commit/0ca46704f4c02b7d3e69470c68601835f426da59))
* RedwoodJS integration package ([#911](https://github.com/WimTibackx/zenstack/issues/911)) ([e4aeee3](https://github.com/WimTibackx/zenstack/commit/e4aeee32ae3a5ab1718fd1daa2f93043fb68a8d5))
* **redwood:** redwood v7 support ([#1617](https://github.com/WimTibackx/zenstack/issues/1617)) ([3831350](https://github.com/WimTibackx/zenstack/commit/3831350b2eff1a91287c1170aa3b3c8bab0c8955))
* runtime support for custom `@[@auth](https://github.com/auth)` model ([#793](https://github.com/WimTibackx/zenstack/issues/793)) ([08b9677](https://github.com/WimTibackx/zenstack/commit/08b967735c938de1e770a2409c36c5a50173b01d))
* **runtime:** support for Prisma 5.14's `createManyAndReturn` ([#1479](https://github.com/WimTibackx/zenstack/issues/1479)) ([a783800](https://github.com/WimTibackx/zenstack/commit/a7838000ba509db6191c7ed93329eaaa02325692))
* **server:** implementing hono adapter ([#1739](https://github.com/WimTibackx/zenstack/issues/1739)) ([b4418ac](https://github.com/WimTibackx/zenstack/commit/b4418acaf2132cef9ba16242debc7dca84a991bf))
* support configuring what models to include for zod and trpc plugins ([#747](https://github.com/WimTibackx/zenstack/issues/747)) ([a5d15a3](https://github.com/WimTibackx/zenstack/commit/a5d15a30e7a22a3e875cc974391feb9ad6da7646))
* Support multiple levels inheritance ([#863](https://github.com/WimTibackx/zenstack/issues/863)) ([2d43692](https://github.com/WimTibackx/zenstack/commit/2d43692e591e2aaa48539991128846fc4a6a8b1c))
* support using collection predicate expression with `auth()` ([#831](https://github.com/WimTibackx/zenstack/issues/831)) ([ff1e8a5](https://github.com/WimTibackx/zenstack/commit/ff1e8a5e98ec94337f08576a29ffbee07ba8fd88))
* Support ZModel format command in CLI ([#869](https://github.com/WimTibackx/zenstack/issues/869)) ([bf85ceb](https://github.com/WimTibackx/zenstack/commit/bf85ceb3ef84ca68a6c370c6d6349af1edb79428))
* tanstack-query v5 support ([#788](https://github.com/WimTibackx/zenstack/issues/788)) ([0d04d8e](https://github.com/WimTibackx/zenstack/commit/0d04d8e6dabd66ee06e98971cb4e1007c4ecd466))
* **trpc:** support client helpers for Nuxt ([#1762](https://github.com/WimTibackx/zenstack/issues/1762)) ([2a8f4df](https://github.com/WimTibackx/zenstack/commit/2a8f4dfe8e3ca007f30a9b05c4851f0988d5eab2))
* **trpc:** trpc v11 support ([#1656](https://github.com/WimTibackx/zenstack/issues/1656)) ([40ea9fa](https://github.com/WimTibackx/zenstack/commit/40ea9fa1c040256f29a1245a72aeed879f502615))


### Bug Fixes

* '[@password](https://github.com/password)' attribute doesn't work well with data validation ([#1547](https://github.com/WimTibackx/zenstack/issues/1547)) ([9294f04](https://github.com/WimTibackx/zenstack/commit/9294f04d4f0befba586e2f20a088707090724080))
* [@omit](https://github.com/omit) doesn't remove fields inside to-many relation ([#993](https://github.com/WimTibackx/zenstack/issues/993)) ([a4d3f15](https://github.com/WimTibackx/zenstack/commit/a4d3f15746269257bc7fb56332766e3f598e2996))
* [ZModelCodeGenerator] Remove the extra space between the collection predicate operator ([#839](https://github.com/WimTibackx/zenstack/issues/839)) ([9a0895b](https://github.com/WimTibackx/zenstack/commit/9a0895bedd82b429ddcc45db4cee0f9e82c54198))
* `@[@validate](https://github.com/validate)` should ignore fields that are not present ([#1104](https://github.com/WimTibackx/zenstack/issues/1104)) ([79ef57a](https://github.com/WimTibackx/zenstack/commit/79ef57a67cbdf3b015c92f607d86543a4a169bcb))
* `check` attribute function shouldn't delegate "postUpdate" rules ([#1663](https://github.com/WimTibackx/zenstack/issues/1663)) ([62c624d](https://github.com/WimTibackx/zenstack/commit/62c624d55b2cbb7d723cd0479750f4679f944274))
* `createManyAndReturn` doesn't work  for polymorphic models ([#1590](https://github.com/WimTibackx/zenstack/issues/1590)) ([8438e2b](https://github.com/WimTibackx/zenstack/commit/8438e2b4f7e1517d0f0f0682c5b400559afd66d6))
* add eslint ignore to generated trpc helper source ([#759](https://github.com/WimTibackx/zenstack/issues/759)) ([f7e8a08](https://github.com/WimTibackx/zenstack/commit/f7e8a08987da4f6af3ad5058209cdc22720dce8f))
* add IntField as a valid mapping to TinyInt ([#822](https://github.com/WimTibackx/zenstack/issues/822)) ([db9cc7f](https://github.com/WimTibackx/zenstack/commit/db9cc7f4e5028ac0342a8df9993260d134f37d18))
* add missing auth export ([#1449](https://github.com/WimTibackx/zenstack/issues/1449)) ([81a2adf](https://github.com/WimTibackx/zenstack/commit/81a2adfe43c958ffe1645d24bcfb119a3daf8edd))
* add missing await in test ([2f192be](https://github.com/WimTibackx/zenstack/commit/2f192be35d0174017bba38294bb13fba3fa95b20))
* add missing exports for the generated .zenstack package ([#760](https://github.com/WimTibackx/zenstack/issues/760)) ([8ac0915](https://github.com/WimTibackx/zenstack/commit/8ac091574892d14edb66baf447f8ea6c5f4907ba))
* add missing MSSQL related stdlib declarations and parameters ([#748](https://github.com/WimTibackx/zenstack/issues/748)) ([4e6531e](https://github.com/WimTibackx/zenstack/commit/4e6531ece28650844e9baad25d0d49395bfe931b))
* additional fix for 1667 ([#1679](https://github.com/WimTibackx/zenstack/issues/1679)) ([4ecfc11](https://github.com/WimTibackx/zenstack/commit/4ecfc11a329bda53908760ce2a296a572f0067cc))
* additional fixes and tests related to cross-model field comparison ([#1496](https://github.com/WimTibackx/zenstack/issues/1496)) ([28c2bc8](https://github.com/WimTibackx/zenstack/commit/28c2bc89314ed1e0a49f069e170ac230ee36d874))
* additional fixes for unique constraint conflict detection ([#1165](https://github.com/WimTibackx/zenstack/issues/1165)) ([9f89c7e](https://github.com/WimTibackx/zenstack/commit/9f89c7ea76adfa73406843e3c2f222ea0bfcb969))
* allow "view" and "import" as identifier ([#750](https://github.com/WimTibackx/zenstack/issues/750)) ([2e15dfb](https://github.com/WimTibackx/zenstack/commit/2e15dfb747fa871a5b25661e3e320a1a5f3cc92a))
* allow empty expr for dbgenerated() ([#1400](https://github.com/WimTibackx/zenstack/issues/1400)) ([#1401](https://github.com/WimTibackx/zenstack/issues/1401)) ([4e61a8b](https://github.com/WimTibackx/zenstack/commit/4e61a8b5c41195420c5bcb08a7ff2489a1ed9155))
* allow models without field declarations ([#749](https://github.com/WimTibackx/zenstack/issues/749)) ([43322e1](https://github.com/WimTibackx/zenstack/commit/43322e111adfc7d888aa8dc04445a5b0f8c2dbcc))
* **api:** support filtering with comma-separated values in rest handler ([#1620](https://github.com/WimTibackx/zenstack/issues/1620)) ([fdbc8cf](https://github.com/WimTibackx/zenstack/commit/fdbc8cf493f9b3543c0a8128e4ce5416497eeef1))
* auth() cannot be resolved if the auth model is marked @[@ignore](https://github.com/ignore) ([#844](https://github.com/WimTibackx/zenstack/issues/844)) ([73f2cec](https://github.com/WimTibackx/zenstack/commit/73f2cec82fea64cea05f7306523f7c6f9ac91f84))
* Auto fix code generate to the wrong place for the imported module ([#1377](https://github.com/WimTibackx/zenstack/issues/1377)) ([f6c6b65](https://github.com/WimTibackx/zenstack/commit/f6c6b653c018c5cde0a0a8c38b441c48c200d172))
* avoid generating error log when getting machine id ([#977](https://github.com/WimTibackx/zenstack/issues/977)) ([c50e013](https://github.com/WimTibackx/zenstack/commit/c50e01346030406c7d1433863a6b7da1914ecdaf))
* avoid importing prisma-related code into language server ([#1441](https://github.com/WimTibackx/zenstack/issues/1441)) ([b22c6a3](https://github.com/WimTibackx/zenstack/commit/b22c6a3ce238ec766d910f23e83aea4e8f10c05d))
* bug in enhancement proxy for detecting nested transactions ([#941](https://github.com/WimTibackx/zenstack/issues/941)) ([85a0525](https://github.com/WimTibackx/zenstack/commit/85a052594c447120ecc8123d30c7b098afcc8841))
* bug with NOT clause reduction when condition is an array ([#848](https://github.com/WimTibackx/zenstack/issues/848)) ([debd35b](https://github.com/WimTibackx/zenstack/commit/debd35b3531262c4df453653cbee10dc85baf222))
* build, lint and etc. ([#833](https://github.com/WimTibackx/zenstack/issues/833)) ([cccbc3c](https://github.com/WimTibackx/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* clean up zod generation ([#883](https://github.com/WimTibackx/zenstack/issues/883)) ([909281f](https://github.com/WimTibackx/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/WimTibackx/zenstack/issues/883)) ([9d4a8ed](https://github.com/WimTibackx/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* **cli:** avoid unnecessary updates to model meta ([#1636](https://github.com/WimTibackx/zenstack/issues/1636)) ([715f2dd](https://github.com/WimTibackx/zenstack/commit/715f2dd2a569233d02eb7d5b81b37d9ce5677075))
* **cli:** enhancer code fails to compile when generated into a custom folder ([#1678](https://github.com/WimTibackx/zenstack/issues/1678)) ([83bdd6d](https://github.com/WimTibackx/zenstack/commit/83bdd6df5ce9b7604ec64d32fb318e244c96d560))
* client-extension test failures ([#874](https://github.com/WimTibackx/zenstack/issues/874)) ([f2ab6a5](https://github.com/WimTibackx/zenstack/commit/f2ab6a521195c4981fd89a5d4094e4130c5b336c))
* **cli:** fixes the issue that enhancer ignores zod schemas if it's explicitly configured in ZModel ([#1632](https://github.com/WimTibackx/zenstack/issues/1632)) ([da69e02](https://github.com/WimTibackx/zenstack/commit/da69e0210bf6bb734236b72d0dc8b9382c786614))
* **cli:** generated TS typing for `auth()` access is too strong ([#1589](https://github.com/WimTibackx/zenstack/issues/1589)) ([6439fd6](https://github.com/WimTibackx/zenstack/commit/6439fd6c6b1621fc3504d54411b0e6bad254099f))
* **cli:** regular relation fields are incorrectly recognized as self-relation ([492dd36](https://github.com/WimTibackx/zenstack/commit/492dd36292c1b50b2f4dba5e3d43c5e47cccc29c))
* **cli:** regular relation fields are incorrectly recognized as self-relation ([#1790](https://github.com/WimTibackx/zenstack/issues/1790)) ([ed6ea50](https://github.com/WimTibackx/zenstack/commit/ed6ea504d343482fd625fa03305a8f484e2f3fd6))
* **cli:** set timeout for latest version check and avoid failing the CLI ([#1559](https://github.com/WimTibackx/zenstack/issues/1559)) ([df32680](https://github.com/WimTibackx/zenstack/commit/df3268023be937746d042afddcd229d953ea85b7))
* compatibility with pnpm monorepo ([#1393](https://github.com/WimTibackx/zenstack/issues/1393)) ([fc8d03d](https://github.com/WimTibackx/zenstack/commit/fc8d03d97d0330df0f70d6cc690125e4d2162cff))
* compatibility with Prisma's "omit" feature ([#1432](https://github.com/WimTibackx/zenstack/issues/1432)) ([296ca25](https://github.com/WimTibackx/zenstack/commit/296ca259c8dd3e38fa988378df4a9e351a11b20b))
* condition error in zod generator ([#810](https://github.com/WimTibackx/zenstack/issues/810)) ([eb6ef1f](https://github.com/WimTibackx/zenstack/commit/eb6ef1f3e24988066d41cc16ad718d6379bfbfed))
* cross-model field comparison validation issue ([#1509](https://github.com/WimTibackx/zenstack/issues/1509)) ([9c7527f](https://github.com/WimTibackx/zenstack/commit/9c7527f713ef549f7d631b21e63004a059d2d53d))
* deal with payload field value with undefined ([#778](https://github.com/WimTibackx/zenstack/issues/778)) ([e41fc74](https://github.com/WimTibackx/zenstack/commit/e41fc747c5a8389d820820c5f8fd95ee13717160))
* **delegate:** `[@omit](https://github.com/omit)` and field-level policies are not enforced when querying with a delegate model ([#1718](https://github.com/WimTibackx/zenstack/issues/1718)) ([57652a1](https://github.com/WimTibackx/zenstack/commit/57652a1831ff79ce923cb808214762791aaca899))
* **delegate:** avoid merging into object of Decimal, Date, etc. ([#1489](https://github.com/WimTibackx/zenstack/issues/1489)) ([ab9d27f](https://github.com/WimTibackx/zenstack/commit/ab9d27f669388764139eb42caeef1bb9f19c7524))
* **delegate:** base fields not properly wrapped inside relation layer when injected from policies ([#1736](https://github.com/WimTibackx/zenstack/issues/1736)) ([bfe6983](https://github.com/WimTibackx/zenstack/commit/bfe698390c689dbe4350f7989cc6a1974ff1aad5))
* **delegate:** concrete model fields are not properly included if queried from a nested context from a parent concrete model ([ab261ae](https://github.com/WimTibackx/zenstack/commit/ab261aed8fd79491250901ecf6e4999456700cea)), closes [#1968](https://github.com/WimTibackx/zenstack/issues/1968)
* **delegate:** concrete model fields are not properly included if queried from a nested context from a parent concrete model ([#1700](https://github.com/WimTibackx/zenstack/issues/1700)) ([8b56d7d](https://github.com/WimTibackx/zenstack/commit/8b56d7da2739220830b5cbe1ddc574726f0d2f41))
* **delegate:** delegate models returned in nested results don't include base fields ([#1662](https://github.com/WimTibackx/zenstack/issues/1662)) ([8589b79](https://github.com/WimTibackx/zenstack/commit/8589b79b66cd5b5be6d37440fc7b4924bac1d056))
* **delegate:** enforcing concrete model policies when read from a delegate base ([#1726](https://github.com/WimTibackx/zenstack/issues/1726)) ([738bba6](https://github.com/WimTibackx/zenstack/commit/738bba6ef1edcd36c576df66a268b63d00741f2b))
* **delegate:** entity create fails when inheriting from a delegate model that extends an abstract model ([#1561](https://github.com/WimTibackx/zenstack/issues/1561)) ([ac2b291](https://github.com/WimTibackx/zenstack/commit/ac2b291bde3d0f66684784c7bc8694c027827319))
* **delegate:** fields from delegate models used in logical groups inside filter are not translated ([#1418](https://github.com/WimTibackx/zenstack/issues/1418)) ([1243422](https://github.com/WimTibackx/zenstack/commit/12434220a5328ec3885a35f7fc1481788fc536e2))
* **delegate:** generated fk fields shouldn't inherit `[@map](https://github.com/map)` attribute from its origin ([#1633](https://github.com/WimTibackx/zenstack/issues/1633)) ([ba8a888](https://github.com/WimTibackx/zenstack/commit/ba8a88828fe8e764ed6bcb8b4407a6214769af5a))
* **delegate:** generated logical prisma schema has errors when abstra… ([#1490](https://github.com/WimTibackx/zenstack/issues/1490)) ([4c74169](https://github.com/WimTibackx/zenstack/commit/4c74169aa78df818a92e3236e834ced83f38068d))
* **delegate:** make sure concrete fields are included when a polymorphic model field is included in deep nesting ([#1524](https://github.com/WimTibackx/zenstack/issues/1524)) ([b34531d](https://github.com/WimTibackx/zenstack/commit/b34531dcd47b875aae083d1a820aa896f3766c8b))
* **delegate:** make sure nested `createMany` is converted into regular `create` ([#1526](https://github.com/WimTibackx/zenstack/issues/1526)) ([3e77974](https://github.com/WimTibackx/zenstack/commit/3e77974c74cb33496d9568fa1d95727449e18522))
* **delegate:** null reference when reading an optional relation ([#1491](https://github.com/WimTibackx/zenstack/issues/1491)) ([41880f3](https://github.com/WimTibackx/zenstack/commit/41880f38d2ee71545aa2ce9f2e6ac8f5575c717d))
* **delegate:** policies inherited from delegate base models are not injected into proper hierarchy ([#1776](https://github.com/WimTibackx/zenstack/issues/1776)) ([4f00cf1](https://github.com/WimTibackx/zenstack/commit/4f00cf12584e59a59ac2a40df1b6e944d15ff3fa))
* **delegate:** push base-level id assignment to base payload when creating a concrete entity ([#1521](https://github.com/WimTibackx/zenstack/issues/1521)) ([a14bf29](https://github.com/WimTibackx/zenstack/commit/a14bf29de4d903c0a226a1604991dd760cbf8614))
* **delegate:** remove `createMany` from delegate input types ([#1619](https://github.com/WimTibackx/zenstack/issues/1619)) ([e01751d](https://github.com/WimTibackx/zenstack/commit/e01751d35e89840b2ce43c629693b769d0b59de1))
* **delegate:** remove `createManyAndReturn` API from delegate model client ([#1769](https://github.com/WimTibackx/zenstack/issues/1769)) ([fc940eb](https://github.com/WimTibackx/zenstack/commit/fc940eb2dff79a65f02c6fcf44df5efa58f57e67))
* **delegate:** several generation issues ([#1417](https://github.com/WimTibackx/zenstack/issues/1417)) ([153dd4f](https://github.com/WimTibackx/zenstack/commit/153dd4f1e6db502f00ab33a5d92d59b64a766811))
* **delegate:** update with "connect" is not properly rejected for polymorphic models ([#1675](https://github.com/WimTibackx/zenstack/issues/1675)) ([0b466bf](https://github.com/WimTibackx/zenstack/commit/0b466bf346bbbd981929a797d717830198e43724))
* disable textmate bundle when JetBrains plugin is uninstalled ([#918](https://github.com/WimTibackx/zenstack/issues/918)) ([7e9cc35](https://github.com/WimTibackx/zenstack/commit/7e9cc35a68ed31e25e7c7eac764528f55a18ac7b))
* enable auto completion inside attribute ([#949](https://github.com/WimTibackx/zenstack/issues/949)) ([20d5bfc](https://github.com/WimTibackx/zenstack/commit/20d5bfc506a42b520eb1cf390149b7afc7c38701))
* enhanced client doesn't work with client extensions that add new model methods ([7dec167](https://github.com/WimTibackx/zenstack/commit/7dec167b8c3bb03c3cae57e6566b223bfce57cca))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/WimTibackx/zenstack/issues/851)) ([ea564c9](https://github.com/WimTibackx/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* field with read-deny can be used to filter due to a prisma bug ([#1728](https://github.com/WimTibackx/zenstack/issues/1728)) ([b8d8902](https://github.com/WimTibackx/zenstack/commit/b8d890293e9336d7571d5c5afe0ae5733d880d86))
* field-level access is incorrectly rejected when there're no allow rules ([#1510](https://github.com/WimTibackx/zenstack/issues/1510)) ([484b920](https://github.com/WimTibackx/zenstack/commit/484b920b659618b64f78521715ff67501035c9ba))
* field-level policy should filter out records when the field used for filtering is not allowed to read ([#1661](https://github.com/WimTibackx/zenstack/issues/1661)) ([19a3b5d](https://github.com/WimTibackx/zenstack/commit/19a3b5dcafe59cbad1ada91b5f2d2b9730623ccf))
* generate both cjs and esm builds for swr plugin ([#892](https://github.com/WimTibackx/zenstack/issues/892)) ([385839f](https://github.com/WimTibackx/zenstack/commit/385839f101941234c5293d70d07e064c1c458387))
* generate foreign key field in zod schemas ([#868](https://github.com/WimTibackx/zenstack/issues/868)) ([124a0a2](https://github.com/WimTibackx/zenstack/commit/124a0a2a15306022501f071beb855fe03de21aa3))
* generate suspense queries in tanstack-query plugin ([#996](https://github.com/WimTibackx/zenstack/issues/996)) ([43eb615](https://github.com/WimTibackx/zenstack/commit/43eb61508fbde4431831343566dd637dff7a6d49))
* generated code fails to compile when prisma's output path overlaps with zenstack ([#1765](https://github.com/WimTibackx/zenstack/issues/1765)) ([2d42606](https://github.com/WimTibackx/zenstack/commit/2d42606975f49cb74ab512e4c7aa068179f026fe))
* generated prisma schema contains error when using "@[@unique](https://github.com/unique)" with base field ([#1766](https://github.com/WimTibackx/zenstack/issues/1766)) ([a800fe6](https://github.com/WimTibackx/zenstack/commit/a800fe6da19282c733dc46ffa911d1fe214bd7c4))
* generated zod schemas fail to compile when outputting to a custom dir ([#1611](https://github.com/WimTibackx/zenstack/issues/1611)) ([c7e7406](https://github.com/WimTibackx/zenstack/commit/c7e7406fa368793865dab0da18db50fd47f53050))
* handle foreign key field-level access check during relation update ([#847](https://github.com/WimTibackx/zenstack/issues/847)) ([3c8cba7](https://github.com/WimTibackx/zenstack/commit/3c8cba71b283d6029087971fc3b160892d0d143e))
* **hooks:** prefer to use global fetch when available ([3ed1614](https://github.com/WimTibackx/zenstack/commit/3ed1614939dd6a9359edd4fbece5a85cbfc61fd7))
* **hooks:** prefer to use global fetch when available ([#1826](https://github.com/WimTibackx/zenstack/issues/1826)) ([9eb241f](https://github.com/WimTibackx/zenstack/commit/9eb241fc9cb700a798682f6e0a47e2a03aa0299a))
* **hooks:** support optimistic update for "upsert" ([#1767](https://github.com/WimTibackx/zenstack/issues/1767)) ([374e962](https://github.com/WimTibackx/zenstack/commit/374e9627bf3fc7db67896d0fd83590f0d5657b0a))
* incorrect calculation of backlink field for self-relations ([#1540](https://github.com/WimTibackx/zenstack/issues/1540)) ([303f103](https://github.com/WimTibackx/zenstack/commit/303f103e0e541e3e7e64711b3731ff4b2555fe62))
* incorrect cross-model comparision for && and || expressions ([#1512](https://github.com/WimTibackx/zenstack/issues/1512)) ([908048b](https://github.com/WimTibackx/zenstack/commit/908048b01430ff6552e8df558d5b5905136ea5cc))
* incorrect policy injection for nested to-one relation inside a to-many parent ([#777](https://github.com/WimTibackx/zenstack/issues/777)) ([876e013](https://github.com/WimTibackx/zenstack/commit/876e01392112ed369cde37cb77ca983126f2d881))
* incorrect policy injection for post-update rules with deep member access ([#1665](https://github.com/WimTibackx/zenstack/issues/1665)) ([6225292](https://github.com/WimTibackx/zenstack/commit/622529282102b1d40b08cad95c23bfb83749436f))
* incorrect prisma query executed when count using a where filter involving a polymorphic base field ([#1586](https://github.com/WimTibackx/zenstack/issues/1586)) ([3140d9b](https://github.com/WimTibackx/zenstack/commit/3140d9bee91171665a8f1f69b8939a38643f9cb1))
* incorrect reverse query built for to-many relation ([d2ad3a5](https://github.com/WimTibackx/zenstack/commit/d2ad3a59f93a74189c29d3ee2960fc887b14851c))
* incorrect reverse query built for to-many relation ([#815](https://github.com/WimTibackx/zenstack/issues/815)) ([2c345e1](https://github.com/WimTibackx/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* incorrect typing when Prisma client extension is used with logical client ([#1557](https://github.com/WimTibackx/zenstack/issues/1557)) ([7f9e408](https://github.com/WimTibackx/zenstack/commit/7f9e408d1c6a01e65237b942d2533dbc00ddafda))
* incorrect validation errors for abstract models with validation rules ([#991](https://github.com/WimTibackx/zenstack/issues/991)) ([fa0dafb](https://github.com/WimTibackx/zenstack/commit/fa0dafb98f2f9c034731f380ac190e048d0c0d3f))
* infinite recursion when injecting field selection for field-level permission check ([#1452](https://github.com/WimTibackx/zenstack/issues/1452)) ([29962e0](https://github.com/WimTibackx/zenstack/commit/29962e0b48a73ae6d42f43f2575048ba9cf6a953))
* issue 961, incorrect policy injection for nested `updateMany` ([bf690a0](https://github.com/WimTibackx/zenstack/commit/bf690a072771ab95907a8f56079c4f6aaf655849))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/WimTibackx/zenstack/issues/962)) ([2b2bfcf](https://github.com/WimTibackx/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issues with cross-model comparison identification and injection ([#1508](https://github.com/WimTibackx/zenstack/issues/1508)) ([665f9b3](https://github.com/WimTibackx/zenstack/commit/665f9b33b58acc5170c4ccb8e73be525fbb89734))
* lint issue in generated swr/tanstack hooks ([#877](https://github.com/WimTibackx/zenstack/issues/877)) ([4577232](https://github.com/WimTibackx/zenstack/commit/45772326c7980f5338452d4048c43f76a6b09bf0))
* make sure fields inherited from  abstract base models are properly recognized as id ([#1130](https://github.com/WimTibackx/zenstack/issues/1130)) ([4d9d093](https://github.com/WimTibackx/zenstack/commit/4d9d09338ae88eac331ec06ec908ca1256f5b8a5))
* model meta generator doesn't correctly identify relation names ([#1244](https://github.com/WimTibackx/zenstack/issues/1244)) ([4c7fbd4](https://github.com/WimTibackx/zenstack/commit/4c7fbd480214f1e2508fc9a520c571f6274dce8f))
* more robust custom serializer ([#1689](https://github.com/WimTibackx/zenstack/issues/1689)) ([b421047](https://github.com/WimTibackx/zenstack/commit/b421047d945a2744a67a26e9e568a91899d35d67))
* nested `createMany` with `skipDuplicates` option is not handled correctly ([#1163](https://github.com/WimTibackx/zenstack/issues/1163)) ([fef6e83](https://github.com/WimTibackx/zenstack/commit/fef6e83a36f451f671ac2b7db1bc06e2e29faf43))
* openapi - do not generate "id" field in create input if the field has default value ([#758](https://github.com/WimTibackx/zenstack/issues/758)) ([787a244](https://github.com/WimTibackx/zenstack/commit/787a24453c3a32250260ebc138c26a829074ae8f))
* **openapi:** `CreateManyArgs` does not take array as input ([#1246](https://github.com/WimTibackx/zenstack/issues/1246)) ([8137481](https://github.com/WimTibackx/zenstack/commit/813748160e35913f5b26b79b81886ab9ddb02070))
* **openapi:** wrong spec for "Meta" object for rpc-style generation ([#1673](https://github.com/WimTibackx/zenstack/issues/1673)) ([e4e9fbf](https://github.com/WimTibackx/zenstack/commit/e4e9fbfc42b81c4b5aa0eef0158e81aaf2e59aee))
* optimize generated trpc typing and fix "select" issue ([#972](https://github.com/WimTibackx/zenstack/issues/972)) ([c0d60a0](https://github.com/WimTibackx/zenstack/commit/c0d60a00eac9392cb061927126a41a5287467289))
* **plugins/prisma:** add missing enum value documentations in generated prisma schema ([#1390](https://github.com/WimTibackx/zenstack/issues/1390)) ([ef22b70](https://github.com/WimTibackx/zenstack/commit/ef22b7063ddc9fe7006e68dbd750f4d373606b0e))
* policy compilation error for deeply nested post-update rules ([#1382](https://github.com/WimTibackx/zenstack/issues/1382)) ([08471d5](https://github.com/WimTibackx/zenstack/commit/08471d5e0932bf696e8b6929c4490f191710060d))
* Policy generator error for Auth() with multiple level member access ([#922](https://github.com/WimTibackx/zenstack/issues/922)) ([ecf0c19](https://github.com/WimTibackx/zenstack/commit/ecf0c1975403a2b8b70300140b92518cbc34a886))
* **policy:** allow `auth().` calls in filter functions ([#1771](https://github.com/WimTibackx/zenstack/issues/1771)) ([aae9b60](https://github.com/WimTibackx/zenstack/commit/aae9b60bf021acffd6ff40d3dd0c69cd6c6fad18))
* **policy:** field-level override rules don't work properly with non-optional to-one relations ([#1592](https://github.com/WimTibackx/zenstack/issues/1592)) ([050f760](https://github.com/WimTibackx/zenstack/commit/050f7600f59c7d9e02e18cfe25545ae737c2bdba))
* **policy:** properly handle array-form of upsert payload ([#1101](https://github.com/WimTibackx/zenstack/issues/1101)) ([e7e1873](https://github.com/WimTibackx/zenstack/commit/e7e1873744ac2d48e118ae48b23e10723d16db44))
* **policy:** relation filter should respect field-level policies ([#1495](https://github.com/WimTibackx/zenstack/issues/1495)) ([54e1e02](https://github.com/WimTibackx/zenstack/commit/54e1e02839c4f010e21fa50c48289f872d8ae0eb))
* polymorphic logical Prisma schema has identifiers with too long names ([#1482](https://github.com/WimTibackx/zenstack/issues/1482)) ([65443f8](https://github.com/WimTibackx/zenstack/commit/65443f854718c6080f6bd68f7776a326d8790c1a))
* post-update rule for id field is not effective if id is updated ([#1237](https://github.com/WimTibackx/zenstack/issues/1237)) ([5fe85ff](https://github.com/WimTibackx/zenstack/commit/5fe85ffa50d012c65db542602448d5522b71ef9b))
* post-update rules incorrectly reject update ([#826](https://github.com/WimTibackx/zenstack/issues/826)) ([d921a7c](https://github.com/WimTibackx/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/WimTibackx/zenstack/issues/826)) ([e85831e](https://github.com/WimTibackx/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* prisma schema generation issue with calling attribute function with literal ([#930](https://github.com/WimTibackx/zenstack/issues/930)) ([91fe8e7](https://github.com/WimTibackx/zenstack/commit/91fe8e71b513804de36d08b03c37b0c175580906))
* properly handle missing fields when evaluating `@[@validate](https://github.com/validate)` model-level rules ([#1097](https://github.com/WimTibackx/zenstack/issues/1097)) ([e8268d0](https://github.com/WimTibackx/zenstack/commit/e8268d03ae12f3ccbcf1bb1c531a2816b22f6da8))
* properly handle nullable fields in openapi generator ([#906](https://github.com/WimTibackx/zenstack/issues/906)) ([0e422ad](https://github.com/WimTibackx/zenstack/commit/0e422adf1a7f274b850eeba09ef1781b13ce9f1b))
* query injection error when create (in array form) is nested inside an update ([#865](https://github.com/WimTibackx/zenstack/issues/865)) ([ca55bf6](https://github.com/WimTibackx/zenstack/commit/ca55bf61edff7a67765cd8a9eac2b97daaf33506))
* **redwood:** fix incorrect error type thrown ([#1659](https://github.com/WimTibackx/zenstack/issues/1659)) ([1d81325](https://github.com/WimTibackx/zenstack/commit/1d81325696076038483a3c30a93962d0d91afb23))
* reference resolution issue inside collection predicate expressions ([#927](https://github.com/WimTibackx/zenstack/issues/927)) ([d8dce13](https://github.com/WimTibackx/zenstack/commit/d8dce13505e5753aa646fc3aa168da754b75e8aa))
* relation fields are included even if they are set `false` in select clause ([#1429](https://github.com/WimTibackx/zenstack/issues/1429)) ([6a71742](https://github.com/WimTibackx/zenstack/commit/6a717428d3d0176eb3651b488fe0660895dab14d))
* remove warning in vercel environment ([#954](https://github.com/WimTibackx/zenstack/issues/954)) ([0aa69d9](https://github.com/WimTibackx/zenstack/commit/0aa69d987d8a2eb60800d7ff76347ebf078b70f6))
* repl in pnpm environment, improve relative path module loading ([#866](https://github.com/WimTibackx/zenstack/issues/866)) ([e7d29fd](https://github.com/WimTibackx/zenstack/commit/e7d29fda6e80bee46c9e05ff5a2af5266478b9ad))
* report validation error when binary expressions have arrays ([#719](https://github.com/WimTibackx/zenstack/issues/719)) ([2e9fe67](https://github.com/WimTibackx/zenstack/commit/2e9fe67cf8e247bae7838417dd567de94adac39e))
* resolve member access expr only in the context of operand type ([#761](https://github.com/WimTibackx/zenstack/issues/761)) ([ccae413](https://github.com/WimTibackx/zenstack/commit/ccae413418d7f8259068e2668bdb8fdafb7305b6))
* **runtime:** always use id fields to address existing entity during upsert ([#1273](https://github.com/WimTibackx/zenstack/issues/1273)) ([d8c1513](https://github.com/WimTibackx/zenstack/commit/d8c15135a7edb75b459b6f5f1736e5fa2d96a9fa))
* **runtime:** avoid duplicating non-plain objects ([#1545](https://github.com/WimTibackx/zenstack/issues/1545)) ([ba2a113](https://github.com/WimTibackx/zenstack/commit/ba2a113126bad4f2719e60b0a6b23df4125a562d))
* **runtime:** improved query reduction to workaround Prisma issue prisma/prisma[#21856](https://github.com/WimTibackx/zenstack/issues/21856) ([#1634](https://github.com/WimTibackx/zenstack/issues/1634)) ([179634e](https://github.com/WimTibackx/zenstack/commit/179634ebd6f2ebac750ccb80eb9dd0a0e1f093fc))
* **server:** pass custom logger to api handler ([#1783](https://github.com/WimTibackx/zenstack/issues/1783)) ([c0ab830](https://github.com/WimTibackx/zenstack/commit/c0ab830374a2dadd53134c18e24896c1f7c90593))
* **server:** rest handler not returning correct id when model with compound id is read as a relation ([#1784](https://github.com/WimTibackx/zenstack/issues/1784)) ([4fc4cf7](https://github.com/WimTibackx/zenstack/commit/4fc4cf74460ae761209949bb86fc8f589d126396))
* should not reject "update" when there's only field-level override but no model-level policy ([#1052](https://github.com/WimTibackx/zenstack/issues/1052)) ([912c831](https://github.com/WimTibackx/zenstack/commit/912c83176a57ae2e2397c0aab68c0299a6115025))
* Show the correct incomplete error for multiple level inheritance  ([#916](https://github.com/WimTibackx/zenstack/issues/916)) ([b71c1c5](https://github.com/WimTibackx/zenstack/commit/b71c1c53983f77bcfe8f40a1f931547499c9d4ff))
* Show validation error for the field comparison not in the same model ([#912](https://github.com/WimTibackx/zenstack/issues/912)) ([8d5bfe4](https://github.com/WimTibackx/zenstack/commit/8d5bfe402e2219b69520dbd0b820c9f3ba16a2ea))
* stricter binary operation operand type compatibility check ([#846](https://github.com/WimTibackx/zenstack/issues/846)) ([03315cc](https://github.com/WimTibackx/zenstack/commit/03315cc9dfe19e5bf23b23178cba2dfbce89686e))
* support default values in generated zod schemas ([#914](https://github.com/WimTibackx/zenstack/issues/914)) ([0f73e56](https://github.com/WimTibackx/zenstack/commit/0f73e569b496da1dbedff61e1846af3b2bdc2b03))
* support for Prisma 5.16.0 ([#1541](https://github.com/WimTibackx/zenstack/issues/1541)) ([0a293ca](https://github.com/WimTibackx/zenstack/commit/0a293ca0afebee621848463e05408a39dfa934e2))
* support loading plugin.zmodel from a relative path ([#837](https://github.com/WimTibackx/zenstack/issues/837)) ([66ab915](https://github.com/WimTibackx/zenstack/commit/66ab915dc152259e74d12e12d23a95eea310ec86))
* support postgres extensions ([#718](https://github.com/WimTibackx/zenstack/issues/718)) ([cdc98e0](https://github.com/WimTibackx/zenstack/commit/cdc98e08224a23ea3f6e5d620c11c90a34ed6435))
* support string literal keys for object expressions in ZModel ([#752](https://github.com/WimTibackx/zenstack/issues/752)) ([22b1bf9](https://github.com/WimTibackx/zenstack/commit/22b1bf9ddd4062000f2cd7d183e004dd3d5917c6))
* supporting using type names as reference target as well ([d17a85c](https://github.com/WimTibackx/zenstack/commit/d17a85c1020d616085e7957816c17d7481894169))
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
* **trpc:** create/upsert routers shouldn't be generated for delegate models ([#1566](https://github.com/WimTibackx/zenstack/issues/1566)) ([4f56c15](https://github.com/WimTibackx/zenstack/commit/4f56c156fb95528ea9f60a04a4264f81489a5978))
* **trpc:** make input arg's optionality consistent with Prisma ([#1730](https://github.com/WimTibackx/zenstack/issues/1730)) ([23c87eb](https://github.com/WimTibackx/zenstack/commit/23c87eb6d8bb8d2d7d2fd00436453c9d612feaba))
* **trpc:** make sure "import type" is used for type-only imports ([#1425](https://github.com/WimTibackx/zenstack/issues/1425)) ([3b38311](https://github.com/WimTibackx/zenstack/commit/3b38311e049761c226791224afab07fae21edd1f))
* **trpc:** temp workaround for Node.js importing from CJS module issue ([#1436](https://github.com/WimTibackx/zenstack/issues/1436)) ([d2709f6](https://github.com/WimTibackx/zenstack/commit/d2709f6a597c91015985188d435d26c799d514d1))
* typing generated for options parameter in the hooks method ([#946](https://github.com/WimTibackx/zenstack/issues/946)) ([acb23d1](https://github.com/WimTibackx/zenstack/commit/acb23d1d1e3f5ff1ce3452971ac7103c6a38326c))
* unintended changes to "backlink" of abstract model's metadata ([#1691](https://github.com/WimTibackx/zenstack/issues/1691)) ([9e93985](https://github.com/WimTibackx/zenstack/commit/9e93985589abc4d22eba433b7927193b4fd405a6))
* use pnpm host mode to resolve tsc compatibility issues ([#1613](https://github.com/WimTibackx/zenstack/issues/1613)) ([5b437d9](https://github.com/WimTibackx/zenstack/commit/5b437d9b6225cceb51a1cdbcf65ff340dadac931))
* use zod parse result data as mutation input ([#997](https://github.com/WimTibackx/zenstack/issues/997)) ([613ac8d](https://github.com/WimTibackx/zenstack/commit/613ac8d2cd638272bcc7b24e0fb96e60c0d43acc))
* using `auth()` in `[@default](https://github.com/default)()` is not effective for `createManyAndReturn` ([#1727](https://github.com/WimTibackx/zenstack/issues/1727)) ([64198a3](https://github.com/WimTibackx/zenstack/commit/64198a3e2dd838b3ac81f48e639716d4ec773d69))
* validate zod schema before update operation is executed ([#1051](https://github.com/WimTibackx/zenstack/issues/1051)) ([9db52db](https://github.com/WimTibackx/zenstack/commit/9db52dbb77650d7c99380308803b7b4b4b7ae42d))
* Validation error when @[@unique](https://github.com/unique) attribute is defined in the different model of the relation field ([#1430](https://github.com/WimTibackx/zenstack/issues/1430)) ([23a9bbb](https://github.com/WimTibackx/zenstack/commit/23a9bbbae4febd7fe74718201fe14fde582b9d0c))
* VsCode error textDocument/codeAction failed ([#915](https://github.com/WimTibackx/zenstack/issues/915)) ([3afe42f](https://github.com/WimTibackx/zenstack/commit/3afe42f9b0b1fda4dfbe18d359824d0f4829fc3b))
* VSCode extension fails to resolve imports from npm packages in pnpm workspaces ([#1779](https://github.com/WimTibackx/zenstack/issues/1779)) ([d83b7ee](https://github.com/WimTibackx/zenstack/commit/d83b7eeed07a8c4b1c07c2bc274cabdf8e5ff7f5))
* **vscode:** language server error when formatting models with `Unsupported` fields ([#1558](https://github.com/WimTibackx/zenstack/issues/1558)) ([b46743b](https://github.com/WimTibackx/zenstack/commit/b46743b26706767401764c86014fa44b6a5c76b3))
* **vscode:** more robustly handle VSCode document URI ([#1376](https://github.com/WimTibackx/zenstack/issues/1376)) ([5cc8f18](https://github.com/WimTibackx/zenstack/commit/5cc8f186409b3b50ede1a5f435ab990f500f4e91))
* vue-query typing issue ([#1009](https://github.com/WimTibackx/zenstack/issues/1009)) ([b2e1635](https://github.com/WimTibackx/zenstack/commit/b2e1635cb1857afebde286a0c077c0f561d0bbec))
* when field policy only has deny rule, access should be allowed when the rule doesn't satisfy ([#818](https://github.com/WimTibackx/zenstack/issues/818)) ([62a8200](https://github.com/WimTibackx/zenstack/commit/62a82001cde1c8e0ac598035b8df77b9049fabaa))
* wrong payload injected for nested create in update ([#715](https://github.com/WimTibackx/zenstack/issues/715)) ([d8f0954](https://github.com/WimTibackx/zenstack/commit/d8f0954fc15b6ea3df033a7c5fea414ff4aba8c9))
* zenstack cli errors while using bun/bunx during docker build ([#1011](https://github.com/WimTibackx/zenstack/issues/1011)) ([0704f9d](https://github.com/WimTibackx/zenstack/commit/0704f9db945fc922746ecd480ae833fd64415784))
* zenstack generate fails when path contains space ([#845](https://github.com/WimTibackx/zenstack/issues/845)) ([e99ad2c](https://github.com/WimTibackx/zenstack/commit/e99ad2cdd495251e15abc47172aa37814f55c7b4))
* Zmodel linker doesn't recursively visit base types when building resolution scopes ([#992](https://github.com/WimTibackx/zenstack/issues/992)) ([da33881](https://github.com/WimTibackx/zenstack/commit/da3388190020041965ff104a346f932a8d32b59d))
* **zmodel:** allow type names to be used as declaration names ([#1424](https://github.com/WimTibackx/zenstack/issues/1424)) ([5806a4d](https://github.com/WimTibackx/zenstack/commit/5806a4dc4585293e1da746bdc1485c54d7e993b7))
* **zmodel:** check optionality consistency between relation and fk fields ([#1053](https://github.com/WimTibackx/zenstack/issues/1053)) ([583520e](https://github.com/WimTibackx/zenstack/commit/583520e5dce1d898becf3da9553c6faf08db6343))
* **zmodel:** enum is resolved to wrong element after merging base models ([#1437](https://github.com/WimTibackx/zenstack/issues/1437)) ([6852958](https://github.com/WimTibackx/zenstack/commit/68529580028dfcfce50cb9af78a9b67d72e2a6a5))
* **zmodel:** fields from base model cannot be accessed from `future().` ([#1704](https://github.com/WimTibackx/zenstack/issues/1704)) ([1395892](https://github.com/WimTibackx/zenstack/commit/139589290dacd20874ec942a6179930b388e5aec))
* **zmodel:** fix grammar ambiguity ([#1433](https://github.com/WimTibackx/zenstack/issues/1433)) ([2c7c82b](https://github.com/WimTibackx/zenstack/commit/2c7c82b29f54a7df4752aa74dfcda2c8f0a69a24))
* **zmodel:** resolve `auth()` from all loaded and reachable documents ([#1428](https://github.com/WimTibackx/zenstack/issues/1428)) ([cb50826](https://github.com/WimTibackx/zenstack/commit/cb508260c3dd1c91f5223685b2703e16c8a7a8ed))
* **zmodel:** several native type attributes have too strict typing ([#1605](https://github.com/WimTibackx/zenstack/issues/1605)) ([91abbb8](https://github.com/WimTibackx/zenstack/commit/91abbb8e1c5e3dfb3ac0cfb5f67edeba357835c4))
* **zod:** "strip" mode causes create payload fields to be accidentally dropped ([#1747](https://github.com/WimTibackx/zenstack/issues/1747)) ([b3b1130](https://github.com/WimTibackx/zenstack/commit/b3b1130b88728853707494c40fcdeb7182235027))
* **zod:** add coercion call when generating schema for DateTime field ([#1068](https://github.com/WimTibackx/zenstack/issues/1068)) ([b60627c](https://github.com/WimTibackx/zenstack/commit/b60627c167706728ac232ce06366d914e3dde23f))
* **zod:** createMany types shouldn't be generated when Prisma version doesn't support it ([#1434](https://github.com/WimTibackx/zenstack/issues/1434)) ([273c107](https://github.com/WimTibackx/zenstack/commit/273c10701e3e646468997a050da1233a77e2a5ad))
* **zod:** don't include @[@validate](https://github.com/validate) rules when generating schema for validating update input ([#1625](https://github.com/WimTibackx/zenstack/issues/1625)) ([3d7678a](https://github.com/WimTibackx/zenstack/commit/3d7678a798924f7fce4bcff3a550fbd9e79a31fa))
* **zod:** generate optional field as `z.optional()` rather than `z.nullish()` to be consistent with Prisma's typing ([#1426](https://github.com/WimTibackx/zenstack/issues/1426)) ([bca13a7](https://github.com/WimTibackx/zenstack/commit/bca13a715b2eec530c2371e2b3df191670c37c9d))
* **zod:** generated schemas fail to compile when a delegate discrimin ator field has default value ([#1705](https://github.com/WimTibackx/zenstack/issues/1705)) ([1ea8e55](https://github.com/WimTibackx/zenstack/commit/1ea8e55623b782b93d455daf3bc10cd39a13ca20))
* **zod:** support `[@default](https://github.com/default)` for `BigInt` values ([#1486](https://github.com/WimTibackx/zenstack/issues/1486)) ([ba636c8](https://github.com/WimTibackx/zenstack/commit/ba636c88b7e0bccdb7dc517e3edc3a6e25a28aaa))
* **zod:** zod create/update schemas should exclude discriminator fields ([#1609](https://github.com/WimTibackx/zenstack/issues/1609)) ([17fe8c3](https://github.com/WimTibackx/zenstack/commit/17fe8c31d0fdc5b620cd190deedcadfae6567b08))

## 0.5.0 (2022-12-15)

### Features

-   Serialization between client (hooks) and server now uses [superjson](https://github.com/blitz-js/superjson), [[#139](https://github.com/zenstackhq/zenstack/issues/139)]

### Fixes and improvements

-   Fixed goto definition issue in VSCode extension, [[#69](https://github.com/zenstackhq/zenstack/issues/69)]

### Breaking changes

-   Next-auth adapter and helper are moved to a separate package `@zenstackhq/next-auth`.

## 0.4.0 (2022-12-01)

### Features

-   `zenstack init` command for initializing a project, [#109](https://github.com/zenstackhq/zenstack/issues/109), [doc](https://zenstack.dev/#/quick-start?id=adding-to-an-existing-project).

-   Field constraint suport, [#94](https://github.com/zenstackhq/zenstack/issues/94), [doc](https://zenstack.dev/#/zmodel-field-constraint).

-   Support for server-side CRUD with access policy check (SSR), [#126](https://github.com/zenstackhq/zenstack/issues/126), [doc](https://zenstack.dev/#/server-side-rendering).

-   Options for disabling fetching in hooks (useful when arguments are not ready), [#57](https://github.com/zenstackhq/zenstack/issues/57), [doc](https://zenstack.dev/#/runtime-api?id=requestoptions).

-   Telemetry in CLI, [#102](https://github.com/zenstackhq/zenstack/issues/102), [doc](https://zenstack.dev/#/telemetry).

-   Iron-session based starter, [#95](https://github.com/zenstackhq/zenstack/issues/95), [link](https://github.com/zenstackhq/nextjs-iron-session-starter).

-   Barebone starter (without authentication), [link](https://github.com/zenstackhq/nextjs-barebone-starter).

-   [Website](https://zenstack.dev) is live!

### Fixes and improvements

-   Merge `@zenstackhq/internal` into `@zenstackhq/runtime` so as to have a single runtime dependency, [#70](https://github.com/zenstackhq/zenstack/issues/70).

-   More accurate log for access policy violation, [#71](https://github.com/zenstackhq/zenstack/issues/71).

-   `auth()` function's return type is now resolved to `User` model in ZModel, instead of `Any`, [#65](https://github.com/zenstackhq/zenstack/issues/65).

-   Improved ZModel type checking, [#67](https://github.com/zenstackhq/zenstack/issues/67), [#46](https://github.com/zenstackhq/zenstack/issues/46), [#99](https://github.com/zenstackhq/zenstack/issues/99).

-   Upgraded to Prisma 4.7.

### Breaking changes

-   @zenstackhq/runtime doesn't export anything now.

    Use @zenstackhq/runtime/types for type definitions shared between client and server, @zenstackhq/runtime/client for client-specific libaries (like React hooks), and @zenstackhq/runtime/server for server-specific libraries.

## 0.3.0 (2022-11-08)

### Features

-   `@password` and `@omit` attribute support

-   Configurable logging (to stdout and emitting as events)

### Fixes and improvements

-   More robust policy checks

-   Properly handles complex types like BigInt, Date, Decimal, etc.

-   Makes sure Prisma schema is regenerated for related CLI commands

-   Lower VSCode engine version requirement for the extension

-   Better overall documentation

## 0.2.0 (2022-10-29)

### Features

-   `ZModel` data modeling schema (an extension to [Prisma Schema](https://www.prisma.io/docs/concepts/components/prisma-schema))

-   `zenstack` cli for generating RESTful services, auth adapters and React hooks from `ZModel`

-   Policy engine that transforms policy rules into Prisma query conditions

-   Runtime packages

-   An initial set of tests
