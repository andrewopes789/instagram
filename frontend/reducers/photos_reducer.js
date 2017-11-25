import { RECEIVE_FEED_PHOTOS } from '../actions/photo_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FEED_PHOTOS:
      return merge({}, action.photos);
    default:
      return state;
  }
};