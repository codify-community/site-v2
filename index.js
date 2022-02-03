import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';

import Main from './pages/Main';


ReactDOM.render(
	<Router>
		<Header/>
		<Routes>
			<Route path="/" exact={true} element={<Main/>} />
		</Routes>
		
	</Router>
	,document.querySelector('#root')
);