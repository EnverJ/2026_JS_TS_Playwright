
import {test, Page, Browser, Locator} from "@playwright/test"

// SVG: 
// CSS SELECTOR: normal way
// xpath: regular xpath will not be supported
// local-name () or name()
test('flipkart svg test',async ({page})=>{
    await page.goto('https://flipkart.com');
    await page.getByRole('textbox', {name:"Search for Products, Brands"}).fill("macbook pro");
 //   await page.getByRole('button',{name:"Search for Products, Brands and More" }).locator('svg[fill="none"]').click();

 await page.getByRole('button',{name:"Search for Products, Brands and More" }).locator('//*[local-name()="svg"]').click();




    await page.pause();

})

test('svg graph test',async ({page})=>{
    await page.goto('https://petdiseasealerts.org/forecast-map');

    await page.waitForTimeout(5000);
let frameEle = page.frameLocator('iframe[id*="map-instance"]'); //id* --> contains, id^. ----> ending with, id$ ---> starting with
let allRegions:Locator[] =  await frameEle.locator('g.region').all();
console.log('total region is ', allRegions.length);

for(let name of allRegions){
   // await name.hover();
   //bounding in playwright
   let box = await name.boundingBox();
   let centerX = box!.x + box!.width/2;  // ! null check
   let centerY = box!.y+ box!.height/2;
   await page.mouse.move(centerX,centerY);
    let stateName = await name.getAttribute("id");
    console.log(stateName);
    await page.waitForTimeout(500);

}



    await page.pause();

})
