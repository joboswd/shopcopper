// for dropdown

function toggle(e) {
    if(e.className == 'closed') {
      e.className = 'open';
    }
    else {
      e.className = 'closed';
    }
  }
  $( document ).ready(function() {
    $('.mobile-collapse').on('click', function() {
      // $(this).removeClass('plus');
      $(this).toggleClass('minus');
    });
  });

 