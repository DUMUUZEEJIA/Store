<template>
  <div>
    <h1>Cached components</h1>
    <Tab :abc='arr'/>
    <!-- <p>Look at the source code and see how the timestamp is not reloaded before 10s after refreshing the page.</p>
    <p>Timestamp: {{ date }}</p>
    <p v-for="(item, index) in items" :key="index">{{item.id}}</p>
    <nuxt-link to="/homs/home/">go</nuxt-link>
        <div class="wrap" v-for="(i,index) in 10" :key="index">
      <p class="outer">adfasdfasdfaaaaaaaaaaaaaasdfasdfasdfasdfasdfasdfasdfasfaa</p><img class="innerr" width="100" height="100"/>
    </div>
  <hr>
  <div v-html="con"></div>
  <hr> -->
 <ul>
   <router-link v-for="(item, index) in obj" :key="index"
     :to="'/xinyongka/'+item.id" tag="li">{{item.name}}</router-link>
 </ul>
  </div>
</template>
<script>
// import axios from 'axios'
import Tab from '~/components/tab.vue'
// var arr = [ {id: '001'} ]
// arr[0].id = 100
var obj = [
  { name: 'licai', id: 3488 },
  { name: 'loan', id: 3492 },
  { name: 'xiyongka', id: 3494 }
]
export default {
  components: {
    Tab
  },
  data () {
    return {
      arr: [
        'aa',
        'bb',
        'cc'
      ],
      obj
    }
  },
  // name: 'date',
  serverCacheKey () {
    // Will change every 10 secondes
    return Math.floor(Date.now() / 10000)
  },
  beforeMount () {
    console.log(location)
  }
}
</script>
<style>
.wrap {
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.outer {
  width: 100%;
  /* flex-grow: 1; */
}
.all  {
color: blue;
}
/* 

  // data () {
  //   return {
  //     date: Date.now(),
  //     items: arr,
  //     con: '',
  //     hot: '&lt;p&gt;后面50个特殊符号　　　　　　　　　　　　　　　______%%%%%%********　　　　　　　　　　,司法局离开的数量非常难,m.sns,nmdfsdn方式买电脑放射科方式,达芙妮色福克斯对面是,dmn色开房间是你打算明年方,mdn,sndf&lt;a href=&quot;http://www.baidu.com&quot; _src=&quot;http://www.baidu.com&quot;&gt;http://www.baidu.&lt;/a&gt;com ........士大夫士大夫死了的&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773367952049318.jpg&quot; title=&quot;1516773367952049318.jpg&quot; alt=&quot;asd.jpg&quot;/&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773372210022859.jpg&quot; title=&quot;1516773372210022859.jpg&quot; alt=&quot;dd.jpg&quot;/&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773377949012384.jpg&quot; title=&quot;1516773377949012384.jpg&quot; alt=&quot;dfs.jpg&quot;/&gt;&amp;nbsp;好课件没,n,mnm,dnfskdm方,msdn&lt;br/&gt;&lt;/p&gt;&lt;!--?????? language=&quot;java??????&quot;--&gt;&lt;p&gt;parent.location=&amp;quot;http://test-pa18-info.pingan.com.cn:80/info/login.jsp&amp;quot;;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595861010150.jpg&quot; style=&quot;&quot; title=&quot;1516773595861010150.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595868083137.jpg&quot; style=&quot;&quot; title=&quot;1516773595868083137.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595862044135.png&quot; style=&quot;&quot; title=&quot;1516773595862044135.png&quot;/&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516780191699013716.png&quot; title=&quot;1516780191699013716.png&quot; alt=&quot;blob.png&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595947034986.png&quot; style=&quot;&quot; title=&quot;1516773595947034986.png&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595953016212.jpg&quot; style=&quot;&quot; title=&quot;1516773595953016212.jpg&quot;/&gt;&lt;img src=&quot;http://103.28.215.253:181/upload/m/uploads/img/banner/2017/10/31/15094166928724.jpg&quot; alt=&quot;活动1&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595954072619.jpg&quot; style=&quot;&quot; title=&quot;1516773595954072619.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773596013091334.jpg&quot; style=&quot;&quot; title=&quot;1516773596013091334.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773596027049322.jpg&quot; style=&quot;&quot; title=&quot;1516773596027049322.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773596033052982.jpg&quot; style=&quot;&quot; title=&quot;1516773596033052982.jpg&quot;/&gt;&lt;/p&gt;&lt;!--??????--&gt;'
  //   }
  // },
  // beforeMount () {
  //   // console.log(this.hot)
  // },
  // methods: {
  //   docHtml (content) {
  //     console.log(this.$refs.answer, this.$refs)
  //     // var div = document.createElement('div')
  //     // div.innerHTML = content
  //     // this.$refs.answer.innerHTML = content
  //     // return this.$refs.answer.innerHTML
  //   },
  //   aa (content) {
  //     var div = document.createElement('div')
  //     div.innerHTML = content
  //     return div.innerText
  //   },
  //   getData (cd) {
  //     // http://103.28.215.253:10079/new/wenda/lists?id=3495&index=2/
  //     // var api = 'http://103.28.215.253:181/Info/detail?' + 'article_id=3209710&' + 'developer=true&'
  //     var api = 'http://103.28.215.253:181/Info/m_questions?' + 'channel_id=3495&' + 'developer=true&page=1'
  //     axios.get(api).then(data => {
  //       console.log(data)
  //       // console.log(data.data.data.content)
  //       cd && cd(data.data.data.content)
  //     })
  //   }
  // },
  // computed: {
  // },
  // mounted () {
  //   console.log(window['webkit'], window['nativeClient'])
  //   this.getData((content) => {
  //     console.log(content)
  //     this.docHtml('"&lt;p&gt;后面50个特殊符号　　　　　　　　　　　　　　　______%%%%%%********　　　　　　　　　　,司法局离开的数量非常难,m.sns,nmdfsdn方式买电脑放射科方式,达芙妮色福克斯对面是,dmn色开房间是你打算明年方,mdn,sndf&lt;a href=&quot;http://www.baidu.com&quot; _src=&quot;http://www.baidu.com&quot;&gt;http://www.baidu.&lt;/a&gt;com ........士大夫士大夫死了的&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773367952049318.jpg&quot; title=&quot;1516773367952049318.jpg&quot; alt=&quot;asd.jpg&quot;/&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773372210022859.jpg&quot; title=&quot;1516773372210022859.jpg&quot; alt=&quot;dd.jpg&quot;/&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773377949012384.jpg&quot; title=&quot;1516773377949012384.jpg&quot; alt=&quot;dfs.jpg&quot;/&gt;&amp;nbsp;好课件没,n,mnm,dnfskdm方,msdn&lt;br/&gt;&lt;/p&gt;&lt;!--?????? language=&quot;java??????&quot;--&gt;&lt;p&gt;parent.location=&amp;quot;http://test-pa18-info.pingan.com.cn:80/info/login.jsp&amp;quot;;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595861010150.jpg&quot; style=&quot;&quot; title=&quot;1516773595861010150.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595868083137.jpg&quot; style=&quot;&quot; title=&quot;1516773595868083137.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595862044135.png&quot; style=&quot;&quot; title=&quot;1516773595862044135.png&quot;/&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516780191699013716.png&quot; title=&quot;1516780191699013716.png&quot; alt=&quot;blob.png&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595947034986.png&quot; style=&quot;&quot; title=&quot;1516773595947034986.png&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595953016212.jpg&quot; style=&quot;&quot; title=&quot;1516773595953016212.jpg&quot;/&gt;&lt;img src=&quot;http://103.28.215.253:181/upload/m/uploads/img/banner/2017/10/31/15094166928724.jpg&quot; alt=&quot;活动1&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773595954072619.jpg&quot; style=&quot;&quot; title=&quot;1516773595954072619.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773596013091334.jpg&quot; style=&quot;&quot; title=&quot;1516773596013091334.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773596027049322.jpg&quot; style=&quot;&quot; title=&quot;1516773596027049322.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.pingan.com/app_upload/images/info/upload/1516773596033052982.jpg&quot; style=&quot;&quot; title=&quot;1516773596033052982.jpg&quot;/&gt;&lt;/p&gt;&lt;!--??????--&gt;"')
  //     this.con = this.aa(this.hot)
  //   })
  // }
 */
</style>
