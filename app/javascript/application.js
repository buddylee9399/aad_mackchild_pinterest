// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

$(document).on('turbo:load', function() {
	// alert('hi');
  return $('#pins').imagesLoaded(function() {
  	// alert('in here');
    return $('#pins').masonry({
      itemSelector: '.box',
      isFitWidth: true
    });
  });	
});