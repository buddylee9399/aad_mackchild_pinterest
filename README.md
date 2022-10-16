# THINGS IN HERE

## GEMS

```
gem "sassc-rails"
gem "image_processing", "~> 1.2"
gem 'haml'
gem 'devise'
gem 'masonry-rails'
gem 'acts_as_votable'
gem 'simple_form'
# gem 'aws-sdk', '~> 1.20.0'
# gem 'bootstrap-sass'
# gem 'paperclip', '~> 4.2.0'
```
- didnt use aws-sdk
- no paperclip needed
- i didnt use bootstrap sass
- used haml instead of erb
- sass rails for .scss files
- image processing for storage
- used simple form
- devise set for turbo, rails 7
- from: https://dev.to/efocoder/how-to-use-devise-with-turbo-in-rails-7-9n9
- haml for devise links

```
			- if user_signed_in?
				%ul.nav.navbar-nav.navbar-right
					%li= link_to "New Pin", new_pin_path
					%li= link_to "Account", edit_user_registration_path
					%li= button_to "Sign Out", destroy_user_session_path, method: :delete
			- else
				%ul.nav.navbar-nav.navbar-right
					%li= link_to "Sign Up", new_user_registration_path
					%li= link_to "Sign In", new_user_session_path

```
- acts as votable on pins

### using masonry
- added in scss: @import "masonry/transitions"; (dont know if it did anything)
- added to app.js

```
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
```

- in layouts/app i added multiple scripts
```
	%script{:crossorigin => "anonymous", :integrity => "sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=", :src => "https://code.jquery.com/jquery-3.6.1.js"}
	%script{:src => "https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js"}	
	%script{:src => "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"}
	%script{:src => "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"}	
	= stylesheet_link_tag "application", "data-turbo-track": "reload"
	= javascript_importmap_tags
```

- used these links to put it together
```
https://github.com/kristianmandrup/masonry-rails	
https://github.com/desandro/imagesloaded
isotope jquery
masonry jquery
jquery cdn
```

### acts as votable
- had to make the link a button_to
- in controller redirect back

```
redirect_back(fallback_location: root_path)
```

## MODELS
- devise user: has many pins
- pins: belongs to user
- attached an image

## OTHER
- he did his own styling
- views are in haml