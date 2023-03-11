export const resolvers = {
    Query: {
        latestReview: (_, __, { dataSources }) => {
            return dataSources.reviewsAPI.getLatestReview()
        }
    },
    Mutation: {
        submitReview: (_, { locationReview }, { dataSources }) => {
            const newReview = dataSources.reviewsAPI.submitReviewForLocation(locationReview)
            return {
                code: 200,
                success: true,
                message: 'success',
                locationReview: newReview
            }
        }
    }
}