import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Discover from './discover';

import {
  createLike,
  deleteLike
} from '../../actions/like_actions';

import {
  createComment,
  deleteComment
} from '../../actions/comment_actions';

import {
  createFollow,
  deleteFollow
} from '../../actions/follow_actions';

import {
  fetchUsers
} from '../../actions/user_actions';

import {
  fetchRecommendations
} from '../../actions/recommendation_actions';

import {
  deletePhotos
} from '../../actions/photo_actions';


import { logout } from '../../actions/session_actions';

const mapStateToProps = ({session, entities, ui}) => ({
  comments: entities.comments,
  likes: entities.likes,
  currentUser: session.currentUser,
  users: entities.user.index,
  photos: entities.photos,
  userLoading: ui.loading.indexLoading,
  recommendationLoading: ui.loading.detailLoading
});

const mapDispatchToProps = dispatch => ({
  fetchRecommendations: pageId => dispatch(fetchRecommendations(pageId)),
  fetchUsers: pageId => dispatch(fetchUsers(pageId)),
  createLike: photoId => dispatch(createLike(photoId)),
  deleteLike: photoId => dispatch(deleteLike(photoId)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  createFollow: followingId => dispatch(createFollow(followingId)),
  deleteFollow: followingId => dispatch(deleteFollow(followingId)),
  deletePhotos: () => dispatch(deletePhotos()),
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Discover));
