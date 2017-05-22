$(document).ready(function(){

     $("#scrol_r, #scrol_r1, #scrol_r2, #scrol_r3").click(function(e) {
    var destination = $(this).attr('href');
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(destination).offset().top
    }, 2500);
  });
    
/*----------Scroll------*/
    
$('#movsel').change(function () {
var otherValue=$(this).find('option:selected').attr('data-othervalue');
var someOtherValue=$(this).find('option:selected').attr('data-someothervalue');
$('#insel').val(otherValue);
});   
    
/*-------------youtube changer--------------*/
$( "#movsel" ).change(function () {
  var vidid = $(this).val();
  $("#vid").attr("src", "https://www.youtube.com/embed/" + vidid);
  })
  .change();
    
$("#sub_btn").click(function(){
    $("#vidsec").delay(500).fadeIn();
});
    
/*---------------Scroll revael----------*/
window.sr = ScrollReveal();
sr.reveal('.navbar', { duration: 2000, 
                       origin: 'top',
                       delay: 500,
                       mobile: true,
                       
                       } );  
sr.reveal('.h1_jumb', { duration: 2000, 
                       origin: 'bottom',
                       delay: 1000,
                       mobile: true,
                       distance: '300px',
                       } );  
sr.reveal('.h4_jumb', { duration: 2000, 
                       origin: 'bottom',
                       delay: 1500,
                       mobile: true,
                       distance: '300px',
                       
                       } );  
    
    sr.reveal('#welpage', { duration: 2000, 
                       origin: 'bottom',
                       delay: 500,
                       mobile: true,
                       distance: '300px',
                       viewFactor: 0.1,
                       } );  
    sr.reveal('#aboutpg', { duration: 2000, 
                       origin: 'bottom',
                       delay: 500,
                       mobile: true,
                       distance: '300px',
                       viewFactor: 0.1,
                       } );  
    sr.reveal('#mov_sect', { duration: 2000, 
                       origin: 'bottom',
                       delay: 500,
                       mobile: true,
                       distance: '300px',
                       viewFactor: 0.3,
                       } );  
sr.reveal('#foo-id', { duration: 2000, 
                       origin: 'bottom',
                       delay: 500,
                       mobile: true,
                       distance: '300px',
                       viewFactor: 0.4,
                       } );  
    
    
/*------------movie selector imdb---------*/
    var $Form = $('form'),
    $movcol = $('#movcol, #movcol2');
    $movcol.hide();
    $Form.on('submit', function (p_oEvent) {
    var sUrl, sMovie, oData;
    p_oEvent.preventDefault();
    sMovie = $Form.find('input').val();
         
   
    sUrl = 'https://www.omdbapi.com/?t=' + sMovie + '&type=movie&tomatoes=true' + '&plot=full'  
    $.ajax(sUrl, {
    complete: function (p_oXHR, p_sStatus) {
                oData = $.parseJSON(p_oXHR.responseText);
                console.log(oData);
                $movcol.find('.director').text(oData.Director);
                $movcol.find('.genre').text(oData.Genre);
                $movcol.find('.title').text(oData.Title);
                $movcol.find('.plot').text(oData.Plot);
                $movcol.find('.poster').html('<img src="' + oData.Poster + '" class="img-responsive"/>');
                $movcol.find('.year').text(oData.Year);
                $movcol.find('.actors').text(oData.Actors);
                $movcol.find('.awards').text(oData.Awards);
                $movcol.find('.language').text(oData.Language);
                $movcol.find('.rated').text(oData.Rated);
                $movcol.find('.rating').text(oData.imdbRating);
                $movcol.fadeIn();
            }
        });
        
        
        
        
    });
    
    (function(d, s, id) {
                                    var js, fjs = d.getElementsByTagName(s)[0];
                                    if (d.getElementById(id)) return;
                                    js = d.createElement(s);
                                    js.id = id;
                                    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.9";
                                    fjs.parentNode.insertBefore(js, fjs);
                                }(document, 'script', 'facebook-jssdk'));
    
    
});
 

