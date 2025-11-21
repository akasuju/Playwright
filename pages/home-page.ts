import {type Locator, type Page} from '@playwright/test'
export class HomePage{
//variables
readonly page:Page;
readonly getStartedButton:Locator;
//constructors
constructor(page:Page){
    this.page=page;
    this.getStartedButton =page.getByRole ('link', {name:'Get Started'});
}
//methods
async clickGetStarted(){
    await this.getStartedButton.click();
}
}
export default HomePage;