import fetch from "cross-fetch";
import parse, { JSONObject } from "parse-json-object";

export default async function(info: RequestInfo, init: RequestInit = {}): Promise<JSONObject | undefined> {
  return fetch(info, {
    ...init,
    headers: {
      accept: "application/json",
      ...(init.headers ?? {})
    }
  }).then(async (response) => {
    return response.text().then((text) => {
      return parse(text);
    });
  });
}
