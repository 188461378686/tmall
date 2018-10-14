
var nowIndex=0;
var isRun=true;
setInterval(function(){
    if(isRun){
        run(nowIndex++);
    }
},3000);
function run(index){
  if(index>=6){
      nowIndex=index=0;
    }
  $(".slide-item").eq(index).addClass('active').siblings().removeClass('active');
  $('.category-item-btn li').eq(index).addClass('active').siblings().removeClass('active');
}
$(".category").hover(function(){
    isRun=false;
},function(){
    isRun=true;
})

/*floor-tabs strat*/
var nowFindex=1;
var isChange=true;
setInterval(function(){
    if(isChange){
        change(nowFindex++);
    }
},3000)
function change(findex){
    if(findex>=2){
        nowFindex=findex=0;
    }
    $('.floor-tab-head li').eq(findex).addClass('floor-current-tab').siblings().removeClass('floor-current-tab');
    $(".floor-tab-detail").eq(findex).css("display","block").siblings().css("display","none");
}
 $('.floor-tab-head li').hover(function(){
    isChange=false;
     $(this).addClass('floor-current-tab').siblings().removeClass('floor-current-tab');
     $(".floor-tab-detail").eq($(this).index()).css("display","block").siblings().css("display","none");
 },function(){
     isChange=true;
 });
/*floor-tabs end*/
/*one-'grid-price strat*/
$.getJSON("../public/data/object.json",function(data){
    var dataList=data.objectData;
    var content=""
   for(var i=0;i<dataList.length;i++){
       content+="<a href='' class='one-grid-price gird'><div class='floor-item-content-wrap'><img class='floor-item-img' src='"+dataList[i].img+
               ".jpg' alt=''><div class='floor-item-title'>"+dataList[i].title+
           "</div><div class='floor-item-price'>"+dataList[i].price+"</div></div></a>";
   }
$('.middle-column-con').append(content);
})
/*one-grid-price end*/

/*search start*/
$('.taggle-nav').css('top','-50px');
window.onscroll=function(){

    if(document.documentElement.scrollTop>=document.documentElement.clientHeight){
        console.log(111)
        $('.taggle-nav').stop(true,false).animate({
            top:0,
        },300,'swing')
    }else{
        $('.taggle-nav').stop(true,false).animate({
            top:-50
        },300,'swing')
         console.log(222)
    }


}
// if(document.body.scrollTop>document.body.clientHeight){
//     console.log("111")
// }


$(".combobox .box-input").focus(function(){
    $(".combobox .detail").css('color','#999')

}).blur(function(){
    $(".combobox .detail").css('color','#000')
})


/*search end*/




