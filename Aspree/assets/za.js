/**
 * Created by z30 on 16/12/3.
 */

//Normal Js
window.onload=function(){
  document.getElementById("z_info").style.height=document.body.scrollHeight+'px';
  document.getElementById("suntext").style.width=document.getElementById("sun1").offsetWidth*2+'px';
  document.getElementById("suntext").style.height=document.getElementById("sun1").offsetHeight+'px';
  //console.log(document.getElementById("vdmenu_1").style);
  //console.log(document.getElementById("vdmenu_1").style);

};

//Vue
new Vue({
  el: '#vdmenu_1',
  data: {
    show: false
  },
  methods:{
    showlv2menu:function(e){
      this.$el.children[1].style.display='flex';
    },
    closelv2menu:function(e){
      this.$el.children[1].style.display='none';
    }
  },
  mounted:function(){
    this.$el.children[1].style.left=this.$el.offsetWidth+'px';
  }
});