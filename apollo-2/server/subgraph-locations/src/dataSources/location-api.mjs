import locationData from './location-data.json' assert {type: "json"}

const { locations } = locationData

export class LocationsAPI {
    getAllLocations() {
        return locations
    }

    getLocation(id) {
        return locations.find(el => el.id === id)
    }
}