/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";

import './index.css';
import Top from './pages/top';
import Post from './pages/post';
import Posts from './pages/posts';
import Profile from './pages/profile';
import NotFound from './pages/404';

render(() => <MetaProvider>
  <Router>
    <Route path="/" component={Top} />
    <Route path="/profile" component={Profile} />
    <Route path="/posts" component={Posts} />
    <Route path="/posts/:slug" component={Post} />
    <Route path="*" component={NotFound} />
  </Router>
</MetaProvider>, document.getElementById('root')!);
