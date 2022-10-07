$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('body').addClass('disable-scroll')


    $('.firstscreen-link-yes').click(function() {
      console.log('dasdsa');
      $('body').removeClass('disable-scroll')
      $('.firstscreen').css({display:"none"})
       CIGlobal.init();
    })


$('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
})


$('.people').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 702,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    });




(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

});






$( document ).ready(function(){
    $( ".idolz-team-img" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".idolz-team-open" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

    $( ".idolz-team-open" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".idolz-team-open" ).toggle(); // отображаем, или скрываем элемент
    });

    $( ".idolz-team-img2" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".idolz-team-open2" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

    $( ".idolz-team-open2" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".idolz-team-open2" ).toggle(); // отображаем, или скрываем элемент
    });

    $( ".idolz-team-img3" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".idolz-team-open3" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

    $( ".idolz-team-open3" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".idolz-team-open3" ).toggle(); // отображаем, или скрываем элемент
    });

    $( ".idolz-team-img4" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".idolz-team-open4" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

    $( ".idolz-team-open4" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".idolz-team-open4" ).toggle(); // отображаем, или скрываем элемент
    });

    $( ".idolz-team-img5" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".idolz-team-open5" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

    $( ".idolz-team-open5" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".idolz-team-open5" ).toggle(); // отображаем, или скрываем элемент
    });



 
});








const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});


$(document).ready(function() {

  function setProgress(index) {
  var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

  $progressBar
    .css('background-size', calc + '% 100%')
    .attr('aria-valuenow', calc );

      $progressBarLabel.text(calc + '% completed');
    }

    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      setProgress(nextSlide);
    });
    
      $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 400
      });  

      $(".slider").on('afterChange', function(event, slick, currentSlide){
         $("#cp").text(currentSlide + 1);
      });

    setProgress(0);

 
  
});

/*
* product amount
*/
var $amountBlock = $('.product-card__add_amount'),
  $amountText = $amountBlock.find('input[type="text"]'),
  $amountUpButton = $amountBlock.find('.up'),
  $amountDownButton = $amountBlock.find('.down');

$amountUpButton.on('click', function(){
  var $amount = $amountText.val();
  $amountText.val(++$amount); 
  if ($amountDownButton.hasClass('disabled')) {
    $amountDownButton.removeClass('disabled');
  }
});

$amountDownButton.on('click', function(){
  var $amount = $amountText.val();
  $amountText.val(--$amount); 
  if ($amount < 1) {
    $amountDownButton.addClass('disabled');
  }
});



/*

Visit My Website to see creative design
        www.HUSAMUI.com


*/


$(document).ready(function(){
  
  $(".dropdown").click(function(){
    $(".menu").toggleClass("showMenu");
      $(".menu > li").click(function(){
        $(".dropdown > p").html($(this).html());
          $(".menu").removeClass("showMenu");
      });
  });
  
});













const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});

