// "use strict"

const $searchForm = jQuery('#search-form');
const $videoHolder = jQuery('.video-holder');
const $titlePage = jQuery('h1');

$searchForm.on('submit', function (event) {
  event.preventDefault();
  let query = jQuery(this).find('#search-term').val().replace(/\s/g, '+');
  $titlePage.text('Search for: ' + query);
  getVideo(query);
});

function getVideo(query) {
  let url = 'https://itunes.apple.com/search';

  jQuery.ajax({
    url,
    merhod: "GET",
    data: `limit=10&entity=musicVideo&term=${query}`
  }).done((response) => {
    let data = JSON.parse(response).results;
    if (data.length > 0) {
      addCarousel(data);
    } else {
      notFound();
    }
    
  }).fail((error) => {
    console.log(error);
  })
}

function addCarousel(data) {
  let carouselHolder = '' +
  '<div id="carousel" class="carousel slide" data-ride="carousel">' +
    '<div class="carousel-inner"></div>' +
    '<a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>' +
    '<a class="carousel-control-next" href="#carousel" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>' +
  '</div>';
  $videoHolder.html(carouselHolder);
  let carouselInner = jQuery('.carousel-inner');

  for (let i = 0; i < data.length; i++){
    let active = (i == 0) ? ' active' : '';
    let slide = '' +
      '<div class="carousel-item' + active + '">' +
        '<video controls loop>' +
          '<source src="' + data[i].previewUrl + '" type="video/mp4">' +
          'Sorry, your browser doesn\'t support embedded videos.' +
        '</video>' +
      '</div>';
    carouselInner.append(slide);
  }

  let videos = document.querySelectorAll('.carousel-item video');

  jQuery('#carousel').carousel();
  document.querySelector('.carousel-item.active video').play();

  jQuery('#carousel').on('slid.bs.carousel', function () {
    for (let i = 0; i < videos.length; i++){
      videos[i].pause();
    }
    document.querySelector('.carousel-item.active video').play();
  });
  
}

function notFound() {
  $videoHolder.html('<h2>Not found</h2>');
}