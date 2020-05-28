import React from 'react';
import './App.css';
import Header from './layout/Header';
import Title from './layout/Title';
import PostsAllMap from './components/post/PostsAllMap';
import Footer from './layout/Footer';
import PostOne from './components/post/PostOne';

function App() {
  return (
    <div className='App'>
      <Header />
      <Title recentPost='Recent Post' />
      <PostsAllMap />
      <Footer />
      <PostOne />
    </div>
  );
}

export default App;
