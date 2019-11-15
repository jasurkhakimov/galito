$(document).ready(function () {
    
    $('.categories').on("click", ".category", function (e) {  
        e.preventDefault();

        $('.category').removeClass('category_active');
        $('.category_content').removeClass('show');
        $(this).addClass('category_active');
        $($(this).attr('href')).addClass('show');
    });

});