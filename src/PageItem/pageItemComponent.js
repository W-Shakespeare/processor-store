import React from "react";
import Btn from "./../btn";
import { addToCart } from "../Home/duck/actions/actions";
import { connect } from "react-redux";

function PageItemComponent({ result, dispatch }) {
  //console.log(props.location.state.itemLink)
  return (
    <div className="paige-item-l1">
      {result.map((item, i) => {
        return (
          <div className="paige-item-l2">
            <div key={1} className="paige-item-div-p">
              <p>{item.name}</p>
            </div>
            <div key={2} className="paige-item-div-src">
              <img className="paige-item-img" src={item.src} />
            </div>
            <div key={3} className="paige-item-div-description">
              <div key={14} className="des">
                <div key={15} className="descrip-item">
                  {" "}
                  <p>Семейство процессора</p>
                  <p>{item.processorFamily}</p>
                </div>
                <div key={4} className="descrip-item">
                  {" "}
                  <p>Поколение процессора</p>
                  <p>{item.intelGeneration}</p>
                </div>
                <div key={5} className="descrip-item">
                  {" "}
                  <p>Количество ядер</p>
                  <p>{item.yadro}</p>
                </div>
                <div key={6} className="descrip-item">
                  {" "}
                  <p>Количество потоков</p>
                  <p>{item.cpuThread}</p>
                </div>
                <div key={7} className="descrip-item">
                  {" "}
                  <p>Внутренняя тактовая частота</p>
                  <p>{item.frequency}</p>
                </div>
                <div key={8} className="descrip-item">
                  {" "}
                  <p>Максимальная тактовая частота</p>
                  <p>{item.maxfrequency}</p>
                </div>
                <div key={9} className="descrip-item">
                  {" "}
                  <p>Объем кэш памяти 3 уровня</p>
                  <p>{item.level3MemoryCache}</p>
                </div>
                <div key={10} className="descrip-item">
                  {" "}
                  <p>Мощность TDP</p>
                  <p>{item.tdp}</p>{" "}
                </div>
                <div key={11} className="descrip-item">
                  {" "}
                  <p>Цена</p>
                  <p>{item.price}</p>{" "}
                </div>
                <div key={12} className="descrip-item">
                  {" "}
                  <p>Гарантия</p> <p>{item.warranty}</p>{" "}
                </div>
              </div>
            </div>
            <div key={13} className="paige-item-div-btn">
              <Btn className="btn btn-s-default">Купить </Btn>
              <Btn
                onClick={() => dispatch(addToCart(item.id))}
                className="btn btn-s-ghost"
                name={item.id}
              >
                В корзину
              </Btn>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default connect(
  null,
  null
)(PageItemComponent);
