import React from 'react';
import './App.css';
import Header from './layout/Header';
import Title from './layout/Title';
import BlogPosts from './components/blog/BlogPosts';
import Footer from './layout/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Title recentPost='Recent Post' />
      <BlogPosts />
      <Footer />
    </div>
  );
}

export default App;
