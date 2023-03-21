import { useState } from "react";

const getInitialLikes = () => {
  console.log("getInitialLikes");
  return 23;
};

const Likes = () => {
  console.log("Render Likes");
  const [likes, setLikes] = useState(getInitialLikes);

  return <Button onClick={() => setLikes(likes + 1)}>{likes} likes</Button>;
};

const Button = ({ onClick, children }) => {
  console.log("Render Button");
  return <button onClick={onClick}>{children}</button>;
};

function App() {
  console.log("Render App");
  return <Likes />;
}

export default App;
