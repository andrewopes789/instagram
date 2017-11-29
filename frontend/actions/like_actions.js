import * as APIUtil from '../utils/like_utils';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

export const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
});

export const receiveErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
});

export const fetchLikes = photoId => dispatch => (
  APIUtil.fetchLikes(photoId)
    .then(likes => dispatch(receiveAllLikes(likes)))
);

export const createLike = inputLike => dispatch => (
  APIUtil.createLike(inputLike)
    .then(like => dispatch(receiveLike(like)))
    .catch(err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deleteLike = likeId => dispatch => (
  APIUtil.deleteLike(likeId)
    .then(like => dispatch(removeLike(likeId)))
);