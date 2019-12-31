let countries =       ['JAPAN', 'INDIA', 'DUBAI', 'GERMANY', 'USA']
let countries_time_diff = [210, 0, -90, -270, -630]
let countries_title = ['J A P A N', 'I N D I A', 'D U B A I', 'G E R M A N Y', 'U S A']
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
    document.getElementById("main_img").src = '../asset/' + countries[new_year_index].toLowerCase() + '_round.png'
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

    // Japan
    displayTimer(210, "secondary_box_japan", "japan", h, m, s)

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
