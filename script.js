(function ($) {
  
  // We use some Javascript and the URL #fragment to hide or show different parts of the page
  $(window).on('load hashchange', function(){
    
    // First we hide all the content of pages, then show the content-region specified in the URL hash 

    $('.content-region').hide();
    
    // This removes any active classes on the navigation-menu
    $('.main-menu a').removeClass('active');

    // if no hash URL is found, we show the content of the homepage
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    
    // This shows the region specified in the URL hash
    $(region).show();
    
    // Highlights the menu link by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 
    
  });
  
})(jQuery);

