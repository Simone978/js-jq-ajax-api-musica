$(document).ready(function() {
  $.ajax(
   {
   url: "https://flynn.boolean.careers/exercises/api/array/music",
   method: "GET",
   success: function (data) {
     albumWork(data.response)
     },
   error: function (richiesta, stato, errori) {
     alert("E' avvenuto un errore. " + errori);
     }
   }
  );

  $('#genre').click(function(){
    var genere = $(this).val();
      $('.cd').hide();
      $('.' + genere + '').show();
  })

});

function albumWork(dati){
  for (var i = 0; i < dati.length; i++) {
    var cd= dati[i];
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    var context = cd;
    var html = template(context);
    console.log(context);
    $('.cds-container').append(html);
    }
}
