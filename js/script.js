$(document).ready(function(){

    $("th").click(function(){
        $("tr").children().removeClass("highlighter");
        $(this).children().addClass("highlighter");
    });
});