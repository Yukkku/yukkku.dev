/* @refresh reload */
import { lazy } from 'solid-js';
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";

import Frame from './components/frame';
import Top from './pages/top';
import Post from './pages/post';
import NotFound from './pages/404';
import './index.css';

render(() => <MetaProvider>
  <Router>
    <Route path="/" component={Top} />
    <Route component={Frame}>
      <Route path="/profile" component={lazy(() => import("./pages/profile"))} />
      <Route path="/posts" component={lazy(() => import("./pages/posts"))} />
      <Route path="/posts/:slug" component={Post} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
</MetaProvider>, document.getElementById('root')!);
