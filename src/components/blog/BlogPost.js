import React, { Component } from 'react';

class BlogPost extends Component {
  render() {
    return (
      <article className='entry'>
        {/* IMG Dynamic */}
        <div className='entry-img'>
          <img src='assets/img/blog-1.jpg' alt='' className='img-fluid' />
        </div>
        {/* Title Dynamic */}
        <h2 className='entry-title'>
          <a href='blog-single.html'>{this.props.entryTitle}</a>
        </h2>
        {/* Name and Date Dynamic */}
        <div className='entry-meta'>
          <ul>
            <li className='d-flex align-items-center'>
              <i className='icofont-user'></i>
              <a href='blog-single.html'>{this.props.name}</a>
            </li>
            <li className='d-flex align-items-center'>
              <i className='icofont-wall-clock'></i>
              <a href='blog-single.html'>
                <time datetime='2020-01-01'>{this.props.date}</time>
              </a>
            </li>
          </ul>
        </div>
        {/* Content Dynamic */}
        <div className='entry-content'>
          <p>{this.props.entryContent}</p>
          {/* BTN Component */}
          <div className='read-more'>
            <a href='blog-single.html'>Read More</a>
          </div>
        </div>
      </article>
    );
  }
}

export default BlogPost;
