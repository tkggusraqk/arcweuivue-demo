webpackJsonp([8],{eNIA:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Button",{attrs:{text:"Toast",typeClass:"weui-btn_primary"},on:{click:t.toast}}),t._v(" "),a("Button",{attrs:{text:"Toast Error",typeClass:"weui-btn_primary"},on:{click:t.toastError}}),t._v(" "),a("Button",{attrs:{text:"Loading",typeClass:"weui-btn_primary"},on:{click:t.loading}}),t._v(" "),a("Button",{attrs:{text:"重复Toast",typeClass:"weui-btn_primary"},on:{click:t.repeatToast}})],1)},o=[],n={render:e,staticRenderFns:o};s.a=n},hNqL:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("pmr1"),o=a("eNIA"),n=a("VU/8"),r=n(e.a,o.a,!1,null,null,null);s.default=r.exports},pmr1:function(t,s,a){"use strict";s.a={data:function(){return{}},methods:{toast:function(){this.$toast.success("提示信息")},toastError:function(){this.$toast.error("错误信息")},loading:function(){var t=this,s=this.$toast.loading("数据加载中");setTimeout(function(){t.$toast.closeLoading(s)},2e3)},repeatToast:function(){for(var t=0;t<10*Math.random()+3;t++)this.$toast.success("随机提示信息"+t)}}}}});
//# sourceMappingURL=8.8405c080bdfa91c685d1.js.map