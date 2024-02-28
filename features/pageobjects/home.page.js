const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const elementhome = {
    //Elements Home Page
    iconCart : $('.shopping_cart_link'),
    buttonBackPack : $('#add-to-cart-sauce-labs-backpack'),
    buttonRemove : $('#remove-sauce-labs-backpack'),
    buttonCart : $('#shopping_cart_container'),
    buttonLogout : $('#logout_sidebar_link'),
    buttonBurger : $('#react-burger-menu-btn'),
//Elements Information Page
    buttonCheckout : $('#checkout'),
    fieldName : $('#first-name'),
    fieldLastName : $('#last-name'),
    fieldZip : $('#postal-code'),
    buttonContinue : $('#continue'),
    buttonFinish : $('#finish'),
    buttonBackHome : $('#back-to-products')
}

class HomePage extends Page {
    
// //validate Home Page
async validateHomePage() {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    await expect(elementhome.iconCart).toBeDisplayed();
}

async validateGlitchUser () {
    await elementhome.buttonBurger.click();
    await elementhome.buttonLogout.click();

}
//validate Information Page
async validateAddCart() {
    await elementhome.buttonBackPack.click();
    await elementhome.buttonRemove.click();
    await elementhome.buttonBackPack.click();
}

async validateCart() {
    await elementhome.buttonCart.click()
}

async validateCheckout() {
    await elementhome.buttonCheckout.click()
}

async Information () {
    await elementhome.fieldName.setValue(process.env.NAME);
    await elementhome.fieldLastName.setValue(process.env.LAST_NAME);
    await elementhome.fieldZip.setValue(process.env.ZIP);
    await elementhome.buttonContinue.click()
    await elementhome.buttonFinish.click()
    await elementhome.buttonBackHome.click()
    await elementhome.buttonBurger.click()
    await elementhome.buttonLogout.click()
}

async errorname() {
    await elementhome.buttonContinue.click()
}

async errorlastname() {
    await elementhome.fieldName.setValue(process.env.NAME);
    await elementhome.fieldZip.setValue(process.env.ZIP);
    await elementhome.buttonContinue.click()
}

async errorzip() {
    await elementhome.fieldName.setValue(process.env.NAME);
    await elementhome.fieldLastName.setValue(process.env.LAST_NAME);
    await elementhome.buttonContinue.click()
}

open () {
    return super.open('https://www.saucedemo.com/inventory.html');
}
}

module.exports = new HomePage();