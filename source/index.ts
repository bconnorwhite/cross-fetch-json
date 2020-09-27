import fetch from "cross-fetch";
import { parseJSONValue, JSONValue, JSONObject, JSONArray } from "parse-json-object";

export default async function<T extends JSONValue>(info: RequestInfo, init: RequestInit = {}): Promise<T | undefined> {
  return fetch(info, {
    ...init,
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      ...(init.headers ?? {})
    }
  }).then(async (response) => {
    return response.text().then((text) => {
      return parseJSONValue<T>(text);
    });
  });
}

export {
  JSONValue,
  JSONObject,
  JSONArray
}
