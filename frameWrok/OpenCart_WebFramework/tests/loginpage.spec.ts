// test cases
import {test, expect } from "@playwright/test"
import { LoginPage } from "../src/pages/LoginPage"

let loginPage: LoginPage;


test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.gotToLoginPage();
});

// test('login page title test',async ({page})=>{
//     let loginPage = new LoginPage(page);
//     await loginPage.gotToLoginPage();
//     const pageTitle = await loginPage.getLoginPageTitle();
//     console.log('login page title is ', pageTitle);
//     expect(pageTitle).toBe('Account Login');
// });

// test('forgot password link test',async ({page})=>{
//     let loginPage = new LoginPage(page);
//     await loginPage.gotToLoginPage();
//     expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
    
 
// });
test('login page title test',async ({page})=>{
    const pageTitle = await loginPage.getLoginPageTitle();
    console.log('login page title is ', pageTitle);
    expect(pageTitle).toBe('Account Login');
});

test('forgot password link test',async ({page})=>{
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
});