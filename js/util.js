
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function prepareCountryFinalTime(timeDiff, h, m, s) {
  var country = getCalculatedTimeFromDiffrence(timeDiff, h, m, s)
  var country_else_time = calculateElseTime(country[0], country[1], country[2])
  var country_two_digit = makeItTwoDigit(country_else_time[0], country_else_time[1], country_else_time[2])
  return getFinalString(country_two_digit[0], country_two_digit[1], country_two_digit[2])
}

function makeItTwoDigit(h, m, s) {
  h = ("0" + h).slice(-2);
  m = ("0" + m).slice(-2);
  s = ("0" + s).slice(-2);
  return [h, m, s];
}

function calculateElseTime(h, m, s) {
  h = 23 - h;
  m = 59 - m;
  s = 59 - s;
  return [h, m, s];
}

function getFinalString(h, m, s) {
  return h + ':' + m + ':' + s
}

// Give this function a time diffrence and it will give the curresponing h, m, and s
function getCalculatedTimeFromDiffrence(timeDiffrence, h, m, s) {
  let systemTimeInMinutes = (h*60) + m

  console.log('START---------------------')
  console.log('h: ' + h + ', m: ' + m + ', s: ' + s + ', diff: ' + timeDiffrence);
  console.log('systemTimeInMinutes: ' + systemTimeInMinutes)

  var countryTimeInMinutes = systemTimeInMinutes + timeDiffrence
  var count = 0

  console.log('countryTimeInMinutes: ' + countryTimeInMinutes);

  while(countryTimeInMinutes > 59) {
      if (count > 23) {
        count = 0
      }

      countryTimeInMinutes = countryTimeInMinutes - 60
      count = count + 1
  }

    console.log('countryTimeInMinutes (after while): ' + countryTimeInMinutes);
    console.log('count: ' + count);
    console.log('END---------------------')


  let hours = count
  let minutes = countryTimeInMinutes
  let seconds = s

  return [hours, minutes, seconds]
}

function findTimeDiffrence(meridian) {

}
