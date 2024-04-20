import Line from "./line";
import Para from "./para";

export default function Field() {
  const A = -0.05;
  const C = -15.25;
  const K = A + C;

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
