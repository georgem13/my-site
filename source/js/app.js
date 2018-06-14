$('.navigation a').on('click', function(e) {                 // User clicks nav link
    e.preventDefault();                                // Stop loading new link
    var url = this.href;                               // Get value of href
  
    $('.navigation a.active').removeClass('active');         // Clear current indicator
    $(this).addClass('active');                       // New current indicator
  
    $('.container').fadeOut(500).delay(1000);                         // Remove old content
    $('#content').load(url + ' .container').hide().fadeIn(1000); // New content
  });



 