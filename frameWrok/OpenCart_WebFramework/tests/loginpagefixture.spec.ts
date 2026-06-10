// test cases
import {test, expect} from '../src/fixtures/pageFixtures'
import { LoginPage } from '../src/pages/LoginPage';
import { CsvHelper } from '../src/utils/csvHelper';


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
   await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
   expect(await homePage.isLogoutLinkExist()).toBeTruthy();
   expect(await homePage.getHomePageTitle()).toBe('My Account');

});

//DD_1. sequence mode -- onl 1 test is running with test data one by one using testData. from fixture
// test('user login to web using wrong credentials  test',async ({loginPage,testData})=>{
//    for(let row of testData){
//     await loginPage.doLogin(row.username,row.password);
//     expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
//    }

// });

// DD_2. without fixture, parallel mode. read csv data directly and loop the test method row size...(recommended)
let testData = CsvHelper.readCsv('src/data/loginData.csv');

for (let row of testData){
    test (`invalid login test - ${row.username}=${row.password}` , async({loginPage})=>{
          await loginPage.doLogin(row.username,row.password);
          expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();

    })
}