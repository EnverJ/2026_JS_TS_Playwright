import test,{Page} from "@playwright/test";

test('radio and checkbox test', async ({page})=>{
 await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42");
 let address = `1000 unit, 
 nevada, 
 usa`

 await page.getByRole("textbox", {name:"* Textarea", exact:true}).fill(address);



await page.pause();
  
})