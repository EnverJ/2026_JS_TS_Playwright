import { Page } from "@playwright/test";


export class BasePage{
    // only child class can access this
    protected readonly page: Page;
    constructor(page: Page){
        this.page = page;

    }
}