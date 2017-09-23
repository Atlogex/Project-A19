// Start Ant UI

// var ReactDOM = require('react-dom');
// var React = require('react');
// var menuMain = require('./components/menuMain.jsx');
//
//
// import ReactDOM from 'react-dom';
// import React from 'react';
// import menuMain from './components/menuMain.jsx';



import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import {Menu, Icon, Switch} from 'antd';
const {SubMenu} = Menu;

import { DatePicker, message } from 'antd';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
		};
	}
	handleChange(date) {
		message.info('Selected Date: ' + date.toString());
		this.setState({ date });
	}
	render() {
		return (
			<div style={{ width: 400, margin: '100px auto' }}>
				<DatePicker onChange={value => this.handleChange(value)} />
				<div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('content-main'));
/*
class App extends Component {
	render() {
		return (
			<div>
				<h2>Hello World!</h2>
			</div>
		)
	}
}

class PickerCool extends DPC{
	render (){
		return (
			<DPC />
		)
	}
}


// ReactDOM.render( <App />,  document.getElementById('content-main'));
ReactDOM.render( <DPC />,  document.getElementById('content-main'));
*/
// ReactDOM.render( menuMain, document.getElementById('content-main'));

