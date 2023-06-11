import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Button() {
  const [subscribe, setSubscribe] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          toast.success("Felicidades,ya estás suscrito");
          setSubscribe(!subscribe);
        }}
      >
        {subscribe ? "Ya estas subscrito" : "Subscribete"}
      </button>
      <ToastContainer />
    </>
  );
}

export default Button;
