import React from 'react';

const Title = (props) => {
  const { recentPost } = props;
  return (
    <section id='breadcrumbs' className='breadcrumbs'>
      <div className='container'>
        <h2>{recentPost}</h2>
      </div>
    </section>
  );
};

export default Title;
