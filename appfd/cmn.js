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

import {Menu, Icon, Switch, Button } from 'antd';
// const {SubMenu} = Menu;
const SubMenu = Menu.SubMenu;

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import { DatePicker, message } from 'antd';

class App extends React.Component {
	state = {
		collapsed: false,
	}
	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	render() {
		return (
			<div style={{ width: 240 }}>
				<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
					<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
				</Button>
				<Menu
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					theme="dark"
					inlineCollapsed={this.state.collapsed}
				>
					<Menu.Item key="1">
						<Icon type="pie-chart" />
						<span>Option 1</span>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="desktop" />
						<span>Option 2</span>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="inbox" />
						<span>Option 3</span>
					</Menu.Item>
					<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
						<Menu.Item key="5">Option 5</Menu.Item>
						<Menu.Item key="6">Option 6</Menu.Item>
						<Menu.Item key="7">Option 7</Menu.Item>
						<Menu.Item key="8">Option 8</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
						<Menu.Item key="9">Option 9</Menu.Item>
						<Menu.Item key="10">Option 10</Menu.Item>
						<SubMenu key="sub3" title="Submenu">
							<Menu.Item key="11">Option 11</Menu.Item>
							<Menu.Item key="12">Option 12</Menu.Item>
						</SubMenu>
					</SubMenu>
				</Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('content-main'));



/*
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

