import { useState } from "react";

const getInitialLikes = () => {
  console.log("Get Initial Likes");
  return 15;
};

const Button = ({ onClick, children }) => {
  console.log("Render Button");

  return <button onClick={onClick}>{children}</button>;
};

export const Counter = () => {
  console.log("Render likes counter");

  const [likes, setLikes] = useState(() => getInitialLikes());

  return <Button onClick={() => setLikes(likes + 1)}>{likes} likes</Button>;
};
