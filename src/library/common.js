const VueCommon = {};

VueCommon.install = (Vue) => {
    const vue = Vue;
    vue.prototype.$common = {
        wrapperMinHeight() {
            alert(document.body.offsetHeight);
            const content = document.querySelector('.wrapper');
            const height = document.body.offsetHeight;
            content.style.minHeight = height + 'px';
        },
    };
};

export default VueCommon;