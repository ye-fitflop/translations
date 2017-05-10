# Translations Project
This project is testing how to export spreadsheets with translations into a json format, then output the json into html files via handlebars.

## Export xlsx to json
	• Add xlsx file to the config folder. 
	• In terminal, change your directory to be in the root of this folder.
	• Then run "sudo gulp import". 

You can locate the json files in the "builds/development/js/locales" directory.

## Compile json locales into html format
In terminal, run "sudo gulp".

This will do the following:

	• Export the json files into html outputs which can be found in the "builds/development/outputs" directory.
	• Compiles the scss files into one css file.
	• Compress and optimise all images if in the production directory.
	• Start a server at http://localhost:8080 (go to http://localhost:8080/outputs and select language).
	• Generate a live reload session. Any css or html changes will imeediately relaod the page upon saving the code.

## HTML and CSS modifications
The index.html file uses mustache to import the content from the json files. You can make changes to the index.html file located in the "builds/development" directory. You can modify stylesheets by going into the "components/sass" folder.