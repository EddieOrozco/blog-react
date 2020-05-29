import React, { Component } from 'react';
import PostAll from './PostAll';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_POSTS } from '../../actions/types';

class PostsAllMap extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <section id='blog' className='blog'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 entries'>
              <div className='row'>
                {posts.map((post) => (
                  <PostAll
                    key={post.id}
                    entryTitle={post.entryTitle}
                    entryImg={post.entryImg}
                    name={post.name}
                    date={post.date}
                    entryContent={post.entryContent}
                  />
                ))}
              </div>

              {/* Pagination Goes HERE */}
            </div>
            {/* End blog entries list  */}
            {/* Side Bar Goes HERE */}
          </div>
        </div>
      </section>
    );
  }
}

PostsAllMap.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
};

// this.state.post
const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch({ type: GET_POSTS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsAllMap);
