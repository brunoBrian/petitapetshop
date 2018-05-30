jQuery(document).ready(function() {
	//document.body.style.background = "url(images/fundo-introducao.png) #2a81c9";
	document.body.style.background = "#464a4c";
});

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = jQuery("#mySidebar");

function menu_open() {
  if (mySidebar.hasClass('hide-menu')) {
    mySidebar.removeClass('hide-menu');
    mySidebar.addClass('show-menu'); 
  } else {
    mySidebar.removeClass('show-menu');
    mySidebar.addClass('hide-menu');
  }
}

// Close the sidebar with the close button
function menu_close() {
  mySidebar.removeClass('show-menu');
  mySidebar.addClass('hide-menu');
}

// Modal Image Gallery
function onClick(element) {
  var slides = document.getElementsByClassName("gallery");console.log(element);
  jQuery("#img-modal").attr('src', element.src);
  jQuery("#img-modal").attr('alt', element.alt);
  jQuery("#img-modal").attr('data-id', element.id);
  jQuery("#modal-gallery").css({'display': 'block', 'z-index': '10'});
  var captionText = jQuery("#caption");
  captionText.innerHTML = element.alt;


  if (jQuery('.mini-images img').length === 0) {
    for (i = 0; i < slides.length; i++) {
      var c = i + 1;
      var img_src = jQuery(slides[i]).find('img').attr('src');
      var img_alt = jQuery(slides[i]).find('img').attr('alt');
      var img = jQuery('<img />', { id: 'galeria-imagem-'+c, src: img_src , alt:img_alt });

      jQuery('<div />', {class: 'mini-images'}).append(img).appendTo(jQuery('.images-gallery'));
    }  
  }

  jQuery('.mini-images img').click( function() {
    jQuery('.w3-image').attr('src', this.src).attr('alt', this.alt).attr('data-id', this.id);
    jQuery('#caption').text(this.alt);
    ChangeOpacityImages();
  });

  ChangeOpacityImages();

  function ChangeOpacityImages() {
    var miniImages = jQuery('.mini-images img');
    var fullImage = jQuery('.w3-image').attr('data-id');

    for(i=0; i<miniImages.length; i++){
      if(jQuery(miniImages[i]).attr('id') === fullImage){
        jQuery(miniImages[i]).addClass('active');
      }else 
        jQuery(miniImages[i]).removeClass('active');
    }
  }
}

















jQuery(function() {
  jQuery(".rslides").responsiveSlides({
    pauseControls: true,  
    random: true, 
    pause: true,
    pager: true, 
  });

  jQuery(".rslides-principal").responsiveSlides({
    pauseControls: true,  
    random: true, 
    pause: false,
    pager: true, 
  });

  // Visibility.onVisible(function() {
  //   setTimeout(function(){
  //     jQuery('.depoimentos .container').addClass('animated fadeInDown');
  //   }, 400);
  // });

  var $doc = $('html, body');
  jQuery('.menu-container a').click(function() {
      $doc.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 700);
      return false;
  });
});
