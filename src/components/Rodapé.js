import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../styles/Rodapé.css';

class Rodapé extends Component {
  render() {
    return (
      <footer>
        <p>
          Developed by:
          Cássio Pereira, Diego Vilela, Eduardo Rossi, Lucas Pinheiro, and Pedro Tasfereti

        </p>
        <Link
          to={
            { pathname: 'https://github.com/tryber/sd-013-a-project-frontend-online-store/tree/main-group-2' }
          }
          target="_blank"
        >
          Repository
        </Link>
      </footer>
    );
  }
}

export default Rodapé;
