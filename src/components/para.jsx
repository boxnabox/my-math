import { useEffect } from "react";
import ParaDot from "./para-dot";

export default function Para(props) {
  const result = [];

  for (let x = 0; x <= 50; ++x) {
    result.push(<ParaDot key={"dot-" + x} />);
  }

  useEffect(() => {
    const Para = document.querySelector(".para");
    const ParaDots = Para.querySelectorAll(".para-dot");

    for (let i = 0; i < ParaDots.length; i++) {
      ParaDots[i].style.left = i - 1 + "px";
      ParaDots[i].style.top = -(props.a * Math.pow(i, 2) + props.c) - 1 + "px";
    }
  }, []);

  return <div className="para">{result}</div>;
}
