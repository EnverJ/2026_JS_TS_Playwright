import {test, Page, Browser, Locator} from "@playwright/test"
test('two windows test', async({browser})=>{

    // two window scenarios
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://orangehrm.com/contact-sales");
   let [childWindowPage] = await Promise.all([
        context.waitForEvent('page'), // start listening the page event in the browser
        page.getByRole('link', {name:"About Us"}).click() // this will click on the link
    ]);

    await childWindowPage.waitForLoadState();

    let allPages = context.pages();
    console.log("total number of pages: ",allPages.length);

    await childWindowPage.bringToFront();
    console.log('the child window title is ', await childWindowPage.title());

    // close the window
    await childWindowPage.close();

    await page.bringToFront(); // focus bring back to paren window
    console.log("the parent window title is ", await page.title());

    await page.pause();
   
});

test('multiple windows test', async({browser})=>{

    // 
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://orangehrm.com/contact-sales");
   
    // array of links locator:

    let links:Locator[] = [
        page.getByRole('link', {name:"About Us"}),
        page.getByRole('link', {name:"Contact Us"}),
        page.getByRole('link', {name:"Press Release"}),
        page.getByRole('link', {name:"Become a Partner"})
    ]

    let childWindowPages : Page[] = []; // 0

    // open all 4 child windows:

    for (let link of links){
        let [childWindows] = await Promise.all([
            context.waitForEvent('page'),
            link.click()
        ]);
        await childWindows.waitForLoadState();
        childWindowPages.push(childWindows);
    };

    console.log('total number of page: ', context.pages().length); // 5
     

    // go to each and every window and get the title, close it ...
    for(let  i = 0; i < childWindowPages.length; i++){
        let child = childWindowPages[i];
        await child.bringToFront();
        console.log('child title: ', await child.title());
         await child.waitForTimeout(1000);
        await child.close();

       
    }

    // back to the parent widow: only 1 tab is left
    await page.bringToFront();
    console.log('parent window title is ', await page.title());
    console.log('Remaining pages: ', context.pages().length);
    await page.close();



    await page.pause();
   
});