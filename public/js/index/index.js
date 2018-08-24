// 以面向对象的方式来写的
function Index() {
    this.loadHeader();
}
$.extend(Index.prototype, {
    // 加载头部
    loadHeader: function () {
        new Header();
    }
});
new Index();