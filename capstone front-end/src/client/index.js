import { submitted } from 'src/client/js/app'
import { updateUI } from 'src/client/js/updateUI'
import { checkLocalStorage } from 'src/client/js/localStorage'
import { clearLocalStorage } from 'src/client/js/localStorage'
import { apiCalls } from 'src/client/js/apiCalls'
import { extractCityData } from 'src/client/js/extraction'
import { extractForecastData } from 'src/client/js/extraction'
import { extractMostLikedPhoto } from 'src/client/js/extraction'
import { extractRandomPhoto } from 'src/client/js/extraction'
import { createForecastCard } from 'src/client/js/createForecastCard'

// Import styles from other files
import 'src/client/styles/main.scss'
import 'src/client/styles/form.scss'
import 'src/client/styles/forecast.scss'

// Import weather icons from icon folder
import 'src/client/icons/a01d.png'
import 'src/client/icons/a02d.png'
import 'src/client/icons/a03d.png'
import 'src/client/icons/a04d.png'
import 'src/client/icons/a05d.png'
import 'src/client/icons/a06d.png'
import 'src/client/icons/c01d.png'
import 'src/client/icons/c02d.png'
import 'src/client/icons/c03d.png'
import 'src/client/icons/c04d.png'
import 'src/client/icons/d01d.png'
import 'src/client/icons/d02d.png'
import 'src/client/icons/d03d.png'
import 'src/client/icons/f01d.png'
import 'src/client/icons/r01d.png'
import 'src/client/icons/r02d.png'
import 'src/client/icons/r03d.png'
import 'src/client/icons/r04d.png'
import 'src/client/icons/r05d.png'
import 'src/client/icons/r06d.png'
import 'src/client/icons/s01d.png'
import 'src/client/icons/s02d.png'
import 'src/client/icons/s03d.png'
import 'src/client/icons/s04d.png'
import 'src/client/icons/s05d.png'
import 'src/client/icons/s06d.png'
import 'src/client/icons/t01d.png'
import 'src/client/icons/t02d.png'
import 'src/client/icons/t03d.png'
import 'src/client/icons/t04d.png'
import 'src/client/icons/t05d.png'
import 'src/client/icons/u00d.png'

// Export functions to Client library (see webpack.dev and webpack.prod files)
export {
    submitted,
    updateUI,
    checkLocalStorage,
    clearLocalStorage,
    apiCalls,
    extractCityData,
    extractForecastData,
    extractMostLikedPhoto,
    extractRandomPhoto,
    createForecastCard
}

// An IIFE to immediately set limits on date-picker selections in user form
// This will run as soon as page loads, before user inputs anything or clicks
// Earliest date is today for both calendars
// Departure calendar has maximum 15 days from today, due to forecast limitation
(function () {
    // Get today's date
    const d = new Date()
    let minMonth = (d.getMonth() + 1).toString()
    let minDate = d.getDate().toString()
    const minYear = d.getFullYear().toString()
    // Add 0 to months and days that are < 10
    if (minMonth.length == 1) {
        minMonth = "0" + minMonth
    }
    if (minDate.length == 1) {
        minDate = "0" + minDate
    }

    // Maximum date to start forecast is 15 days from today
    d.setDate(d.getDate() + 15)
    let maxMonth = (d.getMonth() + 1).toString()
    let maxDate = d.getDate().toString()
    const maxYear = d.getFullYear().toString()
    // Add 0 to months and days that are < 10
    if (maxMonth.length == 1) {
        maxMonth = "0" + maxMonth
    }
    if (maxDate.length == 1) {
        maxDate = "0" + maxDate
    }

    // Set minimum and maximum dates in calendar
    const formattedMinDate = `${minYear}-${minMonth}-${minDate}`
    const formattedMaxDate = `${maxYear}-${maxMonth}-${maxDate}`
    const departureDate = document.getElementById('departure-date')
    departureDate.setAttribute("min", formattedMinDate)
    departureDate.setAttribute("max", formattedMaxDate)
    const returnDate = document.getElementById('return-date')
    returnDate.setAttribute("min", formattedMinDate)

    // Add click listener on submit button
    const submitButton = document.getElementById('submit-button')
    submitButton.addEventListener('click', submitted)

    // Add listener to update the UI from local storage if it exists
    window.addEventListener('load', checkLocalStorage)

    // Add click listener to Clear Data button to erase local storage
    const clearButton = document.getElementById('clear-button')
    clearButton.addEventListener('click', clearLocalStorage)

})()