// test cases
import {test, expect} from '../src/fixtures/pageFixtures'


test.beforeEach(async ({ loginPage }) => {
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
test('login page title test',async ({loginPage})=>{
    const pageTitle = await loginPage.getLoginPageTitle();
    console.log('login page title is ', pageTitle);
    expect(pageTitle).toBe('Account Login');
});

test('forgot password link test',async ({loginPage})=>{
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
});

test('user able to login test',async ({loginPage,homePage})=>{
   await loginPage.doLogin('pwtestbatch@open.com', 'pw123');
   expect(await homePage.isLogoutLinkExist()).toBeTruthy();
   expect(await homePage.getHomePageTitle()).toBe('My Account');

});