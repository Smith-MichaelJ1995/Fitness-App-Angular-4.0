import * as $ from 'jquery';
declare const navProperties: any;

$(function(){
    /*Load the page components */
    $("#header-placeholder").load("_header.html", function () {} );

    $("#footer-placeholder").load("_footer.html", function () {} );


    
    /*
    $(".btn-primary").click(function(){
        $(this).closest(".col-md-4").css({ 'max-width': 'none'})
            .animate({ 'flex-basis' : '100%' })
    })
    */
});
