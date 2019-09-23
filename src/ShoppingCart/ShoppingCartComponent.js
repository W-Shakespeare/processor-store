import React from "react";
//import Menu from "../Start/menu";
import { connect } from "react-redux";
import { removeFromCart } from "../Home/duck/actions/actions";

import Btn from "../btn";

function ShoppingСartComponent({ shoppingСart, dispatch, shoppingСartDelete }) {
  //console.log(this.props);
  console.log(shoppingСart);
  return (
    <div>
      <div className="oneProcessor-all">
        {shoppingСart.map((p, i) => {
          if (p.id == 0) {
            return (
              <div className="shoppingСart-Zero">
                <div className="shoppingСart-Zero-2">
                  <p className="shoppingСart-Zero-p">{p.name}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="oneProcessor">
                <div className="img-div-oneProcessor">
                  <img
                    className="img-oneProcessor"
                    name={p.name}
                    //className={imgC}
                    src={p.src}
                    width="300"
                    height="300"
                    alt="undefined"
                    title={p.name}
                  />
                  <p>{p.classs}</p>
                </div>
                <div className="oneProcessor-row">
                  <div className="oneProcessor-body">
                    <div className="oneProcessor-body-info">
                      <div className="info">
                        <p>Тактовая частота</p>

                        <p>{p.frequency}</p>
                      </div>

                      <div className="info">
                        <p>Количество ядер</p>
                        <p>{p.yadro}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="oneProcessor-price">
                  <p>{p.price}</p>
                  <Btn
                    onClick={i => dispatch(removeFromCart(p.id))}
                    className="btn btn-s-default"
                    name={p.id}
                  >
                    Удалить из корзины
                  </Btn>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ShoppingСartComponent = connect(
  null,
  null
)(ShoppingСartComponent);
