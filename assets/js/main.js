$(document).ready(function(){
    days();
    $('#myModal').on('shown.bs.modal', function() {
      $('#myInput').focus()
    })
});


function days(){
    date = function() {
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        var date = day + "/" + month + "/" + year;

        return date;
    };

    calculaDias(date(), '16/10/2017');

    
    function calculaDias(date1, date2){
        var data1 = moment(date1, "DD/MM/YYYY");
        var data2 = moment(date2, "DD/MM/YYYY");

        //tirando a diferenca da data2 - data1 em dias
        var diff  = data2.diff(data1, 'days');
        
        $('.dias h1').html("Faltam <b>" + diff + "</b> dias para o evento");
    }
}

// Select all links with hashes
$('a.nav-link[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });