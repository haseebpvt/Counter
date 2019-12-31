let countries =       ['INDIA', 'UAE', 'SAUDI', 'RUSSIA', 'GERMANY', 'USA']
let countries_time_diff = [0, -90, -150, -150, -270, -630]
//                          J    C    M    I  I   D     S     R     G     U
let countries_title = ['I N D I A', 'U A E', 'S A U D I', 'R U S S I A', 'G E R M A N Y', 'U S A']
var new_year_index = 0


// Program Starts with this function
displayTime()

async function displayTime() {

  let count = 0;

  while(true) {
    let d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var date = d.getDate()

    // Sleeping for one second
    await sleep(1000)

    // Main box
    document.getElementById("main_img").src = 'asset/' + countries[new_year_index].toLowerCase() + '_round.png'

    // India
    document.getElementById("main_img").src = 'asset/' + countries[new_year_index].toLowerCase() + '_round.png'

    document.getElementById("main_title").innerHTML = countries_title[new_year_index]
    document.getElementById("main_timer").innerHTML = prepareCountryFinalTime(countries_time_diff[new_year_index], h, m, s)

    // India
    displayTimer(0, "secondary_box_india", "india", h, m, s)

    // // Germany
    displayTimer(-270, "secondary_box_germany", "germany", h, m, s)

    // USA
    displayTimer(-630, "secondary_box_usa", "usa", h, m, s)

    // Dubai
    displayTimer(-90, "secondary_box_uae", "dubai", h, m, s)

    // Russia
    displayTimer(-150, "secondary_box_russia", "russia", h, m, s)

    // Saudi
    displayTimer(-150, "secondary_box_saudi", "saudi", h, m, s)

  }

}

function displayTimer(timeDiff, id, parent_id, h, m, s) {
  var time_text = prepareCountryFinalTime(timeDiff, h, m, s)
  if (time_text == '00:00:00') {
    document.getElementById(parent_id).remove()
    new_year_index = new_year_index + 1
  }

  var element =  document.getElementById(parent_id);
  if (typeof(element) != 'undefined' && element != null) {
    // exists.
    document.getElementById(id).innerHTML = time_text
  }

}
