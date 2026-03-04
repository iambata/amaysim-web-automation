import Selector from '../utilities/selector.js';

class SevenDaySimPlanPage {

    get planHeader() {
        const tag = "h1";
        const val = "7 Day SIM Plans";
        return Selector.getElemByTagTextViaXpath(tag, val);
    }

    get buyNowButton() {
        const tag = "a";
        const val = "Buy now";
        return Selector.getElemByTagTextViaXpath(tag, val);
    }

    get productHeader() {
        const tag = "h3";
        const val = "UNLIMITED 10GB";
        return Selector.getElemByTagTextViaXpath(tag, val);
    }

    get yourMobileNumberHeader() {
        const tag = "h1";
        const val = "your mobile number";
        return Selector.getElemByTagTextViaXpath(tag, val);
    }

    get pickANewNumberTab() {
        const attr = "data-testid";
        const val = "number-transfer-switcher";
        const tag = "label";
        return Selector.getElemByAttrChildTagViaXpathIndex(attr, val, tag, 2);
    }

    get productCheckoutButton() {
        const tag = "a";
        const attr = "data-testid";
        const val = "product-checkout-button";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get alreadyWithAmaysimHeader() {
        const tag = "h3";
        const val = "already with amaysim?";
        return Selector.getElemByTagTextViaXpath(tag, val);
    }

    get titleField() {
        const tag = "input";
        const attr = "name";
        const val = "title";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get providerOptionMr() {
        const tag = "div";
        const attr = "data-testid";
        const val = "provider-option-mr";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get firstNameField() {
        const tag = "input";
        const attr = "name";
        const val = "firstName";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get lastNameField() {
        const tag = "input";
        const attr = "name";
        const val = "lastName";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get dateOfBirthField() {
        const tag = "input";
        const attr = "name";
        const val = "dateOfBirth";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get emailField() {
        const tag = "input";
        const attr = "name";
        const val = "email";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get passwordField() {
        const tag = "input";
        const attr = "name";
        const val = "password";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get contactNumberField() {
        const tag = "input";
        const attr = "name";
        const val = "contactNumber";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get addressField() {
        const tag = "input";
        const attr = "placeholder";
        const val = "e.g 123 George St Sydney NSW 2000";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get cardPaymentMethodButton() {
        const tag = "button";
        const attr = "data-testid";
        const val = "card";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get cardNumberField() {
        const tag = "input";
        const attr = "name";
        const val = "number";
        return Selector.getElemByTagAttrParentViaXpath(tag, attr, val);
    }

    get expirationDateField() {
        const tag = "input";
        const attr = "name";
        const val = "expiry";
        return Selector.getElemByTagAttrParentViaXpath(tag, attr, val);
    }

    get securityCodeField() {
        const tag = "input";
        const attr = "name";
        const val = "CVC";
        return Selector.getElemByTagAttrParentViaXpath(tag, attr, val);
    }

    get acceptTermsAndConditionsCheckbox() {
        const tag = "input";
        const attr = "name";
        const val = "acceptTermsAndConditions";
        return Selector.getElemByTagAttrParentViaXpath(tag, attr, val);
    }

    get payNowButton() {
        const tag = "button";
        const val = "pay now";
        return Selector.getElemByTagTextViaXpath(tag, val);
    }

    get ccFailedPaymentErrorMessageHeader() {
        const tag = "span";
        const val = "Credit Card payment failed";
        return Selector.getElemByTagTextViaXpath(tag, val);
    }

    get ccFailedPaymentErrorMessageDescription() {
        const tag = "span";
        const val = "Your attempt to pay via Credit Card has failed. Please ensure you have enough funds and try again or use another credit card.";
        return Selector.getElemByTagTextViaXpath(tag, val);
    }

    async selectedAddress(address) {
        const tag = "span";
        return Selector.getElemByTagTextViaXpath(tag, address);
    }

}

export default new SevenDaySimPlanPage();