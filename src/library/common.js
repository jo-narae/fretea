const VueCommon = {};

VueCommon.install = (Vue) => {
    const vue = Vue;
    vue.prototype.$common = {
        wrapperMinHeight() {
            const content = document.querySelector('.content-wrap');
            const height = document.body.outerHeight;
            content.style.minHeight = height + 'px';
        },
    };
};

export default VueCommon;