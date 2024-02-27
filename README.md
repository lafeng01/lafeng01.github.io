
!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="个人网站" />
    <meta name="keywords" content=" 江忍的个人网站" />
    <title>江忍的个人网站</title>
    <style>
      body {
        margin: 0;
        height: 100vh;
        background-color: #eee;
      }
      * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: #cdcdcd;
      }
      .flex {
        display: flex;
      }
      .baise {
        background-color: white;
      }
      .flex1 {
        flex: 1;
      }
      .column {
        flex-direction: column;
      }
      .mg8 {
        margin: 8px;
      }
      .mgr8 {
        margin-right: 8px;
      }
      .mgt8 {
        margin-top: 8px;
      }
      .yinying {
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
          rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
      }
      .daohang {
        padding: 20px;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        color: #eee;
      }
      .toubulan {
        margin-left: 8px;
      }
      p {
        font-size: 14px;
      }
      div:hover {
        color: #86bcca;
        cursor: url(./鼠标样式包/arr46.png), default;
      }
      a:hover {
        color: #86bcca;
        cursor: url(./鼠标样式包/arr43.png), pointer;
      }

      /* 当屏幕小于600px时要改变的css */
      @media (max-width: 600px) {
        .cebian {
          display: none;
        }
        .neirong {
          flex-direction: column;
        }
        .shujuqu {
          flex-direction: column;
        }
        .youqu {
          margin-left: 8px;
        }
        .shuju {
          margin: 0 0 8px;
          flex: auto;
        }
        .neirong::-webkit-scrollbar {
          display: none;
        }
      }
    </style>
  </head>
  <body class="flex">
    <!--侧边栏-->
    <div style="width: 200px; z-index: 2" class="cebian baise yinying">
      <!--头像栏-->
      <div
        style="
          padding: 10px;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #eee;
        "
        class="flex"
      >
        <img
          src="fhgc.jpg"
          width="40px"
          height="40px"
          alt="图片"
          title="我拍的"
        />

        <div style="margin-left: 10px"></div>
      </div>
      <!--导航栏-->
      <div class="flex1">
        <div class="daohang"></div>
        <div class="daohang"><a href="bilibili.com">首页</a></div>
        <div class="daohang">导航</div>
        <div class="daohang">导航</div>
        <div class="daohang">导航</div>
      </div>
    </div>
    <!--主区域-->
    <div class="flex1 flex column">
      <!--头部栏-->
      <div style="height: 60px; z-index: 1" class="baise yinying toubulan font">
        大家好
        <!--导航栏-->
        <div class="flex">
          <div class="daohang"></div>
          <div class="daohang"></div>
          <div class="daohang"></div>
          <div class="daohang"></div>
          <div class="daohang"></div>
        </div>
      </div>
      <!--内容区-->
      <div style="overflow: auto" class="neirong flex1 flex">
        <!--左区-->
        <div style="flex: 3" class="flex column mg8">
          <!--数据区-->
          <div class="flex shujuqu">
            <!--数据块-->
            <div style="height: 100px" class="shuju flex1 baise mgr8 yinying">
              <img src="fh.jpg" alt="凤凰古城" height="100px" width="150px" />
            </div>
            <div style="height: 100px" class="shuju flex1 baise mgr8 yinying">
              <img src="mj.jpg" alt="图片" height="100px" width="150px" />
              <p></p>
            </div>
            <div style="height: 100px" class="shuju flex1 baise mgr8 yinying">
              <img
                src="fhgc.jpg"
                alt="美景"
                srcset="fhgc.jpg"
                height="100px"
                width="150px"
              />
            </div>
            <div style="height: 100px" class="shuju flex1 baise yinying">
              <img src="fc.jpg" alt="风车" height="100px" width="150px" />
            </div>
          </div>
          <!--列表区-->
          <div class="flex column">
            <!--列表项-->
            <div style="height: 160px" class="baise mgt8 yinying"></div>
            <div style="height: 160px" class="baise mgt8 yinying"></div>
            <div style="height: 160px" class="baise mgt8 yinying"></div>
            <div style="height: 160px" class="baise mgt8 yinying"></div>
            <div style="height: 160px" class="baise mgt8 yinying"></div>
            <div style="height: 160px" class="baise mgt8 yinying"></div>
          </div>
        </div>
        <!--右区-->
        <div style="flex: 1" class="youqu flex column mgr8 mgt8">
          <!--提示区-->
          <div style="height: 150px" class="baise yinying"></div>
          <!--消息区-->
          <div style="height: 300px" class="baise mgt8 yinying"></div>
        </div>
      </div>
    </div>
  </body>
</html>

</html>
