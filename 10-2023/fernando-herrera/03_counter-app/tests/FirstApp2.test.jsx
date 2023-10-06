import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  const title = "Hola, soy Miguel Decode";
  const subtitle = "Soy un subtítulo";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Hola, soy Miguel Decode"', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe de mostrar el título en un h1", () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe de mostrar el subtítulo enviado por props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);

    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
