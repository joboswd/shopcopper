// for dropdown

function toggle(e) {
    if(e.className == 'closed') {
      e.className = 'open';
    }
    else {
      e.className = 'closed';
    }
  }

  $(document).ready(function(){
    $('.similar-products--slider').owlCarousel({
      loop:true,
      autoplay:false,
      nav:true,
      dots:false
    });
  });