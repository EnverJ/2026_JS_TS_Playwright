import { expect, test } from "@playwright/test";

test("Pseudo element test", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  const content = await page.evaluate(() => {
    return window
      .getComputedStyle(document.querySelector('label[for="input-firstname"]')!, "::before")
      .getPropertyValue("content");
  });
  console.log(content.trim());

  await expect(content).toContain("*");

  let color = await page.evaluate(() => {
    return window
      .getComputedStyle(document.querySelector('label[for="input-firstname"]')!, "::before")
      .getPropertyValue("color");
  });
  console.log(color);

 let title =  await page.evaluate(()=>{
    alert("this is my js alert");
    return document.title;

  })
  console.log(title);



  await page.pause();
});
