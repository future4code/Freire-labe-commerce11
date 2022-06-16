import styled from "styled-components";

export const ContainerProdutos = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CardDeProdutos = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 300px);
	grid-gap: 20px;

	li {
		text-align: center;
		background-color: white;
		padding: 10px;
		border-radius: 10px;

		h4,
		p {
			margin-top: 10px;
		}

		img {
			object-fit: cover;
			max-width: 100%;
		}

		button {
			margin: 10px 10px;
			border: none;

			background-color: black;
			padding: 10px;

			border-radius: 10px;
			font-weight: bold;
            
			color: white;
			cursor: pointer;
			transition: all 0.2s;

			:hover {
				transition: all 0.2s;
				opacity: 0.5;
			}
		}
	}
`;

export const QuantidadeProdutos = styled.section`
	width: 100%;
	padding: 10px 0;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;
