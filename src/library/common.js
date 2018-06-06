const VueCommon = {};

VueCommon.install = (Vue) => {
    const vue = Vue;
    vue.prototype.$common = {
        wrapperMinHeight() {
            alert(window.outerHeight);
            const content = document.querySelector('.wrapper');
            const height = window.outerHeight;
            content.style.minHeight = height + 'px';
        },
    };
};

export default VueCommon;