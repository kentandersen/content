import './App.css';

import React, { PureComponent } from 'react';
import Article from './article/Article';
import { getPost } from './service';
import { postToArticle } from './article/transforms';
import SoftFooter from './footer/SoftFooter';
import Footer from './footer/Footer';
import AppBtns from './footer/AppBtns';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function Home() {
  return <div>Forside</div>;
}

function wrapLoading(ChildComponent) {
  return class extends PureComponent {
    constructor() {
      super();
      this.state = {};
    }

    componentWillMount() {
      this.loadContent(this.props.location.pathname);
    }

    componentWillReceiveProps(nextProps) {
      const { pathname } = nextProps.location;

      if (this.props.location.pathname !== pathname) {
        this.loadContent(pathname);
      }
    }

    loadContent(pathname) {
      getPost(pathname).then(content => {
        this.setState({ content });
      });
    }

    render() {
      if (this.state.content) {
        return (
          <ChildComponent
            {...this.props}
            {...postToArticle(this.state.content)}
          />
        );
      } else {
        return <div>Loading...</div>;
      }
    }
  };
}

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/:pageName" component={wrapLoading(Article)} />
        <SoftFooter />
        <Footer />
        <AppBtns />
      </div>
    </Router>
  );
}

export default App;
