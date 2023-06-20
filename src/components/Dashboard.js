import React from 'react';
import { BrowserRouter, Router, Switch, Route} from 'react-router-dom';
import NavigationPanel from './NavigationPanel';
import Section1 from './Section1';
import Section2 from './Section2';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import "./styles/Dashboard.css";


const Dashboard = () => {
	return (
		
		<div>
			<div className='dashboard'>
				<NavigationPanel />
				<Section1/>
				<Section2/>
			</div>
		</div>


	);
};

export default Dashboard;
