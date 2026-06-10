import {test, Page, Browser, FrameLocator, Frame} from "@playwright/test"
test('iframe element test',async ({page})=>{
    await page.goto('https://formsite.com/templates/registration-form-templates/vehicle-registration-form/');

    await page.getByTitle("Vehicle-Registration-Forms-and-Examples").click();
    let frameLocator: FrameLocator = page.frameLocator("#frame-one748593425");
    await frameLocator.getByRole('textbox',{name:"Location"}).fill("LA");
    await frameLocator.locator("#RESULT_TextField-1").fill("My Title");

    let header = await page.locator(".details__form-preview-title").innerText();
    console.log(header);


  

  

    await page.pause();

})

test('frame element test',async ({page})=>{
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

    let headerVal = await page.frameLocator('[name="main"]').getByRole("heading", {level:2}).innerText();
    console.log(headerVal);

    let footerVal = await page.frameLocator('[name="bot"]').getByRole("heading", {level:2}).innerText();
    console.log(footerVal);


    let allFrames:Frame[] = page.frames();
    let frameCount = allFrames.length;
    console.log(frameCount);

    for(let fr of allFrames){
        let frameName: string = fr.name();
        let url:string = fr.url();
        console.log(frameName," : ",url);

    }




  

  

    await page.pause();

})


test('nested frame test',async ({page})=>{
    await page.goto('https://www.dezlearn.com/nested-iframes-example/');

    let parentFrame = page.frameLocator("#parent_iframe");
    let childFrame = parentFrame.frameLocator('#iframe1');
    await childFrame.getByRole('button', {name:'Click Here'}).click();
    let mesg = await childFrame.locator("#processing").innerText();
    console.log(mesg);
    console.log("--------------");
    parentFrame.getByRole('button',{name:"Click Here"}).click();
    let outerMessage = await parentFrame.locator("#processing").innerText();
    console.log(outerMessage);


    await page.pause();

})