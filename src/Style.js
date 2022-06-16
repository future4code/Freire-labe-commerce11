import styled from "styled-components";
import Background from "./img/background.jpg";

export const AppContainer = styled.main`
	display: flex;
	align-items: center;

	justify-content: center;
	height: 100vh;
	background-image: url(${Background});
`;
