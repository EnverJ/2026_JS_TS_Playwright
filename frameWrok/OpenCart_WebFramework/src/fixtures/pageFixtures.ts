import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'

// define the types for page fixtures:
type pageFixtures = {
    loginPage: LoginPage,
    homePage: HomePage
}

// extends playwright base test:
export let test = baseTest.extend<pageFixtures>({

    // loginpage is function expression, use is callback, return whatever provided
    loginPage: async({page}, use)=>{
        let loginPage = new LoginPage(page);
        await use(loginPage);

    }, 
    homePage: async ({page}, use)=>{
        let homePage = new HomePage(page);
        await use(homePage)

    }


})

export {expect} from '@playwright/test'

// page objects
// test data
// states json