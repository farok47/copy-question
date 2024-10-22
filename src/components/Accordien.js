import React, { useState } from "react";
import data from "./Data";
import "./style.css";

function Accordien() {
  const [selected, setselected] = useState();
  const [miltuple, setmiltuple] = useState([]);
  const [enable, setenable] = useState(false);

  function handlesingleclick(id) {
    setselected(id === selected ? null : id);
  }

  function handlemultipleclick(id) {
    let copymiltuple = [...miltuple];
    let findindex = copymiltuple.indexOf(id);


    console.log(findindex);
    findindex === -1

      ? copymiltuple.push(id)
      : copymiltuple.splice(findindex, 1);
    setmiltuple(copymiltuple);
  }
  return (
    <div className="all">
      <button onClick={() => setenable(!enable)}>enable multiple</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((x) => (
            <div
              onClick={
                enable
                  ? () => handlemultipleclick(x.id)
                  : () => handlesingleclick(x.id)
              }
              className="item"
            >
              <div className="tittle">
                <h3>{x.question}</h3>
                <p style={{ color: "white" }}>+</p>
              </div>
              <div className="answer">
                {selected === x.id || miltuple.indexOf(x.id) === -1 ? (
                  <h3>{x.answer}</h3>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <h3>data not found</h3>
        )}
      </div>
    </div>
  );
}

export default Accordien;
