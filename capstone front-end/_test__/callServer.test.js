import { callServer } from '../src/client/js/apiCalls'

describe("Test API call", () => {

    it("returns good data", async () => {
        const bigData = {
            userData: {
                departureDate: "2023-10-09",
                destinationCity: "Sydney",
                returnDate: "2023-10-13",
                timeUntilReturn: 4,
                timeUntilTrip: 0,
                tripDuration: 4,
                units: "M"
            }
        }
        const response = await callServer('callgeo', bigData)
        expect(response.geonames[0].countryName).toBe('Australia')
    })

})