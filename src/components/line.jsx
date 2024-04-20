import { useEffect } from "react";
import LineDot from "./line-dot";

export default function Line(props) {
  const result = [];

  for (let x = 0; x <= 200; ++x) {
    result.push(<LineDot key={"dot-" + x} />);
  }

  useEffect(() => {
    const line = document.querySelector(".line");
    const lineDots = line.querySelectorAll(".line-dot");

    for (let i = 0; i < lineDots.length; i++) {
      lineDots[i].style.left = i - 1 + "px";
      lineDots[i].style.top = -(i * props.k) - 1 + "px";
    }
  }, []);

  return <div className="line">{result}</div>;
}
