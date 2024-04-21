import Line from "./line";
import Para from "./para";

export default function Field() {
  const A = -0.005*10;
  const C = -2.25*10;
  const K = -2*Math.sqrt(A*C,2);
  const X = 0

  return (
    <div className="field">
      {
        <>
          <Line k={K} />
          <Para a={A} c={C} />
        </>
      }
    </div>
  );
}
