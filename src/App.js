import React from "react";
// import logo from './logo.svg';
import "./App.css";

import Index from "./view/index.jsx";
import Poster from "./view/post/postList.jsx";

import { HashRouter as Router, Link, Route } from "react-router-dom";

const About = () => (
	<div>
		<h2>About</h2>
	</div>
);

// const NoMatch = () => (
// 	<div>
// 		<h2>NoMatch</h2>
// 	</div>
// );

function App() {
	return (
		<Router>
			<div className="App">
				<div>
					<div>
						<Link to="/">Home</Link>
					</div>
					<div>
						<Link to="/about">About</Link>
					</div>
					<div>
						<Link to="/poster/1">Poster</Link>
					</div>
				</div>

				<div>
					<Route path="/" exact component={Index}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/poster/:id" component={Poster}></Route>
					{/* <Route component={NoMatch}></Route> */}
				</div>
			</div>
		</Router>
	);
}

export default App;
