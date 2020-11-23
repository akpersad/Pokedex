import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { GlobalStyle } from "./global/_globalStyles";
import AppContainer from "./components/appContainer/appContainer";

class App extends Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<AppContainer />
			</>
		);
	}
}

export default App;
