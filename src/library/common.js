const VueCommon = {};

VueCommon.install = (Vue) => {
    const vue = Vue;
    vue.prototype.$common = {
        wrapperMinHeight() {
            const content = document.querySelector('.wrapper');
            content.style.minHeight = window.outerHeight + 'px';
        },
    };
};

export default VueCommon;