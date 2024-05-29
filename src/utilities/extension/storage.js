/* global chrome */
export const chromeStorage = {
    get: (key) => {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-undef
            chrome?.storage?.local?.get([key], (result) => {
                resolve(result[key]);
            });
        });
    },
    set: (key, value) => {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-undef
            chrome?.storage?.local
                ?.set({
                    [key]: value,
                })
                .then(resolve(true));
        });
    },
    remove: (key) => {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-undef
            chrome?.storage?.local?.remove([key], () => resolve(true));
        });
    },
};
