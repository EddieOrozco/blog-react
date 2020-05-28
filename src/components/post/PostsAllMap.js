import React, { Component } from 'react';
import PostAll from './PostAll';

class PostsAllMap extends Component {
  state = {
    posts: [
      {
        id: 1,
        entryTitle: 'Cookies are a great easy thing to bake, and tasty too',
        entryImg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFf6OzPjLKk69W7dY9e7cx6GnTm9rJgtF6jXJn4FK_GGDVaOLn&usqp=CAU',
        name: 'Eddie',
        date: 'May 27, 2020',
        entryContent:
          'Entry content this is the easiest way to make a cookie and not mess it up if you can follow my instructions fhaksfkajsl ajflkasjf l aljfla falsjkf saf;a a;fj;as kfkasjl;skfoso ',
      },
      {
        id: 2,
        entryTitle: 'Muffins are a great easy thing to bake, and tasty too',
        entryImg:
          'https://wonkypie.com/wp-content/uploads/healthy_blueberry_muffin_recipe-480x270.jpg',
        name: 'Eddie',
        date: 'May 27, 2020',
        entryContent:
          'Entry content this is the easiest way to make a cookie and not mess it up if you can follow my instructions fhaksfkajsl ajflkasjf l aljfla falsjkf saf;a a;fj;as kfkasjl;skfoso ',
      },
      {
        id: 3,
        entryTitle: 'Brownies are a great easy thing to bake, and tasty too',
        entryImg:
          'https://www.mamaknowsglutenfree.com/wp-content/uploads/2018/06/gluten-free-brownies-rc1-480x270.jpg',
        name: 'Eddie',
        date: 'May 27, 2020',
        entryContent:
          'Entry content this is the easiest way to make a cookie and not mess it up if you can follow my instructions fhaksfkajsl ajflkasjf l aljfla falsjkf saf;a a;fj;as kfkasjl;skfoso',
      },
      {
        id: 4,
        entryTitle: 'Pie are a great easy thing to bake, and tasty too',
        entryImg:
          'https://theloopywhisk.com/wp-content/uploads/2019/09/Pumpkin-Pie_730px-featured-480x270.jpg',
        name: 'Eddie',
        date: 'May 27, 2020',
        entryContent:
          'Entry content this is the easiest way to make a cookie and not mess it up if you can follow my instructions fhaksfkajsl ajflkasjf l aljfla falsjkf saf;a a;fj;as kfkasjl;skfoso',
      },
    ],
  };
  render() {
    const { posts } = this.state;
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

export default PostsAllMap;
