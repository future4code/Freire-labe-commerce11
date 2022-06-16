import React, { Component } from "react";
import Produtos from "./components/Produtos";
import { AppContainer } from "./Style"
export default class App extends Component {
	render() {
		return (
			<AppContainer>
				<Produtos />
			</AppContainer>
		);
	}
}
