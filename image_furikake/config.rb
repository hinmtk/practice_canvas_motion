require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
#クエリ文字列をつけない
asset_cache_buster :none

css_dir = "assets/css"
sass_dir = "scss"
images_dir = "img"
javascripts_dir = "js"
output_style = :expanded
#expanded
#nested
#compact
line_comments = false
cache = false

#相対パスにする
relative_assets = true
