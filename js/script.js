$(document).ready(function(){
    
    $("th").click(function(){
        $("tr").children().removeClass("dark-row");
        $(this).children().addClass("dark-row");
    });
});