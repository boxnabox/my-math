import Line from "./line";
import Para from "./para";

export default function Field() {
  return (
    <div className="field">
      {
        <>
          <Line />
          <Para />
        </>
      }
    </div>
  );
}
