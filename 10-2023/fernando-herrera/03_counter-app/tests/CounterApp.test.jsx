import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en el componente <CounterApp/>", () => {
  const count = 10;

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

  test("debe de incrementar con el botón +1", () => {
    render(<CounterApp value={count} />);

    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByText("11")).toBeTruthy();
  });

  test("debe de decrementar con el botón -1", () => {
    render(<CounterApp value={count} />);

    fireEvent.click(screen.getByText("-1"));

    // Ayuda a ver el componente renderizado en el estado en este punto.
    // screen.debug();

    expect(screen.getByText("9")).toBeTruthy();
  });

  test("debe de funcionar el botón de reset", () => {
    render(<CounterApp value={456} />);

    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    // fireEvent.click(screen.getByText("Reset"));
    // Improve the selector logical
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));


    expect(screen.getByText("456")).toBeTruthy();
  });
});
