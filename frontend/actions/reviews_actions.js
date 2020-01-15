export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
import * as ReviewUtil from '../util/review_util';
import { receiveReservationErrors } from './reservation_actions';
export const RECEIVE_REVIEWS_ERRORS = "RECEIVE_REVIEWS_ERRORS";

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW, 
        review
    }
}

const receiveReviews = reviews => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

const receiveReviewsErrors = errors => {
    return {
        type: RECEIVE_REVIEWS_ERRORS,
        errors
    }
}

export const fetchReviews = userId => dispatch => {
    return ReviewUtil.fetchReviews(userId).then(reviews => {
        dispatch(receiveReviews(reviews));
    }, err => {
        dispatch(receiveReviewsErrors(err.responseJSON))
    });
};

export const createReview = (review) => dispatch => {
    return ReviewUtil.createReview(review).then(review => {
        dispatch(receiveReview(review));
    }, err => {
        dispatch(receiveReviewsErrors(err.responseJSON))
    });
};