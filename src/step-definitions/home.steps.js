import { Given, When, Then } from '@wdio/cucumber-framework';
import Common from '../utilities/common.js';
import HomePage from '../page-objects/home.page.js';
import SevenDaySimPlanPage from '../page-objects/seven-day-sim-plan.page.js';

Given('the user is already in the Amaysim home page', async () => {
    await Common.assertElementIsDisplayed(HomePage.title);
    await Common.takeScreenshot();
});

When('the user select the {string}', async (simPlans) => {
    await Common.hoverElement(HomePage.simPlansTab);
    await Common.assertElementIsDisplayed(HomePage.simPlansTabHeader);
    await Common.takeScreenshot();

    if (simPlans === "7 day SIM Plans") {
        await Common.clickElement(HomePage.sevenDaySimPlans);
    } else if (simPlans === "5G SIM Plans") {

    } else throw new Error("Invalid step option parameter");

    await Common.takeScreenshot();
});

When('the user proceed through the purchase steps', async () => {
    await Common.scrollToElement(SevenDaySimPlanPage.planHeader);

    // Click Buy now
    await Common.scrollToElement(SevenDaySimPlanPage.buyNowButton);
    await Common.clickElement(SevenDaySimPlanPage.buyNowButton);
    await Common.takeScreenshot();

    // Select Pick a new number option
    await Common.assertElementIsDisplayed(SevenDaySimPlanPage.productHeader);
    await Common.scrollToElement(SevenDaySimPlanPage.yourMobileNumberHeader);
    await Common.clickElement(SevenDaySimPlanPage.pickANewNumberTab);
    await Common.takeScreenshot();

    // Click Checkout
    await Common.scrollToElement(SevenDaySimPlanPage.productCheckoutButton);
    await Common.clickElement(SevenDaySimPlanPage.productCheckoutButton);
    await Common.takeScreenshot();
});

When('the user enter valid personal details', async () => {
    const firstName = process.env.FIRST_NAME;
    const lastName = process.env.LAST_NAME;
    const dateOfBirth = process.env.DATE_OF_BIRTH;
    const emailAddress = process.env.EMAIL_ADDRESS;
    const password = process.env.PASSWORD;
    const contactNumber = process.env.CONTACT_NUMBER;
    const address = process.env.ADDRESS;

    await Common.assertElementIsDisplayed(SevenDaySimPlanPage.alreadyWithAmaysimHeader);

    // Fill in the details
    await Common.scrollToElement(SevenDaySimPlanPage.titleField);
    await Common.clickElement(SevenDaySimPlanPage.titleField);
    await Common.clickElement(SevenDaySimPlanPage.providerOptionMr);
    await Common.scrollToElement(SevenDaySimPlanPage.firstNameField);
    await Common.enterValue(SevenDaySimPlanPage.firstNameField, firstName);
    await Common.scrollToElement(SevenDaySimPlanPage.lastNameField);
    await Common.enterValue(SevenDaySimPlanPage.lastNameField, lastName);
    await Common.scrollToElement(SevenDaySimPlanPage.dateOfBirthField);
    await Common.enterValue(SevenDaySimPlanPage.dateOfBirthField, dateOfBirth);
    await Common.takeScreenshot();

    await Common.scrollToElement(SevenDaySimPlanPage.emailField);
    await Common.enterValue(SevenDaySimPlanPage.emailField, emailAddress);
    await Common.scrollToElement(SevenDaySimPlanPage.passwordField);
    await Common.enterValue(SevenDaySimPlanPage.passwordField, password);
    await Common.scrollToElement(SevenDaySimPlanPage.contactNumberField);
    await Common.enterValue(SevenDaySimPlanPage.contactNumberField, contactNumber);
    await Common.scrollToElement(SevenDaySimPlanPage.addressField);
    await Common.enterValue(SevenDaySimPlanPage.addressField, address);
    await Common.clickElement(SevenDaySimPlanPage.selectedAddress(address));
    await Common.takeScreenshot();
});

When('the user enter a credit card number that will be Declined', async () => {
    const cardNumber = process.env.INVALID_CARD_NUMBER;
    const expirationDate = process.env.EXPIRATION_DATE;
    const cvv = process.env.CVV;

    // need to update the code to locate iframe elements. :(((
    await Common.scrollToElement(SevenDaySimPlanPage.cardPaymentMethodButton);
    await Common.clickElement(SevenDaySimPlanPage.cardPayment);

    // Enter Card Details
    await Common.scrollToElement(SevenDaySimPlanPage.cardNumberField);
    await Common.enterValue(SevenDaySimPlanPage.cardNumberField, cardNumber);
    await Common.scrollToElement(SevenDaySimPlanPage.expirationDateField);
    await Common.enterValue(SevenDaySimPlanPage.expirationDateField, expirationDate);
    await Common.scrollToElement(SevenDaySimPlanPage.securityCodeField);
    await Common.enterValue(SevenDaySimPlanPage.securityCodeField, cvv);

    await Common.takeScreenshot();
});

When('the user submit the payment', async () => {
    await Common.scrollToElement(SevenDaySimPlanPage.acceptTermsAndConditionsCheckbox);
    await Common.clickElement(SevenDaySimPlanPage.acceptTermsAndConditionsCheckbox);
    await Common.takeScreenshot();

    // Click Pay Now Button
    await Common.scrollToElement(SevenDaySimPlanPage.payNowButton);
    await Common.clickElement(SevenDaySimPlanPage.payNowButton);
});

Then('the error message for Declined credit card payment is displayed', async () => {
    await Common.assertElementIsDisplayed(SevenDaySimPlanPage.ccFailedPaymentErrorMessageHeader);
    await Common.assertElementIsDisplayed(SevenDaySimPlanPage.ccFailedPaymentErrorMessageDescription);
    await Common.takeScreenshot();
});
