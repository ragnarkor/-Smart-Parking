(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6592"],{"71bd":function(a,t,n){"use strict";n.r(t);var s=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"video-container"},[n("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:"我的订单","left-arrow":""},on:{"click-left":function(t){return a.$router.back()}}}),n("van-tabs",{attrs:{color:"skyblue"},model:{value:a.activeName,callback:function(t){a.activeName=t},expression:"activeName"}},[n("van-tab",{attrs:{title:"待入场订单",name:"a"}},[n("van-collapse",{model:{value:a.activeNames,callback:function(t){a.activeNames=t},expression:"activeNames"}},[n("van-collapse-item",{attrs:{title:"2020-12-13",name:"1"}},[n("van-row",[n("van-col",{attrs:{span:"4"}},[a._v("车牌号：")]),n("van-col",{attrs:{span:"5"}},[a._v("粤XQS208")]),n("van-col",{attrs:{span:"6"}},[a._v("预约停车场：")]),n("van-col",{attrs:{span:"9"}},[a._v("黄金商业广场停车场")])],1),n("van-row",[n("van-col",{attrs:{span:"7"}},[a._v("预约入场时间：")]),n("van-col",{attrs:{span:"17"}},[a._v("2020.12.13 12:20:08")])],1),n("van-row",[n("van-col",{attrs:{span:"7"}},[a._v("预约离场时间：")]),n("van-col",{attrs:{span:"17"}},[a._v("2020.12.13 14:05:32")])],1)],1),n("van-collapse-item",{attrs:{title:"2020-12-14",name:"2"}},[n("van-row",[n("van-col",{attrs:{span:"4"}},[a._v("车牌号：")]),n("van-col",{attrs:{span:"5"}},[a._v("粤XQS208")]),n("van-col",{attrs:{span:"6"}},[a._v("预约停车场：")]),n("van-col",{attrs:{span:"9"}},[a._v("黄金商业广场停车场")])],1),n("van-row",[n("van-col",{attrs:{span:"7"}},[a._v("预约入场时间：")]),n("van-col",{attrs:{span:"17"}},[a._v("2020.12.14 12:20:08")])],1),n("van-row",[n("van-col",{attrs:{span:"7"}},[a._v("预约离场时间：")]),n("van-col",{attrs:{span:"17"}},[a._v("2020.12.14 14:05:32")])],1)],1),n("van-collapse-item",{attrs:{title:"2020-12-15",name:"3"}},[n("van-row",[n("van-col",{attrs:{span:"4"}},[a._v("车牌号：")]),n("van-col",{attrs:{span:"5"}},[a._v("粤XQS208")]),n("van-col",{attrs:{span:"6"}},[a._v("预约停车场：")]),n("van-col",{attrs:{span:"9"}},[a._v("黄金商业广场停车场")])],1),n("van-row",[n("van-col",{attrs:{span:"7"}},[a._v("预约入场时间：")]),n("van-col",{attrs:{span:"17"}},[a._v("2020.12.15 12:20:08")])],1),n("van-row",[n("van-col",{attrs:{span:"7"}},[a._v("预约离场时间：")]),n("van-col",{attrs:{span:"17"}},[a._v("2020.12.15 14:05:32")])],1)],1)],1)],1),n("van-tab",{attrs:{title:"待支付订单",name:"b"}},[n("van-checkbox-group",{model:{value:a.result,callback:function(t){a.result=t},expression:"result"}},[n("van-cell-group",a._l(a.list,(function(t,s){return n("van-cell",{key:s,attrs:{clickable:"",title:"创建时间："+t.time,label:t.label},on:{click:function(t){return a.toggle(s)}},scopedSlots:a._u([{key:"right-icon",fn:function(){return[n("van-checkbox",{ref:"checkboxes",refInFor:!0,attrs:{name:t}})]},proxy:!0}],null,!0)})})),1)],1),n("van-submit-bar",{attrs:{price:1950,"button-text":"支付订单"},on:{submit:a.onSubmit}})],1),n("van-tab",{attrs:{title:"已完成订单",name:"c"}},[n("van-collapse",{model:{value:a.activeNames,callback:function(t){a.activeNames=t},expression:"activeNames"}},[n("van-collapse-item",{attrs:{title:"2020-12-10",name:"1"}},[n("van-row",[n("van-col",{attrs:{span:"4"}},[a._v("车牌号：")]),n("van-col",{attrs:{span:"6"}},[a._v("粤XQS208")]),n("van-col",{attrs:{span:"4"}},[a._v("停车场：")]),n("van-col",{attrs:{span:"10"}},[a._v("黄金商业广场停车场")])],1),n("van-row",[n("van-col",{attrs:{span:"5"}},[a._v("开始时间：")]),n("van-col",{attrs:{span:"19"}},[a._v("2020.12.10 12:20:08")])],1),n("van-row",[n("van-col",{attrs:{span:"5"}},[a._v("结束时间：")]),n("van-col",{attrs:{span:"19"}},[a._v("2020.12.10 14:05:32")])],1),n("van-row",[n("van-col",{attrs:{span:"5"}},[a._v("计费时长：")]),n("van-col",{attrs:{span:"5"}},[a._v("3.5小时")]),n("van-col",{attrs:{span:"4"}},[a._v("消费：")]),n("van-col",{attrs:{span:"10"}},[a._v("6.50元")])],1)],1),n("van-collapse-item",{attrs:{title:"2020-12-11",name:"2"}},[n("van-row",[n("van-col",{attrs:{span:"4"}},[a._v("车牌号：")]),n("van-col",{attrs:{span:"6"}},[a._v("粤XQS208")]),n("van-col",{attrs:{span:"4"}},[a._v("停车场：")]),n("van-col",{attrs:{span:"10"}},[a._v("永旺购物中心停车场")])],1),n("van-row",[n("van-col",{attrs:{span:"5"}},[a._v("开始时间：")]),n("van-col",{attrs:{span:"19"}},[a._v("2020.12.11 12:20:08")])],1),n("van-row",[n("van-col",{attrs:{span:"5"}},[a._v("结束时间：")]),n("van-col",{attrs:{span:"19"}},[a._v("2020.12.11 14:05:32")])],1),n("van-row",[n("van-col",{attrs:{span:"5"}},[a._v("计费时长：")]),n("van-col",{attrs:{span:"5"}},[a._v("3.5小时")]),n("van-col",{attrs:{span:"4"}},[a._v("消费：")]),n("van-col",{attrs:{span:"10"}},[a._v("6.50元")])],1)],1),n("van-collapse-item",{attrs:{title:"2020-12-12",name:"3"}},[n("van-row",[n("van-col",{attrs:{span:"4"}},[a._v("车牌号：")]),n("van-col",{attrs:{span:"6"}},[a._v("粤XQS208")]),n("van-col",{attrs:{span:"4"}},[a._v("停车场：")]),n("van-col",{attrs:{span:"10"}},[a._v("碧溪路停车场")])],1),n("van-row",[n("van-col",{attrs:{span:"5"}},[a._v("开始时间：")]),n("van-col",{attrs:{span:"19"}},[a._v("2020.12.12 12:20:08")])],1),n("van-row",[n("van-col",{attrs:{span:"5"}},[a._v("结束时间：")]),n("van-col",{attrs:{span:"19"}},[a._v("2020.12.12 14:05:32")])],1),n("van-row",[n("van-col",{attrs:{span:"5"}},[a._v("计费时长：")]),n("van-col",{attrs:{span:"5"}},[a._v("3.5小时")]),n("van-col",{attrs:{span:"4"}},[a._v("消费：")]),n("van-col",{attrs:{span:"10"}},[a._v("6.50元")])],1)],1)],1)],1)],1)],1)},v=[],o={name:"UserOrder",components:{},props:{},data:function(){return{activeNames:["1"],list:[{time:"2020-12-10",label:"粤XQS208 计费时长：3.5小时 消费：6.5元"},{time:"2020-12-10",label:"粤XQS208 计费时长：3.5小时 消费：6.5元"},{time:"2020-12-12",label:"粤XQS208 计费时长：3.5小时 消费：6.5元"}],result:[],activeName:"b"}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{toggle:function(a){this.$refs.checkboxes[a].toggle()},onSubmit:function(){}}},l=o,r=n("2877"),c=Object(r["a"])(l,s,v,!1,null,"712668fc",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d6592.9e0310fe.js.map