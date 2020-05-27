import React from 'react';

const Title = (props) => {
  return (
    <section id='breadcrumbs' className='breadcrumbs'>
      <div className='container'>
        <h2>{props.recentPost}</h2>
      </div>
    </section>
  );
};

export default Title;
