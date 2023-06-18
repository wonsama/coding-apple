import "./App.css";

import { useState } from "react";

function App() {
  let myStyle = {
    color: "red",
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "맑은 고딕",
  };
  let [title, setTitle] = useState(["제목 A", "제목 B", "제목 C"]);
  let [content, setContent] = useState(["내용 1", "내용 2", "내용 3"]);
  let [count, setCount] = useState([0, 0, 0]);

  function handleClick(index) {
    console.log("clicked", this);
    let copyed = [...count];
    copyed[index] = copyed[index] + 1;
    // setCount(copyed);
    console.log(copyed);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={myStyle}>{title}</h4>
      </div>
      <div className="list">
        <h3>
          {title[0]}{" "}
          <span onClick={handleClick} idx={1}>
            👍
          </span>
          {count[0]}
        </h3>
        <p>{content[0]}</p>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>{content[1]}</p>
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>{content[2]}</p>
      </div>
    </div>
  );
}

export default App;
