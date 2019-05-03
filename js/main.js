/****
** Author:  Shahnewaz Tameem
*****/

jQuery(document).ready(function() {
   "use strict";
    
    $('#slider-carousel').carouFredSel({
       
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            anchorBuilder:false
        }
    });
    
    $('.portfolio-carousel').carouFredSel({
       
        responsive:true,
        width:'100%',
        circular:true,
        prev:'#prev',
        next: '#next',
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:4
            },
            height:"variable"
        }
    });
    $('.team-carousel').carouFredSel({
       
        responsive:true,
        width:'100%',
        circular:true,
        prev:'#team-prev',
        next: '#team-next',
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:4
            },
            height:"variable"
        }
    });
    
    $('.testimonial-carousel').carouFredSel({
       
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".testipager",
            anchorBuilder:false
        }
    });
    
    
    $(window).scroll(function(){
       
        var top = $(window).scrollTop();
        if(top>=60) {
           $("header").addClass("secondary-dark-blue-bg");
        }
        else {
             if($("header").hasClass('secondary-dark-blue-bg')){
            $("header").removeClass('secondary-dark-blue-bg');
            }        
         }
                     
    });
    $('#menu').slicknav({
        label:'',
    }) 
    $('#main').stellar();
    
    $('.animation').each(function(){
            var waypoint = new Waypoint({
            element: this,
            handler: function(direction) {
                var animation = $(this.element).attr('data-animation');
                $(this.element).css('opacity','1');
                $(this.element).addClass("animated " + animation);
            },
            offset: '75%' 
    })  
    });
    
    /***** smooth scrolling *****/
    $('a').smoothScroll();
    

});