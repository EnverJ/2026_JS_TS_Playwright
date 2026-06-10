import test,{Page} from "@playwright/test";

test('xpath test', async ({page})=>{
 await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
await page.locator("//input[@id='input-firstname']").fill("enver");

// textContext(): text with white space + any hidden text + text blank lines
let header = await page.locator("//h1[text()='Register Account']").textContent();
console.log("header: ",header);

// innerText(): exact text
let innerText = await page.locator("//h1[text()='Register Account']").innerText();
console.log("text content: ", innerText);

// contains: partial value
// //htmltag[contains(@attribute, 'value')]

// //input[contains(@id, 'firstname') and contains(@placeholder, 'name') and @name='firstname']
// //htmltag[contains(text(), 'values')]. --> //h1[contains(text, 'Register')]
// await page.locator("//input[contains(@id, 'firstname') and contains(@placeholder, 'name') and @name='firstname']");

// start-with
// //h1[starts-with(text, 'Register')]

// parent to child element
// parent/child --> direct
// //footer//a --> direct + indirect

// CSS
// 1. id:
// #id, htmltag#id
// input#input-firstname

// 2. class : will avoid it coz it is not unique
// .classname. or htmltag.classname


// 3. any attributes based class name {

// htmlag[attr='val']
// input[placeholder='Password confirm']
// htmltag[attr='val'][attr2='val']

// 4. text in css?: NA
// open codegen
// locator('h1:has-text('Register')').  --> this can be used for partial matching
// locator('h1:text-is('Register')').  --> exact matching

// old style wat: using text=
// locator('text=Register Account')   --> can be partial

//await page.pause();
})