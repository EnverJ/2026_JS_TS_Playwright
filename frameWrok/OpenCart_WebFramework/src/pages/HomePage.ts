
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage {

    // private locators
    private readonly logoutlink: Locator;
    private readonly headers: Locator;


    // constructor of the class: init the locators
    constructor(page: Page){
        super(page);

        this.logoutlink = page.getByRole('link', { name: 'Logout' });
        this.headers = page.getByRole('heading', {level: 2 });
     
    };

    // public page actions(methods)/behavior
    async isLogoutLinkExist(): Promise<boolean> {
        return await this.logoutlink.isVisible();
    }

    async getHomePageHeader(): Promise<string[]> {
        return this.headers.allInnerTexts();
    }

       async getHomePageTitle(): Promise<string>{
        return await this.page.title();
    }




}