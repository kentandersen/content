import './App.css';

import React, { Component } from 'react';
import Article from './article/Article';
import post from './article/post.json';
import { postToArticle } from './article/transforms';
import SoftFooter from './footer/SoftFooter';
import Footer from './footer/Footer';
import AppBtns from './footer/AppBtns';

class App extends Component {
  render() {
    return [
      <Article {...postToArticle(post)} />,
      <SoftFooter />,
      <Footer />,
      <AppBtns />
    ];
  }
}

export default App;
