// test cases
import {test, expect } from "@playwright/test"
import { LoginPage } from "../src/pages/LoginPage"
import { HomePage } from "../src/pages/HomePage";

let loginPage: LoginPage;
let homepage: HomePage;


test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.gotToLoginPage();
  homepage = new HomePage(page);
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

test('user able to login test',async ({page})=>{
   await loginPage.doLogin('pwtestbatch@open.com', 'pw123');
   expect(await homepage.isLogoutLinkExist()).toBeTruthy();
   expect(await homepage.getHomePageTitle()).toBe('My')

});