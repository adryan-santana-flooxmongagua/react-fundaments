import React from "react";
import products from "../data/products";
import './TableProducts.css'

export default (props) => {
    
    function getLinhas() {
        return products.map((products, i) => {
            return (
                <tr key={products.id} 
                    className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{products.id}</td>
                    <td>{products.name}</td>
                    <td>R$ {products.price.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    );
};