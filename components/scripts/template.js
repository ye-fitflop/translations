$(function() {
    var template = $("#itemTemplate").html();
    var renderer = Handlebars.compile(template);

    $.getJSON('js/locales/de/translations.json', function(data) {
        var result = renderer(data);                
        $("#container").html(result);
    });
});