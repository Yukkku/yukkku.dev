/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";

import './index.css';
import Top from './pages/top';
import Post from './pages/post';
import NotFound from './pages/404';

render(() => <Router>
  <Route path="/" component={Top} />
  <Route path="/posts/:slug" component={Post} />
  <Route path="*" component={NotFound} />
</Router>, document.getElementById('root')!);
