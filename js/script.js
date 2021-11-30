$(function(){
    let mainContainer = $(".main_container");
    let foodDiv = $("<div>");
    foodDiv.addClass("foodDiv");
    $(".foodPage").click(function(){
        $(".banner_img").hide();
        mainContainer.append(foodDiv)
    });
    $(".homePage").click(function(){
        $(".banner_img").show();
        $(".foodDiv").hide()
    });
    
});