
var libForm = document.getElementById("lib-form");
libForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var nounVal1 = document.getElementById("noun1").value;
    var nounVal2 = document.getElementById("noun2").value;
    var nounVal3 = document.getElementById("noun3").value;
    var nounVal4 = document.getElementById("noun4").value;
    var adjectiveVal1 = document.getElementById("adjective1").value;
    var adjectiveVal2 = document.getElementById("adjective2").value;
    var adjectiveVal3 = document.getElementById("adjective3").value;
    var adjectiveVal4 = document.getElementById("adjective4").value;
    var adjectiveVal5 = document.getElementById("adjective5").value;
    var adjectiveVal6 = document.getElementById("adjective6").value;
    var verbVal1 = document.getElementById("verb").value;
    var adverbVal1 = document.getElementById("adverb1").value;
    var adverbVal2 = document.getElementById("adverb2").value;
    var celebVal1 = document.getElementById("celeb1").value;
    var celebVal2 = document.getElementById("celeb2").value;
    var partofbodyVal1 = document.getElementById("partofbody1").value;
    var partofbodyVal2 = document.getElementById("partofbody2").value;
    var animalVal1 = document.getElementById("animal").value;
    var maleinroomVal1 = document.getElementById("personinroom").value;
    fetchPhotos(celebVal2);
    fetchPhotos(celebVal1);
    var storyDiv = document.getElementById("story");
    storyDiv.innerHTML = "My Dream Man should, first of all be very " + adjectiveVal1 + " and " + adjectiveVal2 + ". He should have a physique like " + celebVal1 + ", a profile like " + celebVal2 + ", and the intelligence of a/an " + animalVal1 + ". He must be polite and must always remember to " + verbVal1 + " my " + nounVal1 + ", to tip his " + nounVal2 + " and to take my " + partofbodyVal1 + " when crossing the street. He should move " + adverbVal1 + ", have a/an " + adjectiveVal3 + " voice, and should always dress " + adverbVal2 + ". I would also like him to be a/an " + adjectiveVal4 + " dancer, and when we are alone he should whisper " + adjectiveVal5 + " nothings into my " + partofbodyVal2 + " and hold my " + adjectiveVal6 + " " + nounVal3 + ". I know a/an " + nounVal4 + " is hard to find. In fact the only one I can think of is " + maleinroomVal1 + ".";

});

function fetchPhotos(query) {
    $.ajax({
        url: 'https://api.flickr.com/services/rest/',
        data: {api_key: 'a0de4a213ab1191732ec4db4daf586a3',
            method: 'flickr.photos.search',
            tags: query, per_page: '3', format: 'json',
            safe_search: '1'
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        success: function(json){
            var photos = json.photos.photo;
            for (var i = 0; i < photos.length; i++) {
                var photo = photos[i];
                var photoUrl = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_' + 'm.jpg';
                $('#demo').append('<img src="' + photoUrl + '">');
            }
        }
    });
}
