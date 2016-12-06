/**
 * Created by z30 on 16/12/3.
 */

//Normal Js
window.onload=function(){
  document.getElementById("z_info").style.height=document.body.scrollHeight+'px';
  document.getElementById("suntext").style.width=document.getElementById("sun1").offsetWidth*2+'px';
  document.getElementById("suntext").style.height=document.getElementById("sun1").offsetHeight+'px';

  document.getElementById("wther_filter").style.width=document.getElementById("wther_bg").offsetWidth+'px';
  document.getElementById("wther_filter").style.height=document.getElementById("wther_bg").offsetHeight+'px';

  document.getElementById("wther_main").style.width=document.getElementById("wther_filter").offsetWidth+'px';
  document.getElementById("wther_main").style.height=document.getElementById("wther_filter").offsetHeight+'px';

  document.getElementById("wther_chart").style.width=document.getElementById("wther_filter").offsetWidth+'px';
  //document.getElementById("wther_chart").style.height=document.getElementById("wther_filter").offsetHeight+'px';

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

//全局注册my-notes，使用的是tpl_noteslist标签
//属性 父-》子 props -:message
Vue.component('my-notes', {
  template: '#tpl_noteslist',
  props: {
    message:Array
  }
});

Vue.component('my-contacts', {
  template: '#tpl_contactslist',
  props: {
    message:Array
  }
});

new Vue({
  el: '#vd_mail',
  data:{
    xdata:[
      {
        like:'assets/img/iHeart.png',
        avt:'assets/img/iSpk_1.jpeg',
        name:'Tim & Jonathan(2)',
        tips:'.An incredible designer',
        time:'17:12 pm',
        content:'Italian PM Matteo Renzi\'s referendum defeat on Sunday has left Italy facing political and economic uncertainty.'
      },
      {
        like:'assets/img/iHeart_red.png',
        avt:'assets/img/iSpk_2.png',
        name:'Scarlett Johansson(3)',
        tips:'.An famous actress',
        time:'8:12 am',
        content:'The book stands out as one of the notable landmarks in the progress of modern science.'
      }
    ]
  }
});




var bb=new Vue({
  el: '#vd_notes',
  data:{
    xdata:[
      {
        notes:'Once upon a time I was a designer',
        labeltext:'Stories',
        mainClass:'za-notes-label',
        colorClass:'cr_green'
      },
      {
        notes:'Making a new illustration for bidiction',
        labeltext:'Work',
        mainClass:'za-notes-label',
        colorClass:'cr_gold'
      },
      {
        notes:'Make pasta from Qasim\'s receipe',
        labeltext:'stories',
        mainClass:'za-notes-label',
        colorClass:'cr_blue'
      }
    ]
  }
});

new Vue({
  el: '#vd_contacts',
  data:{
    xdata:[
      {
        ava:'assets/img/icava_1.jpg',
        name:'Barack Obama',
        email:'whitehouse@twitter.com'
      },
      {
        ava:'assets/img/icava_2.jpg',
        name:'Austrillia',
        email:'austrillia@twitter.com'
      },
      {
        ava:'assets/img/icava_3.jpg',
        name:'Lopez',
        email:'FLopez@twitter.com'
      }
    ]
  }
});