import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import ItemListApp from '../Content/item_list'

const item_list = () => (
	<div id="item-list-area">
    <h3>item list</h3>
    <ItemListApp />
  </div>
);

export default item_list

