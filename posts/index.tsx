import type { JSX } from "solid-js";

export interface Info {
  title: string,
  shared: string,
  updated: string,
  load: () => Promise<{ default: () => JSX.Element }>,
}

export default {
  "20240206-joiho": {
    title: "JOI2024参加記",
    shared: "2024-02-06",
    updated: "2026-10-15",
    load: () => import("./20240206-joiho"),
  },
  "20240327-joisp": {
    title: "JOI2024 春参加記",
    shared: "2024-03-27",
    updated: "2026-10-15",
    load: () => import("./20240327-joisp"),
  },
  "20241021-procon35": {
    title: "高専プロコン35参加記",
    shared: "2024-10-21",
    updated: "2026-10-15",
    load: () => import("./20241021-procon35"),
  },
  "20251013-procon36": {
    title: "高専プロコン36参加記",
    shared: "2025-10-13",
    updated: "2026-10-15",
    load: () => import("./20251013-procon36"),
  },
} as const satisfies { [slug: string]: Info };
