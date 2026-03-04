import Selector from '../utilities/selector.js';

class HomePage {

    get title() {
        const tag = "a";
        const attr = "aria-label";
        const val = "Amaysim";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get simPlansTab() {
        const tag = "a";
        const attr = "aria-label";
        const val = "SIM plans";
        return Selector.getElemByTagAttrViaXpath(tag, attr, val);
    }

    get simPlansTabHeader() {
        const tag = "p";
        const val = "SIM plans";
        return Selector.getElemByTagTextViaXpath(tag, val);
    }

    get sevenDaySimPlans() {
        const tag1 = "a";
        const val1 = "SIM plans";
        const tag2 = "a";
        const val2 = "7 day SIM plans";
        return Selector.getElemByTagTextSibDescTagTextViaXpath(tag1, val1, "following", tag2, val2);
    }
    
}

export default new HomePage();