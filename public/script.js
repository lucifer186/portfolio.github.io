
$(document).ready(function(){
    $('.header-hamburger-bars ').click(function(){
        $('.header-options ').toggleClass('show-hamburger-options')
        $('a ').toggleClass('show-hamburger-options')
        console.log('clicked');
        
    })
    $(window).scroll(function(){
        if(this.scrollY > 100){
            $('.scroll-container').addClass("show")
        }
        else{
            $('.scroll-container').removeClass("show")
        }
    })
    $('a').click(function(){
        $('.header-options ').toggleClass('show-hamburger-options')
       .$('.header-option').toggleClass('selected-header-option  ')
      
    })
    $('.bullet').on('click', function(){
    

        var currpage= $('.selected-bullet')
        currpage.removeClass("selected-bullet")
        $(this).addClass('selected-bullet')
        console.log('clicked');
      
    })
 

    $('.scroll-container').click(function(){
        $('html').animate({scrollTop:0})
    })

    $('.bullets').click(function(){
        $('.resume-details-carousalbullet').toggleClass('selected-bullet').css({transform: "translateY(0px)"})
        
    })
})