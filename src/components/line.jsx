import { useEffect } from "react";
import LineDot from "./line-dot";
import TanDot from "./tan-dot";

export default function Line(props) {
  const result = [];

  for (let x = 0; x <= 80; ++x) {
    result.push(<LineDot key={"dot-" + x} />);
  }

  result.push(<TanDot key={"x"}/>);

  useEffect(() => {
    const line = document.querySelector(".line");
    const lineDots = line.querySelectorAll(".line-dot");
    const TanDot = line.querySelector(".tan-dot");

    for (let i = 0; i < lineDots.length; i++) {
      lineDots[i].style.left = i - 1 + "px";
      lineDots[i].style.top = -(i * props.k) - 1 + "px";
    }

    // TanDot.style.left 
  }, []);

  return <div className="line">{result}</div>;
}
