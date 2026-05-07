// paren 
        // child
    // PW Chain: semantic + locator + filter

    // webtable

    import {test, Page, Browser} from "@playwright/test"


    test('page loading state', async({page})=>{
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register",{waitUntil:'load'});
        await page.locator('form').getByRole('textbox', {name:"First Name"}).fill('naveen');
        await page.locator('form').getByRole('checkbox').check();
        await page.locator('#column-right').getByRole('link', {name: "Login"}).click();

        await page.pause();
     
    
    })

      test('webtable checkbox click test', async({page})=>{
        await page.goto("https://qavbox.github.io/demo/webtable/",{waitUntil:'load'});
     await    page.locator('#table01').locator('tr')
		.filter({hasText:'Selenium'})
		.getByRole('checkbox').click();

        await page.locator('#table01').locator('tr')
		.filter({hasText:'Selenium'})
		.getByRole('button',{name:"Delete"}).click();

        await page.pause();

    
    
    
    })


      test('webtable column test', async({page})=>{
        await page.goto("https://qavbox.github.io/demo/webtable/",{waitUntil:'load'});
     let    age:string = await page.locator('#table02').locator('tr')
		.filter({hasText: 'Ashton Cox'})
		.locator('td').nth(3).innerText();
        console.log(age);

        let userData:string[] = await page.locator('#table02').locator('tr')
	.filter({hasText:'Ashton Cox'}).
	locator('td').allInnerTexts();
    console.log(userData);

    for(let e of userData){
        console.log(e);

    }

    let rowNum:number =await page.locator('#table02 tr td').count();
    let colCount:number = await page.locator('#table02 th').count();
    console.log(rowNum,colCount);


        await page.pause();

    
    
    
    })

        test('count table tr in w3school', async({page})=>{
        await page.goto("https://www.w3schools.com/html/html_tables.asp",{waitUntil:'load'});
        let fullData:string[] = await page.locator('table').first().locator('tr').allInnerTexts();
        for (let e of fullData){
            console.log(e);

        }
     

        await page.pause();
     
    
    })

        test('all cehck box click ', async({page})=>{
        await page.goto("https://naveenautomationlabs.com/opencart/ui/webtable.html",{waitUntil:'load'});
        let checkbox = await page.locator('table tr td').getByRole('checkbox').all();
        for (let e of checkbox){
            e.click();
            await page.waitForTimeout(500)

        }
     

        await page.pause();
     
    
    })


    

   

