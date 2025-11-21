import { test, expect } from "@playwright/test";

test("check python page", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page.getByRole("link", { name: "Get Started" }).click();
  await page.getByRole("button", { name: "Node.js" }).hover();
  await page.getByRole("navigation",{name:"Main"}).getByText('Python').click();
//   await page.getByText("Python", { exact: true }).click();

  await expect(page).toHaveURL("https://playwright.dev/python/docs/intro");
  await expect(
    page.getByText("Installing Playwright", { exact: true })
  ).not.toBeVisible();

  const pythondescription: string =
    "Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation.";
  await expect(page.getByText(pythondescription)).toBeVisible();
});
