(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],Array(22).concat([function(e,a,t){e.exports=t.p+"static/media/icone-deletar.2253c48f.svg"},,function(e,a,t){e.exports=t.p+"static/media/icone-cabe\xe7alho.542b3133.svg"},function(e,a,t){e.exports=t(54)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(21),c=t.n(o),i=(t(30),t(16)),l=t(1),u=t(2),s=t(4),m=t(3),d=t(7),p=t(5),h=t(22),f=t.n(h),v=(t(31),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).gerenciarQuantidade=function(a){var t=a.target.id,r=e.props,n=r.gerenciarQuantidadeTotal,o=r.produto.available_quantity;"diminuir"===t?e.setState((function(e){return{quantidade:e.quantidade-1}}),(function(){e.state.quantidade<1?e.setState({quantidade:1}):n(t)})):"aumentar"===t&&e.setState((function(e){return{quantidade:e.quantidade+1}}),(function(){e.state.quantidade>=o?e.setState({quantidade:o}):n(t)}))},e.state={quantidade:1},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.produto,a=e.id,t=e.title,r=e.thumbnail,o=e.price,c=this.state.quantidade,i=this.props.removerItemDoCarrinho;return n.a.createElement("li",{className:"carrinho-produto"},n.a.createElement("button",{type:"button",id:"remover",className:"carrinho-produto-bot\xe3o-deletar",onClick:function(){return i(a,c)}},n.a.createElement("img",{src:f.a,alt:"Deletar produto"})),n.a.createElement("img",{className:"carrinho-produto-thumb",src:r,alt:t}),n.a.createElement("span",{className:"carrinho-produto-titulo","data-testid":"shopping-cart-product-name"},t),n.a.createElement("span",{className:"carrinho-produto-pre\xe7o"},"R$ ".concat(o)),n.a.createElement("div",{className:"carrinho-produto-quantidade-container"},n.a.createElement("button",{"data-testid":"product-decrease-quantity",type:"button",id:"diminuir",className:"carrinho-produto-bot\xe3o-quantidade diminuir",onClick:this.gerenciarQuantidade}),n.a.createElement("span",{"data-testid":"shopping-cart-product-quantity"},c),n.a.createElement("button",{"data-testid":"product-increase-quantity",type:"button",id:"aumentar",className:"carrinho-produto-bot\xe3o-quantidade aumentar",onClick:this.gerenciarQuantidade})))}}]),t}(r.Component)),b=(t(32),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).mostrarQuantidade=function(e){return n.a.createElement("div",{className:"quantidade-total","data-testid":"shopping-cart-size"},e)},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.quantidadeTotal;return n.a.createElement("div",{className:"bot\xe3o-carrinho"},n.a.createElement(d.b,{to:"/carrinho",className:"link-carrinho","data-testid":"shopping-cart-button"},"Carrinho"),0===e?null:this.mostrarQuantidade(e))}}]),t}(r.Component)),E=(t(41),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.destino;return n.a.createElement("div",{className:"bot\xe3o-voltar"},n.a.createElement(d.b,{className:"link-voltar",to:e},"Voltar"))}}]),t}(r.Component)),g=(t(42),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.destino,t=e.mostrarCarrinho,r=e.quantidadeTotal;return n.a.createElement("div",{className:"barra-topo"},n.a.createElement(E,{destino:a}),t?n.a.createElement(b,{quantidadeTotal:r}):null)}}]),t}(r.Component));g.defaultProps={quantidadeTotal:0};var C=g,N=(t(43),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.produtos,t=e.removerItemDoCarrinho,r=e.gerenciarQuantidadeTotal;return n.a.createElement("section",{className:"carrinho"},n.a.createElement(C,{destino:"/",mostrarCarrinho:!1}),a[0]?n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"carrinho-lista-produtos"},a.map((function(e){return n.a.createElement(v,{gerenciarQuantidadeTotal:r,removerItemDoCarrinho:t,key:e.id,produto:e})}))),n.a.createElement("div",{className:"carrinho-bot\xe3o-checkout-container"},n.a.createElement(d.b,{"data-testid":"checkout-products",className:"carrinho-bot\xe3o-checkout btn btn-primary",to:"/checkout"},"Finalizar Compra"))):n.a.createElement("div",{className:"carrinho-vazio-container"},n.a.createElement("i",{className:"carrinho-vazio-icone fas fa-box-open"}),n.a.createElement("h1",{"data-testid":"shopping-cart-empty-message",className:"carrinho-mensagem-vazio"},"Seu carrinho est\xe1 vazio...")))}}]),t}(n.a.Component)),y=t(15),O=(t(44),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.produto,a=e.thumbnail,t=e.title,r=e.price;return n.a.createElement("div",{className:"produtos-selecionados"},n.a.createElement("li",null,n.a.createElement("img",{className:"produtos-selecionados-thumb",src:a,alt:t}),n.a.createElement("span",{className:"carrinho-produto-titulo"},t),n.a.createElement("span",{className:"carrinho-produto-pre\xe7o"},"R$ ".concat(r))))}}]),t}(r.Component)),j=(t(45),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.gerenciadorDoForm,t=e.nomeCompleto,r=e.email,o=e.cpf,c=e.telefone,i=e.cep,l=e.endere\u00e7o;return n.a.createElement("fieldset",{className:"checkout-formul\xe1rio-info"},n.a.createElement("legend",null,"Informa\xe7\xf5es do comprador"),n.a.createElement("input",{type:"text","data-testid":"checkout-fullname",placeholder:"Nome Completo",name:"nomeCompleto",onChange:a,value:t,required:!0,className:"form-control"}),n.a.createElement("input",{type:"email","data-testid":"checkout-email",placeholder:"Email",name:"email",onChange:a,value:r,required:!0,className:"form-control"}),n.a.createElement("input",{type:"type","data-testid":"checkout-cpf",placeholder:"CPF",name:"cpf",onChange:a,value:o,required:!0,className:"form-control"}),n.a.createElement("input",{type:"type","data-testid":"checkout-phone",placeholder:"Telefone",name:"telefone",onChange:a,value:c,required:!0,className:"form-control"}),n.a.createElement("input",{type:"type","data-testid":"checkout-cep",placeholder:"CEP",name:"cep",onChange:a,value:i,required:!0,className:"form-control"}),n.a.createElement("input",{type:"type","data-testid":"checkout-address",placeholder:"Endere\xe7o",name:"endere\xe7o",onChange:a,value:l,required:!0,className:"form-control"}))}}]),t}(r.Component)),k=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.gerenciadorDoForm;return n.a.createElement("fieldset",{className:"checkout-formul\xe1rio-pagamento"},n.a.createElement("legend",null,"M\xe9todo de pagamento"),n.a.createElement("div",{className:"checkout-formul\xe1rio-pagamento-inputs"},n.a.createElement("label",{htmlFor:"boleto"},n.a.createElement("input",{type:"radio",id:"boleto",value:"boleto",name:"pagamento",className:"checkout-formul\xe1rio-pagamento-input form-check-input",onClick:e,required:!0}),"Boleto"),n.a.createElement("label",{htmlFor:"visa"},n.a.createElement("input",{type:"radio",id:"visa",value:"visa",name:"pagamento",className:"checkout-formul\xe1rio-pagamento-input form-check-input",onClick:e}),"Visa"),n.a.createElement("label",{htmlFor:"mastercard"},n.a.createElement("input",{type:"radio",id:"mastercard",value:"mastercard",name:"pagamento",className:"checkout-formul\xe1rio-pagamento-input form-check-input",onClick:e}),"MasterCard"),n.a.createElement("label",{htmlFor:"elo"},n.a.createElement("input",{type:"radio",id:"elo",value:"elo",name:"pagamento",className:"checkout-formul\xe1rio-pagamento-input form-check-input",onClick:e}),"Elo")))}}]),t}(r.Component),q=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).gerenciadorDoForm=function(a){var t=a.target,r=t.name,n=t.value;e.setState(Object(y.a)({},r,n))},e.limparForm=function(){var a=e.props.esvaziarCarrinho,t=e.state,r=t.nomeCompleto,n=t.email,o=t.cpf,c=t.telefone,i=t.cep,l=t.endere\u00e7o,u=t.pagamento;r&&n&&o&&c&&i&&l&&u&&e.setState({nomeCompleto:"",email:"",cpf:"",telefone:"",cep:"","endere\xe7o":"",pagamento:""},(function(){a(),e.setState({redirecionar:!0})}))},e.state={nomeCompleto:"",email:"",cpf:"",telefone:"",cep:"","endere\xe7o":"",pagamento:"",redirecionar:!1},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.nomeCompleto,r=a.email,o=a.cpf,c=a.telefone,i=a.cep,l=a.endere\u00e7o,u=a.redirecionar,s=this.props.produtos;return n.a.createElement("div",null,u?n.a.createElement(p.a,{to:"/"}):n.a.createElement("section",{className:"checkout"},n.a.createElement(C,{destino:"/carrinho",mostrarCarrinho:!1}),n.a.createElement("div",{className:"checkout-produtos-selecionados"},n.a.createElement("h1",{className:"checkout-produtos-selecionados-titulo"},"Revise seus produtos"),n.a.createElement("ol",{className:"checkout-lista-produtos-selecionados"},s.map((function(e){return n.a.createElement(O,{key:e.id,produto:e})})))),n.a.createElement("form",{className:"checkout-formul\xe1rio"},n.a.createElement(j,{gerenciadorDoForm:e.gerenciadorDoForm,nomeCompleto:t,email:r,cpf:o,telefone:c,cep:i,"endere\xe7o":l}),n.a.createElement(k,{gerenciadorDoForm:e.gerenciadorDoForm}),n.a.createElement("button",{type:"submit",onClick:e.limparForm,className:"btn btn-primary"},"Comprar"))))}}]),t}(r.Component),S=t(11),T=t.n(S),D=t(12);function P(){return F.apply(this,arguments)}function F(){return(F=Object(D.a)(T.a.mark((function e(){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,a){return I.apply(this,arguments)}function I(){return(I=Object(D.a)(T.a.mark((function e(a,t){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(a,"&q=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(47);var A=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).setCategorias=Object(D.a)(T.a.mark((function a(){var t;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P();case 2:t=a.sent,e.setState({categorias:t});case 4:case"end":return a.stop()}}),a)}))),e.state={categorias:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setCategorias()}},{key:"render",value:function(){var e=this.state.categorias,a=this.props.atualizaCategoriaId;return n.a.createElement("div",{className:"categorias"},n.a.createElement("h1",{className:"titulo-categorias"},"Categorias"),n.a.createElement("ul",{className:"lista-categorias"},e.map((function(e){var t=e.name,r=e.id;return n.a.createElement("li",{key:r},n.a.createElement("button",{className:"categoria",type:"button",onClick:a,"data-testid":"category",id:r},t))}))))}}]),t}(r.Component),z=(t(48),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).renderProduto=function(a){var t=a.id,r=a.title,o=a.thumbnail,c=a.price,i=a.shipping.free_shipping,l=e.props,u=l.gestorDoCarrinho,s=l.guardaProdutoClicado;return n.a.createElement("li",{key:t,"data-testid":"product"},n.a.createElement("div",{className:"produto-container"},n.a.createElement("span",{className:"produto-titulo"},r),n.a.createElement("div",{className:"produto-thumb-container"},n.a.createElement("img",{className:"produto-thumb",src:o,alt:r})),i&&n.a.createElement("div",{className:"produto-frete-gratis-container"},n.a.createElement("i",{"data-testid":"free-shipping",className:"produto-frete-gratis fas fa-shipping-fast"})),n.a.createElement("span",{className:"produto-pre\xe7o"},"R$ ".concat(c)),n.a.createElement("button",{className:"produto-bot\xe3o-add",type:"button","data-testid":"product-add-to-cart",onClick:function(e){return u(e,a)}},"Adicionar ao Carrinho"),n.a.createElement(d.b,{to:"/produto/".concat(t),onClick:function(){return s(a)},"data-testid":"product-detail-link"},"Ver Detalhes")))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.props.produtos;return n.a.createElement("ul",{className:"produto-lista"},a.map((function(a){return e.renderProduto(a)})))}}]),t}(n.a.Component)),Q=(t(49),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"d-flex justify-content-center p-5"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"})))}}]),t}(r.Component)),B=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).executaBusca=Object(D.a)(T.a.mark((function a(){var t,r,n,o;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.state,r=t.categoriaId,n=t.termoBusca,e.setState({carregando:!0}),a.next=4,x(r,n);case 4:o=a.sent,e.setState({produtos:o.results,carregando:!1});case 6:case"end":return a.stop()}}),a)}))),e.atualizaTermo=function(a){var t=a.target.value;e.setState({termoBusca:t},(function(){setTimeout((function(){e.executaBusca()}),500)}))},e.atualizaCategoriaId=function(a){var t=a.target.id;e.setState({categoriaId:t},(function(){e.executaBusca()}))},e.mostrarMensagemInicial=function(){return n.a.createElement("p",{className:"principal-mensagem-inicial","data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria.")},e.mostrarProdutos=function(){var a=e.props,t=a.gestorDoCarrinho,r=a.guardaProdutoClicado,o=e.state.produtos;return n.a.createElement(z,{produtos:o,gestorDoCarrinho:t,guardaProdutoClicado:r})},e.state={categoriaId:"",termoBusca:"",produtos:[],carregando:!1},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,a=e.produtos,t=e.carregando,r=this.props.quantidadeTotal;return n.a.createElement("main",null,n.a.createElement(A,{atualizaCategoriaId:this.atualizaCategoriaId}),n.a.createElement("div",{className:"principal-container"},n.a.createElement("div",{className:"principal-topo"},n.a.createElement("input",{type:"text",className:"campo-de-busca","data-testid":"query-input",onChange:this.atualizaTermo,onFocus:function(e){e.target.placeholder=""},onBlur:function(e){e.target.placeholder="Pesquisar produtos, marcas e muito mais..."},placeholder:"Pesquisar produtos, marcas e muito mais..."}),n.a.createElement("button",{type:"button",className:"bot\xe3o-de-busca",onClick:this.executaBusca,"data-testid":"query-button"},"Buscar"),n.a.createElement("div",{className:"principal-botao-carrinho"},n.a.createElement(b,{quantidadeTotal:r}))),n.a.createElement("div",{className:"principal-produtos"},a.length?null:this.mostrarMensagemInicial(),t?n.a.createElement(Q,null):this.mostrarProdutos())))}}]),t}(r.Component),w=(t(50),t(51),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.adicionaAvaliacao,t=e.atualizarEstado;return n.a.createElement("form",{className:"avalia\xe7\xe3o-container"},n.a.createElement("h1",{className:"avalia\xe7\xe3o-titulo"},"Avalie o produto:"),n.a.createElement("div",{className:"avalia\xe7\xe3o"},n.a.createElement("span",null,"Avalia\xe7\xe3o:"),n.a.createElement("label",{htmlFor:"1",className:"form-check-label"},n.a.createElement("input",{type:"radio",id:"1",className:"avalia\xe7\xe3o-input form-check-input",name:"avaliacaoProduto",value:"1",onChange:t}),"1"),n.a.createElement("label",{htmlFor:"2",className:"form-check-label"},n.a.createElement("input",{type:"radio",id:"2",className:"avalia\xe7\xe3o-input form-check-input",name:"avaliacaoProduto",value:"2",onChange:t}),"2"),n.a.createElement("label",{htmlFor:"3",className:"form-check-label"},n.a.createElement("input",{type:"radio",id:"3",className:"avalia\xe7\xe3o-input form-check-input",name:"avaliacaoProduto",value:"3",onChange:t}),"3"),n.a.createElement("label",{htmlFor:"4",className:"form-check-label"},n.a.createElement("input",{type:"radio",id:"4",className:"avalia\xe7\xe3o-input form-check-input",name:"avaliacaoProduto",value:"4",onChange:t}),"4"),n.a.createElement("label",{htmlFor:"5",className:"form-check-label"},n.a.createElement("input",{type:"radio",id:"5",className:"avalia\xe7\xe3o-input form-check-input",name:"avaliacaoProduto",value:"5",onChange:t}),"5")),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"avalia\xe7\xe3o-comentario",className:"avalia\xe7\xe3o-comentario-label"},"Deixe seu coment\xe1rio:",n.a.createElement("textarea",{className:"avalia\xe7\xe3o-coment\xe1rio form-control",name:"avaliacaoComentario",onChange:t,"data-testid":"product-detail-evaluation"}))),n.a.createElement("button",{type:"button",className:"avalia\xe7\xe3o-bot\xe3o-enviar btn btn-primary",onClick:a},"Avaliar"))}}]),t}(r.Component)),M=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).atualizarEstado=function(a){var t=a.target,r=t.name,n=t.value;e.setState(Object(y.a)({},r,n))},e.adicionaAvaliacao=function(){var a=e.state,t={avaliacaoProduto:a.avaliacaoProduto,avaliacaoComentario:a.avaliacaoComentario};e.setState((function(e){var a=e.lista;return{lista:[].concat(Object(i.a)(a),[t])}}))},e.renderAvaliacao=function(e){var a=e.avaliacaoProduto,t=e.avaliacaoComentario;return n.a.createElement("li",null,n.a.createElement("span",{className:"avalia\xe7\xf5es-avalia\xe7\xe3o"},a),n.a.createElement("q",{className:"avalia\xe7\xf5es-comentario"},t))},e.renderListaAvalia\u00e7\u00e3o=function(a){return n.a.createElement("ul",{className:"produto-detalhado-lista-avalia\xe7\xf5es"},a.map((function(a){return e.renderAvaliacao(a)})))},e.renderSemAvalia\u00e7\u00e3o=function(){return n.a.createElement("span",{className:"produto-detalhado-sem-avalia\xe7\xf5es"},"Nenhuma avalia\xe7\xe3o foi feita ainda.")},e.state={avaliacaoProduto:"",avaliacaoComentario:"",lista:[]},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.produto,t=e.quantidadeTotal,r=e.gestorDoCarrinho,o=a.price,c=a.thumbnail,i=a.title,l=this.state.lista;return n.a.createElement("section",{className:"produto-detalhado"},n.a.createElement(C,{destino:"/",mostrarCarrinho:!0,quantidadeTotal:t}),n.a.createElement("div",{className:"produto-detalhado-container"},n.a.createElement("h1",{className:"produto-detalhado-titulo","data-testid":"product-detail-name"},i),n.a.createElement("div",{className:"produto-detalhado-thumb-container"},n.a.createElement("img",{className:"produto-detalhado-thumb",src:c,alt:i})),n.a.createElement("span",{className:"produto-detalhado-pre\xe7o"},"R$ ".concat(o)),n.a.createElement("button",{type:"button",className:"btn btn-success","data-testid":"product-detail-add-to-cart",onClick:function(){return r(a)}},"Adicionar ao Carrinho"),n.a.createElement("div",{className:"produto-detalhado-avalia\xe7\xe3o"},n.a.createElement(w,{adicionaAvaliacao:this.adicionaAvaliacao,atualizarEstado:this.atualizarEstado}),n.a.createElement("div",{className:"avalia\xe7\xf5es-container"},0===l.length?this.renderSemAvalia\u00e7\u00e3o():this.renderListaAvalia\u00e7\u00e3o(l)))))}}]),t}(r.Component),R=(t(52),t(24)),J=t.n(R),L=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("header",null,n.a.createElement("img",{className:"logo-cabe\xe7alho",src:J.a,alt:"Front-End Online Store"}),n.a.createElement("h1",{className:"titulo-cabe\xe7alho"},"Front-End Online Store"))}}]),t}(r.Component),$=(t(53),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",null,n.a.createElement(d.b,{to:{pathname:"https://github.com/tryber/sd-013-a-project-frontend-online-store/tree/main-group-2"},target:"_blank"},"Ir para o Reposit\xf3rio"))}}]),t}(r.Component)),V=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).inserirQuantidadeTotal=function(){e.setState((function(e){return{quantidadeTotal:e.carrinho.length}}))},e.verificaRepeti\u00e7\u00e3o=function(a){return e.state.carrinho.find((function(e){return e.id===a.id}))},e.addAoCarrinho=function(a,t){var r=a.target;e.verificaRepeti\u00e7\u00e3o(t)||e.setState((function(e){var a=e.carrinho;return{carrinho:[].concat(Object(i.a)(a),[t])}}),(function(){e.setState((function(e){return{quantidadeTotal:e.carrinho.length}}));var a=e.state.carrinho;localStorage.setItem("carrinho",JSON.stringify(a)),r.disabled=!0}))},e.gerenciarQuantidadeTotal=function(a){"diminuir"===a?e.setState((function(e){return{quantidadeTotal:e.quantidadeTotal-1}})):e.setState((function(e){return{quantidadeTotal:e.quantidadeTotal+1}}))},e.removerItemDoCarrinho=function(a,t){var r=e.state.carrinho.filter((function(e){return e.id!==a}));e.setState((function(e){var a=e.quantidadeTotal;return{carrinho:r,quantidadeTotal:a-t}}),(function(){localStorage.setItem("carrinho",JSON.stringify(r))}))},e.esvaziarCarrinho=function(){e.setState({carrinho:[]}),localStorage.removeItem("carrinho"),e.inserirQuantidadeTotal()},e.guardaProdutoClicado=function(a){e.setState({produtoClicado:a})},e.renderHome=function(){var a=e.state.quantidadeTotal;return n.a.createElement(B,{quantidadeTotal:a,gestorDoCarrinho:e.addAoCarrinho,guardaProdutoClicado:e.guardaProdutoClicado})},e.renderProdutoDetalhado=function(){var a=e.state,t=a.produtoClicado,r=a.quantidadeTotal;return n.a.createElement(M,{produto:t,quantidadeTotal:r,gestorDoCarrinho:e.addAoCarrinho})},JSON.parse(localStorage.getItem("carrinho"))||localStorage.setItem("carrinho",JSON.stringify([])),e.state={carrinho:JSON.parse(localStorage.getItem("carrinho")),produtoClicado:"",quantidadeTotal:0},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.inserirQuantidadeTotal()}},{key:"render",value:function(){var e=this,a=this.state.carrinho;return n.a.createElement(d.a,{basename:"/buy-please"},n.a.createElement(L,null),n.a.createElement(p.d,null,n.a.createElement(p.b,{exact:!0,path:"/",render:function(){return e.renderHome()}}),n.a.createElement(p.b,{path:"/carrinho",render:function(){return n.a.createElement(N,{gerenciarQuantidadeTotal:e.gerenciarQuantidadeTotal,removerItemDoCarrinho:e.removerItemDoCarrinho,produtos:a})}}),n.a.createElement(p.b,{path:"/checkout",render:function(){return n.a.createElement(q,{esvaziarCarrinho:e.esvaziarCarrinho,produtos:a})}}),n.a.createElement(p.b,{path:"/produto/:id",render:function(){return e.renderProdutoDetalhado()}})),n.a.createElement($,null))}}]),t}(n.a.Component);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(V,null)),document.getElementById("root"))}]),[[25,1,2]]]);
//# sourceMappingURL=main.c9ac2988.chunk.js.map