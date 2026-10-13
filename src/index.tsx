/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";

import './index.css';
import Top from './pages/top';

render(() => <Router>
  <Route path="/" component={Top} />
</Router>, document.getElementById('root')!);
