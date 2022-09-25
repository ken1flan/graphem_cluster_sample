// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "@stdlib/string-num-grapheme-clusters"
import "controllers"
import "./character_counter"

// 話がややこしくなるので…
Turbo.session.drive = false;
