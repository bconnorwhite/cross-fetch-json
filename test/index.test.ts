import { test, expect } from "@jest/globals";
import z from "zod";
import { fetchJSON, getFetchFn } from "../source/index.js";

const licenseURL = "https://raw.githubusercontent.com/spdx/license-list-data/master/json/licenses.json";

test("success", () => {
  fetchJSON(licenseURL).then((licenses) => {
    expect(licenses).not.toBe(undefined);
  });
});

test("error", () => {
  fetchJSON("https://raw.githubusercontent.com/").then((result) => {
    expect(result).toBe(undefined);
  });
});

test("text", () => {
  fetchJSON("https://google.com").then((result) => {
    expect(result).toBe(undefined);
  });
});

test("zod", async () => {
  const schema = z.object({
    licenseListVersion: z.string(),
    licenses: z.array(z.object({
      reference: z.string().url(),
      isDeprecatedLicenseId: z.boolean(),
      detailsUrl: z.string().url(),
      referenceNumber: z.number(),
      name: z.string(),
      licenseId: z.string(),
      seeAlso: z.array(z.string()),
      isOsiApproved: z.boolean()
    }))
  });
  const fetchLicenses = getFetchFn(schema);
  const licenses = await fetchLicenses(licenseURL);
  expect(licenses).not.toBe(undefined);
});
