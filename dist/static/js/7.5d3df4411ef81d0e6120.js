webpackJsonp([7],{YAZt:function(t,o,i){"use strict";var e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",[i("Button",{attrs:{text:"Alert"},on:{click:t.alertBox}}),t._v(" "),i("Button",{attrs:{text:"Confirm"},on:{click:t.confirmBox}}),t._v(" "),i("Button",{attrs:{text:"复杂Alert"},on:{click:t.moreAlertBox}}),t._v(" "),i("Button",{attrs:{text:"复杂Confirm"},on:{click:t.moreConfirmBox}}),t._v(" "),i("Dialog",{attrs:{title:t.title,content:"测试"},on:{click:t.clickHandler},model:{value:t.showDialog,callback:function(o){t.showDialog=o},expression:"showDialog"}}),t._v(" "),i("Dialog",{attrs:{title:t.title,content:"测试",type:"confirm"},on:{click:t.clickHandler},model:{value:t.showConfirm,callback:function(o){t.showConfirm=o},expression:"showConfirm"}}),t._v(" "),i("Dialog",{attrs:{title:t.title},on:{click:t.clickHandler},model:{value:t.moreDialog,callback:function(o){t.moreDialog=o},expression:"moreDialog"}},[i("h3",[t._v("这里是自定义的solt")])]),t._v(" "),i("Dialog",{attrs:{title:t.title,type:"confirm"},on:{click:t.clickHandler},model:{value:t.moreConfirm,callback:function(o){t.moreConfirm=o},expression:"moreConfirm"}},[i("h3",[t._v("这里是自定义的solt")])])],1)},n=[],l={render:e,staticRenderFns:n};o.a=l},deIM:function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=i("p9wl"),n=i("YAZt"),l=i("VU/8"),r=l(e.a,n.a,!1,null,null,null);o.default=r.exports},p9wl:function(t,o,i){"use strict";o.a={data:function(){return{showDialog:!1,title:"",showConfirm:!1,moreDialog:!1,moreConfirm:!1}},methods:{alertBox:function(){this.title="警告对话框",this.showDialog=!0},confirmBox:function(){this.title="确认对话框",this.showConfirm=!0},moreAlertBox:function(){this.title="复杂对话框",this.moreDialog=!0},moreConfirmBox:function(){this.title="复杂确认对话框",this.moreConfirm=!0},clickHandler:function(t){var o=this;this.$toast.success("你单击了第 "+t+" 个按钮"),setTimeout(function(){o.showConfirm=!1,o.moreDialog=!1,o.moreConfirm=!1},1e3)}}}}});
//# sourceMappingURL=7.5d3df4411ef81d0e6120.js.map