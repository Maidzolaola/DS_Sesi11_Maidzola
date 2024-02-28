const { $ } = require('@wdio/globals')
const Page = require('./page');

//tipe variable ada const, var & let
// const errorLockedOutUser = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)//global variable
//NOTE: elements collection
// get fieldUsername () { return $('#user-name');}
// get fieldPassword () {return $('#password');}
// get buttonLogin () { return $('#login-button');}


const element = {
//Elements Login Page    
    fieldUsername : $('#user-name'),
    fieldPassword : $('#password'),
    buttonLogin : $('#login-button'),
    errorLockedOutUser : (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`),
    errorPassword : (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`),
}

//Class Login Page
class LoginPage extends Page {
    async login (username) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        if (username != "") await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.buttonLogin.click();
    }
    async validateerrorPassword(password) {
        await element.fieldUsername.setValue(process.env.USERNAME_STANDARD_USER);
        if (password != "") await element.fieldPassword.setValue(password);
        await element.buttonLogin.click();
    }
    async validateLockedOutUserError (dynamicMessage) {
        await element.errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(element.errorLockedOutUser(dynamicMessage)).toBeDisplayed()
    }
    
    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();