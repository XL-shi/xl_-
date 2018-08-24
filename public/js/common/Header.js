// 构造函数
function Header(){
    // 调用方法 实现头部内容的创建
    this.createDom();
    this.loadLoginModal();
    this.loadRegisterModal();
}

// 头部布局的模板
Header.template = ` <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <!-- icon-bar 是响应式布局中缩小窗口后右边菜单栏的三根横线 -->
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">职位管理系统</a>
                            </div>
                            <div class="collapse navbar-collapse" id="position-nav">
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="/">首页</a></li>
                                <li><a href="/html/position.html">职位管理</a></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li data-toggle="modal" data-target="#loginModal"><a href="#">登录</a></li>
                                <li data-toggle="modal" data-target="#regModal"><a href="#">注册</a></li>            
                            </ul>
                            </div>
                        </div>
                    </nav>`;

// 原型继承
// header.prototype里扩展加入后面对象{}里的方法的东西
$.extend(Header.prototype, {
    // 创建头部的DOM 元素
    createDom(){
        //把Header.template包装成jquery对象
        // 这样写就不是异步加载了 而是同步操作
        $(Header.template).appendTo(".header");
    },
    loadLoginModal(){
        new LoginModal();
    },
    loadRegisterModal(){
        new RegisterModal();
    }

});