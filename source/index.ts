import crossFetch from "cross-fetch";
import { parseJSONValue, JSONValue, JSONObject, JSONArray, parse } from "parse-json-object";
import z from "zod";

async function fetchJSONText(info: RequestInfo | URL, init?: RequestInit | undefined): Promise<string> {
  const options = init ?? {};
  return crossFetch(info, {
    ...options,
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      ...(options.headers ?? {})
    }
  }).then(async (response) => {
    return response.text();
  });
}

export async function fetchJSON(info: RequestInfo | URL, init?: RequestInit | undefined): Promise<JSONValue | undefined> {
  const text = await fetchJSONText(info, init);
  return parseJSONValue(text);
}

export function getFetchFn<T extends JSONValue>(schema: z.ZodSchema<T>) {
  return async (info: RequestInfo | URL, init?: RequestInit | undefined) => {
    const text = await fetchJSONText(info, init);
    return parse(text, schema);
  };
}

export type {
  JSONValue,
  JSONObject,
  JSONArray
};
