import React from "react"
import styled from 'styled-components'
import Imagem1 from '../img/rover-espacial.jpg'
import Imagem2 from '../img/capsula.jpg'
import Imagem3 from '../img/onibus-espacial.jpg'
import Imagem4 from '../img/base-de-lancamento.jfif'

const ProdutosContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;`

const ProdutosInfo = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-around;
    padding: 0px 800px 0px;

    p{
        font-size: 20px;
        border: 1px solid rebeccapurple;
        color: white;
    }
    label{
        font-size: 20px;
        color: white;
    }
    select{
        border-radius: 10px;
        font-size: 20px;
        background-color: white;
    }
`
    
const ListaProdutos = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, auto));
    justify-content: center;
    grid-gap: 50px;
    padding: 1vh;
    align-items: center;

    img{
        width: 300px;
        height: 200px;
    }
    li{
        list-style: none;
        border: 1px solid rebeccapurple;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        padding: 70px 50px;

        h1{
            margin:10px 0;
        }
        h2{
            margin:30px 0;
        }
        button{
            border: none;
            cursor: pointer;
            color: white;
            font-size: 25px;
            background-color: black;
            border-radius: 10px;
            padding: 10px;
            }
        button:hover{
            opacity: 50%;
        }
    }`
export default class ListaDeProdutos extends React.Component{
    
    render() {
        return(
            <div>
                <ProdutosInfo>
                    <p>Quantidade de produtos:</p>
                    <label>Ordenação:
                    <select>
                        <option>Crescente</option>
                        <option>Descresente</option>
                    </select>
                    </label>
                    </ProdutosInfo>
            <ProdutosContainer>
                <ListaProdutos>
                    <li>
                        <img src={Imagem1} alt=""/>
                        <h1>Rover espacial</h1>
                        <h2>R$100</h2>
                        <button>Adicionar carrinho</button>
                    </li>
                    <li>
                        <img src={Imagem2} alt=""/>
                        <h1>Cápsula espacial</h1>
                        <h2>R$200</h2>
                        <button>Adicionar carrinho</button>
                    </li>
                    <li>
                        <img src={Imagem3} alt=""/>
                        <h1>Ônibus espacial</h1>
                        <h2>R$220</h2>
                        <button>Adicionar carrinho</button>
                    </li>
                    <li>
                        <img src={Imagem4} alt=""/>
                        <h1>Base de lançamento</h1>
                        <h2>R$400</h2>
                        <button>Adicionar carrinho</button>
                    </li>
                </ListaProdutos>    
            </ProdutosContainer>
            </div>
        )
    }
}