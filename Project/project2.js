var img_num = 0;
$("#imageslide").click(function(){
    if(pic_num < 13){
        $("#imageslide").animate({left:"-=600px"}, 500);
        img_num+=1;
    }
    else{
        $("#imageslide").animate({left:"0px"}, 500);
        img_num = 0;
    }
  });

$("#nbest").click(function(){
    $("#nbest-1").fadeToggle(1000);
});

$("#notesynop-1").click(function(){
 $("#notesynop-2").fadeToggle(1000);
});

$("#notesynop-2").mouseenter(function(){
    $(this).animate({fontSize:"18px"},1000);
});

$("#notesynop-2").mouseleave(function(){
    $(this).animate({fontSize:"12px"},1000);
});

$('#noteactor-1').click(function () {
  $('.noteactor-2').fadeToggle();
})

$('#noah').click(function () {
  $(this).text("Ryan Gosling");
})

$('#Allid').click(function () {
  $(this).text("Rachel McAdams");
})

$('#Lon').click(function () {
  $(this).text("James Marsden");
})

$('#notephoto').click(function () {
  $('.notephoto-1').fadeToggle();
})

$(function(){
$(".notephoto-1").hover(function(){
     var imgs = $(this).attr("src");
     $("#note3").after( "<div id='note2'><img src='"+imgs+"' width='600' /></div>" );
},function(){
     $("#note2").remove();
});
});

$("#wbest").click(function(){
    $("#wbest-1").fadeToggle(1000);
});

$("#wolfsynop-1").click(function(){
 $("#wolfsynop-2").fadeToggle(1000);
});

$("#wolfsynop-2").mouseenter(function(){
    $(this).animate({fontSize:"18px"},1000);
});

$("#wolfsynop-2").mouseleave(function(){
    $(this).animate({fontSize:"12px"},1000);
});

$('#wolfactor-1').click(function () {
  $('.wolfactor-2').fadeToggle();
})

$('#jor').click(function () {
  $(this).text("Leonardo DiCaprio");
})

$('#nao').click(function () {
  $(this).text("Margot Robbie");
})

$('#don').click(function () {
  $(this).text("Jonah Hill");
})

$('#wolfphoto').click(function () {
  $('.wolfphoto-1').fadeToggle();
})

$(function(){
$(".wolfphoto-1").hover(function(){
     var imgs = $(this).attr("src");
     $("#wolf3").after( "<div id='wolf2'><img src='"+imgs+"' width='600' /></div>" );
},function(){
     $("#wolf2").remove();
});
});

$("#sbest").click(function(){
    $("#sbest-1").fadeToggle(1000);
});

$("#ssynop-1").click(function(){
 $("#ssynop-2").fadeToggle(1000);
});

$("#ssynop-2").mouseenter(function(){
    $(this).animate({fontSize:"18px"},1000);
});

$("#ssynop-2").mouseleave(function(){
    $(this).animate({fontSize:"12px"},1000);
});

$('#sactor-1').click(function () {
  $('.sactor-2').fadeToggle();
})

$('#lie').click(function () {
  $(this).text("Al Pacino");
})

$('#cha').click(function () {
  $(this).text("Chris O'Donnell");
})

$('#na').click(function () {
  $(this).text("Gabrielle Anwar");
})

$('#sphoto').click(function () {
  $('.sphoto-1').fadeToggle();
})

$(function(){
$(".sphoto-1").hover(function(){
     var imgs = $(this).attr("src");
     $("#scent3").after( "<div id='scent2'><img src='"+imgs+"' width='600' /></div>" );
},function(){
     $("#scent2").remove();
});
});

$("#ubest").click(function(){
    $("#ubest-1").fadeToggle(1000);
});

$("#usynop-1").click(function(){
 $("#usynop-2").fadeToggle(1000);
});

$("#usynop-2").mouseenter(function(){
    $(this).animate({fontSize:"18px"},1000);
});

$("#usynop-2").mouseleave(function(){
    $(this).animate({fontSize:"12px"},1000);
});

$('#uactor-1').click(function () {
  $('.uactor-2').fadeToggle();
})

$('#phi').click(function () {
  $(this).text("Francois Cluzet");
})

$('#ba').click(function () {
  $(this).text("Omar Sy");
})

$('#uphoto').click(function () {
  $('.uphoto-1').fadeToggle();
})

$(function(){
$(".uphoto-1").hover(function(){
     var imgs = $(this).attr("src");
     $("#un3").after( "<div id='un2'><img src='"+imgs+"' width='600' /></div>" );
},function(){
     $("#un2").remove();
});
});
                    
$("#tbest").click(function(){
    $("#tbest-1").fadeToggle(1000);
});

$("#tsynop-1").click(function(){
 $("#tsynop-2").fadeToggle(1000);
});

$("#tsynop-2").mouseenter(function(){
    $(this).animate({fontSize:"18px"},1000);
});

$("#tsynop-2").mouseleave(function(){
    $(this).animate({fontSize:"12px"},1000);
});

$('#tactor-1').click(function () {
  $('.tactor-2').fadeToggle();
})

$('#qul').click(function () {
  $(this).text("Joaquin Phoenix");
})

$('#lan').click(function () {
  $(this).text("Philip Seymour Hoffman");
})

$('#peg').click(function () {
  $(this).text("Amy Adams");
})

$('#tphoto').click(function () {
  $('.tphoto-1').fadeToggle();
})

$(function(){
$(".tphoto-1").hover(function(){
     var imgs = $(this).attr("src");
     $("#the3").after( "<div id='the2'><img src='"+imgs+"' width='600' /></div>" );
},function(){
     $("#the2").remove();
});
});

$("#kbest").click(function(){
    $("#kbest-1").fadeToggle(1000);
});

$("#ksynop-1").click(function(){
 $("#ksynop-2").fadeToggle(1000);
});

$("#ksynop-2").mouseenter(function(){
    $(this).animate({fontSize:"18px"},1000);
});

$("#ksynop-2").mouseleave(function(){
    $(this).animate({fontSize:"12px"},1000);
});

$('#kactor-1').click(function () {
  $('.kactor-2').fadeToggle();
})

$('#ki').click(function () {
  $(this).text("이제훈");
})

$('#dong').click(function () {
  $(this).text("서준영");
})

$('#hee').click(function () {
  $(this).text("박정민");
})

$('#kphoto').click(function () {
  $('.kphoto-1').fadeToggle();
})

$(function(){
$(".kphoto-1").hover(function(){
     var imgs = $(this).attr("src");
     $("#bleak3").after( "<div id='bleak2'><img src='"+imgs+"' width='600' /></div>" );
},function(){
     $("#bleak2").remove();
});
});