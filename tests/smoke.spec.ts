import { test, expect, type Page } from "@playwright/test";

const ROUTES = [
  // Spanish (default locale, no prefix)
  { url: "/", label: "ES Home" },
  { url: "/posts/", label: "ES Blog list" },
  {
    url: "/posts/servidor-ci-para-sistemas-embebidos-basado-en-una-raspberry-pi/",
    label: "ES Post: CI server",
  },
  {
    url: "/posts/librerias-de-componentes-reusables-simplificando-la-migracion-entre-targets/",
    label: "ES Post: Reusable libs",
  },
  { url: "/acerca-de/", label: "ES About" },
  { url: "/publicaciones/", label: "ES Publications" },
  { url: "/contactar/", label: "ES Contact" },
  // English locale (/en/ prefix)
  { url: "/en/", label: "EN Home" },
  { url: "/en/posts/", label: "EN Blog list" },
  {
    url: "/en/posts/ci-server-for-embedded-systems-based-on-raspberry-pi/",
    label: "EN Post: CI server",
  },
  {
    url: "/en/posts/reusable-component-libraries-simplifying-migration-between-targets/",
    label: "EN Post: Reusable libs",
  },
  { url: "/en/about/", label: "EN About" },
  { url: "/en/publications/", label: "EN Publications" },
  { url: "/en/contact/", label: "EN Contact" },
];

async function checkNoConsoleErrors(page: Page, url: string) {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  await page.goto(url);
  return errors;
}

const DRAFT_POSTS = [
  {
    url: "/en/posts/oscilloscope-for-newbies-i-probes-and-scales/",
    title: "Oscilloscope for newbies I: probes and scales",
    listUrl: "/en/posts/",
    label: "EN draft: Oscilloscope",
  },
  {
    url: "/posts/osciloscopio-para-principiantes-i-sondas-y-escalas/",
    title: "Osciloscopio para principiantes I",
    listUrl: "/posts/",
    label: "ES draft: Osciloscopio",
  },
];

for (const { url, title, listUrl, label } of DRAFT_POSTS) {
  test(`${label} — direct URL returns 404`, async ({ page }) => {
    const response = await page.goto(url);
    expect(response?.status(), `Expected 404 for draft post ${url}`).toBe(404);
  });

  test(`${label} — not listed in blog section`, async ({ page }) => {
    await page.goto(listUrl);
    await expect(page.getByText(title, { exact: false })).not.toBeVisible();
  });
}

for (const { url, label } of ROUTES) {
  test(`${label} — HTTP 200`, async ({ page }) => {
    const response = await page.goto(url);
    expect(response?.status(), `Expected 200 for ${url}`).toBe(200);
  });

  test(`${label} — no console errors`, async ({ page }) => {
    const errors = await checkNoConsoleErrors(page, url);
    expect(errors, `Console errors on ${url}: ${errors.join(", ")}`).toHaveLength(0);
  });

  test(`${label} — landmarks visible`, async ({ page }) => {
    await page.goto(url);
    await expect(page.locator("nav").first()).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    // Target only the site footer (DaisyUI footer class), not PostCard <footer> elements
    await expect(page.locator("footer.footer").first()).toBeVisible();
  });
}
