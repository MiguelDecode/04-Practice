import { useState } from "react";

function Question(props) {
  const [isOpen, setIsOpen] = useState(false);

  function showInfo() {
    setIsOpen(!isOpen);
  }

  return (
    <section>
      <div className={isOpen ? "open" : "closed"}>
        <h4>{props.question.title}</h4>
        <button onClick={showInfo}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{props.question.info}</p>}
    </section>
  );
}

export default Question;
