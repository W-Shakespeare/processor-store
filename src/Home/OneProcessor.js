import React from "react";
import { connect } from "react-redux";
import Btn from "../btn";
import { Link } from "react-router-dom";
import { addToCart } from "./duck/actions/actions";
class OneProcessor extends React.Component {
  addToCart = () => {
    console.log("DISPATCHED");
    this.props.dispatch(addToCart(this.props.item.id));
  };

  render() {
    const { item } = this.props;
    console.log(this.props);
    return (
      <div className="oneProcessor">
        <Link
          to={{
            pathname: "/PageItem/pageItemContainer/" + item.id
          }}
        >
          <div className="img-div-oneProcessor">
            <img
              className="img-oneProcessor"
              name={item.name}
              src={item.src}
              width="300"
              height="300"
              alt="processor-box-image"
              title={item.name}
            />
            <p>{item.classs}</p>
          </div>
          <div className="oneProcessor-row">
            <div className="oneProcessor-body">
              <div className="oneProcessor-body-info">
                <div className="info">
                  <p>Тактовая частота</p>

                  <p>{item.frequency}</p>
                </div>

                <div className="info">
                  <p>Количество ядер</p>
                  <p>{item.yadro}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="oneProcessor-price">
          <p>{item.price}</p>
          <Btn
            onClick={this.addToCart}
            className="btn btn-s-default btn-1024"
            name={item.id}
          >
            В корзину
          </Btn>
        </div>
      </div>
    );
  }
}

export const OneProcessorConnected = connect(
  null,
  null
)(OneProcessor);
export default OneProcessorConnected;
