"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectId, dataset, apiVersion } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "eshi-resorts",
  title: "Eshi Resorts Blog",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
