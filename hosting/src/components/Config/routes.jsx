import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Content from '../Templates/content';
import User from '../Templates/user';
import Debug from '../Templates/debug';
import ImageUpload from '../Templates/image_upload';
import ItemList from '../Templates/item_list';
import Chat from '../../chat';

const Routes = () => (
  <div>
    <Debug />
    <hr/>
    <Router>
      <Switch>
        <Route exact path="/" component={ Content } />
        <Route path="/uid/:uid" component={ User } />
        <Route path="/debug" component={ Debug } />
        <Route path="/image_upload" component={ ImageUpload } />
        <Route path="/item_list" component={ ItemList } />
        <Route path="/chat" component={ Chat } />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </div>
);

export default Routes

