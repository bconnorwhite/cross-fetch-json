<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>cross-fetch-json</h1>
  <a href="https://npmjs.com/package/cross-fetch-json">
    <img alt="NPM" src="https://img.shields.io/npm/v/cross-fetch-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/cross-fetch-json">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/cross-fetch-json.svg">
  </a>
</div>

<br />

<blockquote align="center">Universal fetch API that returns JSON.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/cross-fetch-json">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/cross-fetch-json?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->
## Installation

```bash
yarn add cross-fetch-json
```

```bash
npm install cross-fetch-json
```

```bash
pnpm add cross-fetch-json
```

## Usage

The `fetchJSON` function returns a `Promise` that resolves to a `JSONValue` or `undefined` if the response is not valid JSON.

```ts
import { fetchJSON } from "cross-fetch-json";

fetchJSON("https://example.com"); // Promise<JSONValue | undefined>
```

A `getFetchFn` function is also exported that allows for custom parsing with Zod:

```ts
import { getFetchFn } from "cross-fetch-json";
import z from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number()
});

const fetchUser = getFetchFn(schema);

fetchUser("https://example.com"); // Promise<{ name: string; age: number; } | undefined>
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/cross-fetch-json?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/cross-fetch-json.svg"></a></h2>

- [cross-fetch](https://www.npmjs.com/package/cross-fetch): Universal WHATWG Fetch API for Node, Browsers and React Native
- [parse-json-object](https://www.npmjs.com/package/parse-json-object): Parse a typed JSON object
- [zod](https://www.npmjs.com/package/zod): TypeScript-first schema declaration and validation library with static type inference


<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/cross-fetch-json.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->

<br />

## Related Packages:
- [parse-json-object](https://www.npmjs.com/package/parse-json-object): Parse a typed JSON object.
- [types-json](https://npmjs.com/package/types-json): Type checking for JSON objects
