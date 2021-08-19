import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Produto from '../components/Produto';

import BarraTopo from '../components/BarraTopo';

import '../styles/Carrinho.css';

class Carrinho extends React.Component {
  render() {
    const {
      produtos,
      removerItemDoCarrinho,
      gerenciarQuantidadeTotal,
    } = this.props;

    const carrinhoVazio = () => (
      <div className="carrinho-vazio-container">
        <i className="carrinho-vazio-icone fas fa-box-open" />
        <h1
          data-testid="shopping-cart-empty-message"
          className="carrinho-mensagem-vazio"
        >
          Seu carrinho está vazio...
        </h1>
      </div>
    );

    const mostrarCarrinho = () => (
      <>
        <ul className="carrinho-lista-produtos">
          {produtos
            .map((produto) => (<Produto
              gerenciarQuantidadeTotal={ gerenciarQuantidadeTotal }
              removerItemDoCarrinho={ removerItemDoCarrinho }
              key={ produto.id }
              produto={ produto }
            />))}
        </ul>
        <div className="carrinho-botão-checkout-container">
          <Link
            data-testid="checkout-products"
            className="carrinho-botão-checkout btn btn-primary"
            to="/checkout"
          >
            Finalizar Compra
          </Link>
        </div>
      </>
    );

    return (
      <section className="carrinho">
        <BarraTopo
          destino="/"
          mostrarCarrinho={ false }
        />
        { produtos[0] ? mostrarCarrinho() : carrinhoVazio() }
      </section>
    );
  }
}

Carrinho.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  removerItemDoCarrinho: PropTypes.func.isRequired,
  gerenciarQuantidadeTotal: PropTypes.func.isRequired,
};

export default Carrinho;
