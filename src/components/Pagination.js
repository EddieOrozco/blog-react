import React, { Component } from 'react';

export default class Pagination extends Component {
  render() {
    return (
      <div className='blog-pagination'>
        <ul className='justify-content-center'>
          <li className='disabled'>
            <i className='icofont-rounded-left'></i>
          </li>
          <li className='active'>
            <a href='#'>1</a>
          </li>
          <li>
            <a href='#'>2</a>
          </li>
          <li>
            <a href='#'>3</a>
          </li>
          <li>
            <a href='#'>
              <i className='icofont-rounded-right'></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
