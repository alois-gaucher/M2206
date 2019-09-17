$(document).ready(function(){
console.log("fff")
    $("#burger-nav").on("click", function(){
    console.log("yyy")
        $("header nav ul").toggleClass("open");
        
    });

});