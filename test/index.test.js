const fetch = require('../build/index.js')["default"];
const { isJSONObject } = require('types-json');

test("success", () => {
  fetch("https://raw.githubusercontent.com/spdx/license-list-data/master/json/licenses.json").then((result) => {
    expect(isJSONObject(result)).toBe(true);
  });
});

test("error", () => {
  fetch("https://raw.githubusercontent.com/").then((result) => {
    expect(result).toBe(undefined);
  });
});

test("text", () => {
  fetch("https://google.com").then((result) => {
    expect(result).toBe(undefined);
  });
});
