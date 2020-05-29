import React, { Component } from 'react';

class PostAll extends Component {
  render() {
    const { entryTitle, name, date, entryContent, entryImg } = this.props;
    return (
      <div className='col-md-6 d-flex align-items-stretch'>
        <article className='entry'>
          {/* IMG Dynamic */}
          <div className='entry-img'>
            <img
              src={`${entryImg}`}
              alt=''
              className='img-fluid'
              style={{
                backgroundImage: 'url({`${entryImg}`} )',
                width: '100%',
              }}
            />
          </div>
          {/* Title Dynamic */}
          <h2 className='entry-title'>
            <a href='blog-single.html'>{entryTitle}</a>
          </h2>
          {/* Name and Date Dynamic */}
          <div className='entry-meta'>
            <ul>
              <li className='d-flex align-items-center'>
                <i className='icofont-user'></i>
                <a href='blog-single.html'>{name}</a>
              </li>
              <li className='d-flex align-items-center'>
                <i className='icofont-wall-clock'></i>
                <a href='blog-single.html'>
                  <time>{date}</time>
                </a>
              </li>
            </ul>
          </div>
          {/* Content Dynamic */}
          <div className='entry-content'>
            {/* <p>{entryContent}</p> */}
            {/* BTN Component */}
            <div className='read-more'>
              <a href='blog-single.html'>Read More</a>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default PostAll;
