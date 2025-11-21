import { test, expect } from "@playwright/test";
//fixture- global variable :(page,browser), titile test

test("login using keycloak", async ({ page }) => {
  // now you arrive at KYC dashboard
  await page.goto(
    "https://auth.naasasecurities.com.np/realms/naasa/protocol/openid-connect/auth?client_id=kyc&scope=openid%20profile%20email%20roles&response_type=code&redirect_uri=https%3A%2F%2Fwww.naasasecurities.com.np%2Fapi%2Fauth%2Fcallback%2Fkeycloak&state=hwzmN3dKE5m51Kze-IpGSTLV-LZVmJLb-JOVEfoehVs"
  );
  await page
    .getByPlaceholder("Enter Your Email")
    .fill("sujan.jhatri1321@gmail.com");
  await page.getByPlaceholder("Enter Your Password").fill("Test@123");
  await page.getByRole("button", { name: "Sign In" });
  expect(page).toHaveURL("/profile/");
  await page.getByRole("button", { name: "Update KYC" });
  expect(page).toHaveURL("https://newkyc.naasasecurities.com.np/");
});

// test("KYC title test", async ({ page }) => {
//   await page.goto("dev-naasa-client-management.waterflowtechnology.net");
//   let title:string= await page.title();
//   console.log("heading:",title)
//   expect(page).toHaveTitle("KYC");
//   //await expect(page.getByText("Your One-Stop Trading Solution!")).toBeVisible();
// });

// //URL check
// test("KYC test", async ({ page }) => {
//   await page.goto("dev-naasa-client-management.waterflowtechnology.net");
//   let url:string= await page.url();
//   console.log("URL:",url);
//   await expect(page).toHaveURL(/naasa-client-management/);
// });

// // Image locator
// test("KYC URL test", async ({ page }) => {
//   await page.goto("dev-naasa-client-management.waterflowtechnology.net");
//   await expect(page.locator('img[alt="logo"]')).toBeVisible();
// });
