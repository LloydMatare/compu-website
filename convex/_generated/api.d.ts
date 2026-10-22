/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as comments from "../comments.js";
import type * as dashboard from "../dashboard.js";
import type * as events from "../events.js";
import type * as gallery from "../gallery.js";
import type * as inbox from "../inbox.js";
import type * as lib_auth from "../lib/auth.js";
import type * as media from "../media.js";
import type * as partners from "../partners.js";
import type * as posts from "../posts.js";
import type * as products from "../products.js";
import type * as projects from "../projects.js";
import type * as seed from "../seed.js";
import type * as seedData from "../seedData.js";
import type * as services from "../services.js";
import type * as settings from "../settings.js";
import type * as testimonials from "../testimonials.js";
import type * as users from "../users.js";
import type * as vacancies from "../vacancies.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  comments: typeof comments;
  dashboard: typeof dashboard;
  events: typeof events;
  gallery: typeof gallery;
  inbox: typeof inbox;
  "lib/auth": typeof lib_auth;
  media: typeof media;
  partners: typeof partners;
  posts: typeof posts;
  products: typeof products;
  projects: typeof projects;
  seed: typeof seed;
  seedData: typeof seedData;
  services: typeof services;
  settings: typeof settings;
  testimonials: typeof testimonials;
  users: typeof users;
  vacancies: typeof vacancies;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
