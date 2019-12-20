export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
import * as ReviewUtil from '../util/review_util';
import { receiveReservationErrors } from './reservation_actions';
export const RECEIVE_REVIEWS_ERRORS = "RECEIVE_REVIEWS_ERRORS";

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW, 
        review
    }
}

const receiveReviewsErrors = errors => {
    return {
        type: RECEIVE_REVIEWS_ERRORS,
        errors
    }
}

export const createReview = (review) => dispatch => {
    return ReviewUtil.createReview(review).then(review => {
        dispatch(receiveReview(review));
    }, err => {
        dispatch(receiveReviewsErrors(err.responseJSON))
    });
};