import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const { posts, request } = this.props;

     if (!request.pending && request.success && posts.length > 0) 
         return <PostsList posts={posts} />;
     if (request.pending || request.success === null)
         return <Spinner />;
     if (!request.pending && request.error !== null && request.error !== undefined)
         return <Alert variant="error">{request.error}</Alert>;
     if (!request.pending && request.success && posts.length === 0) 
         return <Alert variant="info">No posts</Alert>;
     return <Spinner />;
  }
  }


Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;