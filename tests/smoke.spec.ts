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
