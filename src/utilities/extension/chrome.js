/*global chrome*/

const extension = {
    getManifest: () => {
        return chrome.runtime.getManifest();
    },
    getId: () => {
        return chrome.runtime.id
    }
}

export {
    extension
}