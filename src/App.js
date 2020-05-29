import React from 'react';
import './App.css';
import Header from './layout/Header';
import Title from './layout/Title';
import PostsAllMap from './components/post/PostsAllMap';
import Footer from './layout/Footer';
// import PostOne from './components/post/PostOne';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Title recentPost='Recent Post' />
        <PostsAllMap />
        <Footer />
        {/* <PostOne /> */}
      </div>
    </Provider>
  );
}

export default App;
