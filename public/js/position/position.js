function Position(){
    this.loadHeader();
}
$.extend(Position.prototype, {
    loadHeader(){
        // 创建头部对象，加载DOM结构
        new Header();
        // 让职位管理激活状态
        $("#position-nav ul:first li:last").addClass("active").siblings().removeClass("active");
         
    }
});
new Position(); 