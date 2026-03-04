import cucumberJson from 'wdio-cucumberjs-json-reporter';

class Common {

    async clickElement(element) {
        const elementHandler = await element;
        await elementHandler.click();
    }

    async scrollToElement(element) {
        const elementHandler = await element;
        await elementHandler.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    async hoverElement(element) {
        const elementHandler = await element;
        await elementHandler.moveTo();
    }

    async enterValue(fieldElement, inputValue) {
        const elementHandler = await fieldElement
        await elementHandler.click();
        await elementHandler.setValue(inputValue);
    }

    async assertElementIsDisplayed(element) {
        const elementHandler = await element;
        await expect(elementHandler).toBeDisplayedInViewport();
    }

    async takeScreenshot() {
        await cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    }

}
export default new Common();