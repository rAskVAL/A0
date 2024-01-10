import { createPortal } from "react-dom";

export default function BluredCircles() {
  return createPortal(
    <>
      <div className="absolute left-32 top-1/4 h-64 w-64 rounded-full bg-zerogreen/5 blur-3xl" />
      <div className="absolute right-10 top-3/4 h-96 w-96 rounded-full bg-zerogreen/5 blur-3xl" />
    </>,
    document.body,
  );
}
