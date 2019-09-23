import React from "react";
import Btn from "../btn";
import { Link } from "react-router-dom";

function OneProcessor({ item, ShoppingСart }) {
  return (
    <div className="oneProcessor">
      <Link
        to={{
          pathname: "/PageItem/pageItemContainer/" + item.id,
          state: {
            //itemLink: item
          }
        }}
      >
        {" "}
        <div className="img-div-oneProcessor">
          <img
            className="img-oneProcessor"
            name={item.name}
            //className={imgC}
            src={item.src}
            width="300"
            height="300"
            alt="undefined"
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
          ShoppingСart={ShoppingСart}
          className="btn btn-s-default btn-1024"
          name={item.id}
        >
          В корзину
        </Btn>
      </div>
    </div>
  );
}

export default OneProcessor;
