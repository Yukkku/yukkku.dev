/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";

import './index.css';
import Top from './pages/top';
import Post from './pages/post';
import NotFound from './pages/404';

render(() => <MetaProvider>
  <Router>
    <Route path="/" component={Top} />
    <Route path="/posts/:slug" component={Post} />
    <Route path="*" component={NotFound} />
  </Router>
</MetaProvider>, document.getElementById('root')!);
