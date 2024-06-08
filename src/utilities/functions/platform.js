const checkPlatForm = (platform = 1) => {
    const listPlatform = {
        1: 'Facebook',
        5: 'Instagram',
    }

    return listPlatform[platform];
}
export {
    checkPlatForm
}