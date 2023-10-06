import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en el componente <CounterApp/>", () => {
  const count = 100;

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={count} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);

    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });
});
