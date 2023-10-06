import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  /*   test("debe de hacer match con el snapshot", () => {
    const title = "Hola, Soy Goku";
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  }); */

  test("debe de mostrar el título en un h1", () => {
    const title = "Hola, Soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    // expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toContain(title);

    // Procedimiento no recomendado según documentación
    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);
  });

  test("debe de mostrar el subtítulo enviado por props", () => {
    const title = "Hola, Soy Goku";
    const subtitle = "Soy un subtítulo";

    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
