import reviewData from './review-data.json' assert {type: "json"}

const { reviews } = reviewData

export class ReviewsAPI {
    getReview(id) {
        return reviews.find(el => el.id === id)
    }

    getReviewsForLocation(locationId) {
        return reviews.filter(el => el.locationId === locationId)
    }

    getLatestReview() {
        return reviews.slice(Math.max(reviews.length - 3, 0))
    }

    getOverallRatingForLocation(locationId) {
        const allRating = reviews.filter(el => el.locationId === locationId).map(el => el.rating)
        const sum = allRating.reduce((a, b) => a + b, 0)
        const average = sum / allRating.length || 0
        return average
    }

    submitReviewForLocation(review) {
        const newReview = { id: `rev-${reviews.length + 1}`, ...review }
        return newReview
    }
}