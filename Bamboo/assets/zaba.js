/**
 * Created by z30 on 17/1/13.
 */


//Normal Js
window.onload=function(){
  document.getElementById("z_container").style.height=document.body.scrollHeight+'px';


};

$("[id^='b_sm']").slider({
  formatter: function(value) {
    return value;
  }
});

////$(".za-bfun4-select").select2();
//$("#arhv").hover(function(){
//  //鼠标进入
//  $(this).addClass('za-anm-hoverIn').css('left','0');
//},function(){
////  鼠标离开
//});
//arhv_close