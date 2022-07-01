import React from "react";

import Imagem1 from "../.././img/rover-espacial.jpg";
import Imagem2 from "../.././img/capsula.jpg";
import Imagem3 from "../.././img/onibus-espacial.jpg";
import Imagem4 from "../.././img/base-de-lancamento.jfif";

import {
	ContainerProdutos,
	CardDeProdutos,
	QuantidadeProdutos,
} from "./Style";

export default class ListaDeProdutos extends React.Component {
	render() {
		return (
			<section>
				<QuantidadeProdutos>
					<p>Quantidade de Produtos: 4</p>

					<label>
						Ordenação:
						<select>
							<option>Crescente</option>
							<option>Decrescente</option>
						</select>
					</label>
				</QuantidadeProdutos>

				<ContainerProdutos>
					<CardDeProdutos>
						<li>
							<img src={Imagem1} alt="" />
							<h4>Rover espacial</h4>
							<p>
								<strong>R$</strong> 200,00
							</p>
							<button>Adicionar ao carrinho</button>
						</li>

						<li>
							<img src={Imagem2} alt="" />
							<h4>Cápsula espacial</h4>
							<p>
								<strong>R$</strong> 250,00
							</p>
							<button>Adicionar ao carrinho</button>
						</li>

						<li>
							<img src={Imagem3} alt="" />
							<h4>Ônibus espacial</h4>
							<p>
								<strong>R$</strong> 300,00
							</p>
							<button>Adicionar ao carrinho</button>
						</li>

						<li>
							<img src={Imagem4} alt="" />
							<h4>Base de lançamento</h4>
							<p>
								<strong>R$</strong> 400,00
							</p>

							<button>Adicionar ao carrinho</button>
						</li>
					</CardDeProdutos>
				</ContainerProdutos>
			</section>
		);
	}
}