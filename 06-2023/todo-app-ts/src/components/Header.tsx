import { CreateTodo } from "../components/CreateTodo";
import { TodoTitle } from "../types";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        todo
        <img src="../assets/logo_ts.png" />
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
};
