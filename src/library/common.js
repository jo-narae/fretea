const VueCommon = {};

VueCommon.install = (Vue) => {
    const vue = Vue;
    vue.prototype.$common = {
        wrapperMinHeight() {
            const content = document.querySelector('.wrapper');
            const height = window.outerHeight - (window.outerHeight * 0.1);
            content.style.minHeight = height + 'px';
        },
    };
};

export default VueCommon;