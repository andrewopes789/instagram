import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';
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
  createMessage
} from '../../actions/message_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    comments: state.entities.comments,
    likes: state.entities.likes,
    userId: ownProps.match.params.userId,
    user: state.entities.user,
    photos: Object.values(state.entities.photos),
    photosAsObject: state.entities.photos,
    currentUser: state.session.currentUser,
    loading: state.ui.loading.detailLoading,
    chatroom: state.entities.chatrooms.single
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout()),
  createLike: photoId => dispatch(createLike(photoId)),
  deleteLike: photoId => dispatch(deleteLike(photoId)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  createFollow: followingId => dispatch(createFollow(followingId)),
  deleteFollow: followingId => dispatch(deleteFollow(followingId)),
  createMessage: message => dispatch(createMessage(message))
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(Profile));
