import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  RECEIVE_SEARCH
} from "../../actions/event_actions";
import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from "../../actions/reviews_actions";

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return Object.assign({}, state, {[action.review.id]: action.review})

    case RECEIVE_REVIEWS:
      return action.reviews

    case RECEIVE_EVENT:
      const { reviews } = action.payload;
      const newState = Object.assign({}, state, reviews);
      return newState;

    case RECEIVE_SEARCH:
      return Object.assign({}, state, action.searchQuery);

    default:
      return state;
  }
};

export default ReviewsReducer;
