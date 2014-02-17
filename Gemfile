# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'http://rubygems.org'

gem "middleman", "~>3.2.0"

# For syntax highlighting
gem "middleman-syntax"

# Plugin for middleman to generate Github pages
gem 'middleman-gh-pages'

# Live-reloading plugin
gem "middleman-livereload", "~> 3.1.0"

gem 'redcarpet', :git => 'https://github.com/vmg/redcarpet.git'

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# Failed to start middleman without this
gem "therubyracer"

# Cross-templating language block fix for Ruby 1.8
platforms :mri_18 do
  gem "ruby18_source_location"
end

gem "rake", "~> 10.1.0"