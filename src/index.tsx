/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";

import './index.css';
import Top from './pages/top';
import Blog from './pages/blog';
import NotFound from './pages/404';

render(() => <Router>
  <Route path="/" component={Top} />
  <Route path="/blog" component={Blog} />
  <Route path="*" component={NotFound} />
</Router>, document.getElementById('root')!);
