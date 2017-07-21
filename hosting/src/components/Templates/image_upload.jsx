import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import ImageUploadApp from '../Content/image_upload'
import './css/common.css'

const image_upload = () => (
	<div id="image-upload-area">
		<h3>image upload</h3>
		<ImageUploadApp />
	</div>
);

export default image_upload

