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