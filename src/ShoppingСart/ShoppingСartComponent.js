import React from "react";
//import Menu from "../Start/menu";
import { connect } from "react-redux";
/*
import {
  addstart,
  addresult,
  shoppingСart
} from "../ProcessorDiv/duck/actions/actions";
*/
import Btn from "./../btn";
/*
function ShoppingСartComponent() {
  return (
    <div className="shoppingСart">
      <Menu item3="Товары" item4="Контакты" item5="Корзина" />
      <button onClick={shoppingСartGet} />
      <div className="shoppingСartItem">{}</div>
    </div>
  );
}
*/

function ShoppingСartComponent({ shoppingСart, shoppingСartDelete }) {
  //console.log(this.props);
  console.log(shoppingСart);
  return (
    <div>
      {/* <div> */}
      {/* <Menu item3="Товары" item4="Контакты" item5="Корзина" /> */}
      {/* </div> */}

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
                    ShoppingСart={shoppingСartDelete}
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

/*
class ShoppingСartComponent extends React.Component {
  
  constructor(props) {
    super(props);
   // this.shoppingСartGet();

    //this.algorithm=this.algorithm.bind(this);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <Menu item3="Товары" item4="Контакты" item5="Корзина" />
        </div>

        <div className="oneProcessor-all">
          {this.props.k.shoppingСart.map((p, i) => {
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
                  <div className="oneProcessor-row">
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
                    <div className="oneProcessor-body">
                      <div className="oneProcessor-body-info">
                        <p>{p.classs}</p>

                        <div className="info">
                          <p>Внутренняя тактовая частота</p>
                          <p> </p>
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
                      ShoppingСart={this.props.shoppingСartDelete}
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
}
  /*
  shoppingСartGet = props => {
    fetch("http://localhost:3000/Shop", {
      method: "GET"
    })
      .then(r => r.json())
      .then(res => {
        this.props.shoppingСart(res);
        //this.setState(state => ({ shoppingСartGet: res }));
      });
    console.log(222222222);
    console.log(this.props);
  };

  shoppingСartDelete(event) {
    var idItem = event.currentTarget;
    var idItem = idItem.name;
    console.log(idItem);

    fetch("http://localhost:3000/Shop", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        id: idItem
      })
    });

    fetch("http://localhost:3000/Shop1", {
      method: "GET"
    })
      .then(r => r.json())
      .then(res => console.log(res));

    console.log(1111111111);
    window.location.reload();
  }
}

function mapStateToProps(state) {
  return {
    k: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    result: i => dispatch(addresult(i)),
    start: i => dispatch(addstart(i)),
    shoppingСart: i => dispatch(shoppingСart(i))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingСartComponent);
*/
export default ShoppingСartComponent;
