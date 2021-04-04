$(document).ready(function(){ 
    
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    });

    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
    
    $('.scroll-down').click(function(){ 
        $("html, body").animate({ scrollTop: '650px' }, 600);
    });
});

const themeSwitch = document.getElementById('tmIcn');

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
