import "./myCss.css";
import image0 from "./assets/rey_atanagildo.png";
import image1 from "./assets/rey_leogivildo.png";
import image2 from "./assets/rey_sisebuto.png";
import stranger from "./assets/rey_incognito.png";

function App() {
  let names = ["Atanagildo", "Leogivildo", "Sisebuto"];

  const handleImage = (event) => {
    if (event.target.src.includes(stranger))
      event.target.style.visibility = "hidden";

    event.target.src = stranger;

    event.target.parentNode.style.backgroundColor = "unset";
  };

  const handleName = (event) => {
    if (event.target.innerHTML == "Visto") {
      event.target.style.visibility = "hidden";
    }

    event.target.innerHTML = "Visto";
  };

  return (
    <div className="container">
      <div className="box">
        <img src={image0} onClick={handleImage} />
        <p className="name" onClick={handleName}>
          {names[0]}
        </p>
      </div>

      <div className="box">
        <img src={image1} onClick={handleImage} />
        <p className="name" onClick={handleName}>
          {names[1]}
        </p>
      </div>

      <div className="box">
        <img src={image2} onClick={handleImage} />
        <p className="name" onClick={handleName}>
          {names[2]}
        </p>
      </div>
    </div>
  );
}

export default App;
