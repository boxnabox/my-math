import Line from "./line";
import Para from "./para";

export default function Field() {
  const A = -0.01*10;
  const C = -2.25*10;
  const K = -3.25*10;

  console.log(K);
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
