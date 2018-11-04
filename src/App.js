import React, { Component } from 'react';
//Import Lib
//End Import
import './App.css';
import HeaderComponent from './shared/layout/header/header.component';
import FooterComponent from './shared/layout/footer/footer.component';
import HomeComponent from './containers/home/pages/home/home.component';
import AboutComponent from './containers/about/pages/about/about.componet';
import { BrowserRouter as Router,Route }  from 'react-router-dom';
class App extends Component {
	render() {
		return ( 
			<div className='container'>
				<HeaderComponent></HeaderComponent>
				<Router>
					<div className="main">
						<Route exact path='/' component={HomeComponent}></Route>
						<Route exact path='/about' component={AboutComponent}></Route>
					</div>
				</Router>
				<FooterComponent></FooterComponent>
			</div>
		);
	}
}

export default App;