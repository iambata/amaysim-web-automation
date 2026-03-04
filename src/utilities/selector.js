class Selector {

    async getElemByTagAttrViaXpath(tag, attr, val) {
        return $(`//${tag}[@${attr}="${val}"]`);
    }

    async getElemByTagAttrParentViaXpath(tag, attr, val) {
        return $(`//${tag}[@${attr}="${val}"]/..`);
    }

    async getElemByTagTextViaXpath(tag, val) {
        return $(`//${tag}[normalize-space()="${val}"]`);
    }

    async getElemByAttrChildTagViaXpathIndex(attr, val, tag, index) {
        return $(`(//*[@${attr}="${val}"]/${tag})[${index}]`);
    }

    async getElemByTagTextSibDescTagTextViaXpath(tag1, val1, relation, tag2, val2) {
        return $(`//${tag1}[normalize-space()="${val1}"]/${relation}-sibling::*//${tag2}[normalize-space()="${val2}"]`);
    }

}

export default new Selector();