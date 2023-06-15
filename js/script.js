
    $(function(){
    //MENU RESPONSIVO
    var menuMobile = $('.mobile-menu ul');
    var botao = $('.fa-solid');

    $(botao).click(function(){ 
        $(menuMobile).slideToggle();;
    });
    //FIM MENU RESPONSIVO

    //SLIDE EQUIPE
    $('.slider-container').carousel({
        infinite: true  
    });
    //FIM SLIDE EQUIPE



});

