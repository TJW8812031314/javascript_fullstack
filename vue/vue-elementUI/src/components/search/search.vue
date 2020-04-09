<template>
  <div class="search">
    <div class="translate">
      <span class="chinese">中文</span>
      <span class="exchange">
        <i class="iconfont icon">&#xe60d;</i>
      </span>
      <span class="english">英文</span>
    </div>
    <div class="input">
      <input class="search-input" type="text" v-model="query" placeholder="在此输入要翻译的文本内容或网址" />
      <!-- <button @click="search">提交</button> -->
      <div class="various-translation">
        <span class="photo-translation">
          <i class="iconfont">&#xe60f;</i>
          拍照翻译
        </span>
        <span class="dialogue-translation">
          <i class="iconfont">&#xe645;</i>
          对话翻译
        </span>
        <span class="document-translation">
          <i class="iconfont">&#xe6e9;</i>
          文档翻译
        </span>
      </div>
    </div>
    <div class="history">
      <ul>
        <li class="search-item">
          <div class="item-chinese">决定</div>
          <div class="item-english">decision</div>
        </li>
        <li class="search-item">
          <div class="item-chinese">决定</div>
          <div class="item-english">decision</div>
        </li>
        <li class="search-item">
          <div class="item-chinese">决定</div>
          <div class="item-english">decision</div>
        </li>
      </ul>
    </div>
    <div>{{query}}</div>
  </div>
</template>
<script src="http://shared.ydstatic.com/js/jquery/jquery-3.1.1.min.js"></script>
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js"></script>
<script src="https://cdn.bootcss.com/js-sha256/0.9.0/sha256.js"></script>
<script>
// import api from '../api/index'
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      var appKey = "65bff576eebd09c2";
      var key = "UFAg8yjZ7WKtq6ODFMUH23DmEb7oioCU"; // 注意：暴露appSecret，有被盗用造成损失的风险
      var salt = new Date().getTime();
      var curTime = Math.round(new Date().getTime() / 1000);
      var query = this.query;
      // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
      var from = "zh-CHS";
      var to = "en";
      var str1 = appKey + this.truncate(query) + salt + curTime + key;
      console.log(str1);
      var sign = sha256(str1);
      this.$http({
        url: "http://openapi.youdao.com/api",
        type: "post",
        dataType: "jsonp",
        data: {
          q: query,
          appKey: appKey,
          salt: salt,
          from: from,
          to: to,
          sign: sign,
          signType: "v3",
          curtime: curTime
        }
      }).then(res => {
        console.log(res);
      });
    },
    truncate() {
      var len = this.query.length;
      if (len <= 20) return this.query;
      return (
        this.query.substring(0, 10) + len + this.query.substring(len - 10, len)
      );
    }
  }
};
</script>

<style>
.search {
  width: 100%;
}
.translate {
  margin: 20px;
  height: 28px;
  width: 100%;
  background: #fff;
}
.chinese {
  margin-right: 30px;
  font-size: 20px;
}
.icon {
  font-size: 20px;
}
.exchange {
  margin-right: 30px;
  border: 1px solid #c0c0c0;
  border-radius: 15px;
  padding: 3px 10px 0 10px;
  opacity: 0.4;
  font-weight: bold;
}
.english {
  margin-right: 30px;
  font-size: 20px;
}
.input {
  width: 100%;
}
.search-input {
  border: 0 solid #fff;
  line-height: 20px;
  width: 100%;
  opacity: 0.8;
  align-items: center;
  margin: 8px 0 8px 0;
  font-size: 20px;
  padding: 0 0 60px 0;
}
.various-translation {
  width: 100%;
  height: 35px;
  margin: 8px 0 0 0;
  padding-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 10px 10px 5px #eeeeee;
}
.photo-translation {
  line-height: 35px;
  width: 100px;
  padding: 5px 12px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 33px;
  opacity: 0.8;
  font-size: 14px;
  background: #f0f0f0;
}
.dialogue-translation {
  line-height: 35px;
  width: 100px;
  padding: 5px 12px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 33px;
  opacity: 0.8;
  font-size: 14px;
  margin-left: 10px;
  background: #f0f0f0;
}
.document-translation {
  line-height: 35px;
  width: 100px;
  padding: 5px 12px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 33px;
  opacity: 0.8;
  font-size: 14px;
  margin-left: 10px;
  background: #f0f0f0;
}
.history {
  /* width: 100%; */
  margin: 20px 30px;
}
ul,
li {
  list-style-type: none;
}
.search-item {
  margin: 10px 5px;
}
.item-chinese {
  font-weight: bold;
}
.item-english {
  opacity: 0.4;
}
</style>
