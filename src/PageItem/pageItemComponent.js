import React from "react";
//import ProcessorDiv from './processorDiv';
import Btn from "./../btn";
//import processor from "./processor";
// import PageItemContainer from "./pageItemContainer";
//import "./item.css";
//import {
// shoppingСart,
//shoppingСartLength
//} from "../ProcessorDiv/duck/actions/actions";

function s() {
  /*
  fetch("http://localhost:3000/arr", {
    method: "GET"
  })
    .then(r => r.json())
    .then(res => console.log(res));
*/
}
/*
function ShoppingСart() {
  fetch("http://localhost:3000/arr", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      id: "d"
    })
  });
  //.then(r => r.json())
}
*/

function PageItemComponent({ result, ShoppingСart }) {
  //console.log(props.location.state.itemLink)
  console.log(result);
  //var {idArr} =props
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
              <Btn ShoppingСart={s} className="btn btn-s-default">
                Купить{" "}
              </Btn>
              <Btn
                ShoppingСart={ShoppingСart}
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

export default PageItemComponent;
