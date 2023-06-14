export default function formValidation() {
  const $form = document.querySelector(".contact-form");
  const $inputs = document.querySelectorAll(".contact-form [required]");

  // console.log($inputs);

  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "hidden");
    input.insertAdjacentElement("afterend", $span);
  });

  document.addEventListener("keyup", (event) => {
    if (event.target.matches(".contact-form [required]")) {
      let $input = event.target;
      let pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? document.getElementById($input.name).classList.add("is-active")
          : document.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern && $input.value !== "") {
        return $input.value === ""
          ? document.getElementById($input.name).classList.add("is-active")
          : document.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  // Evento del submit del Formulario
  document.addEventListener("submit", (event) => {
    // event.preventDefault();

    const $loader = document.querySelector(".contact-form-loader");
    const $response = document.querySelector(".contact-form-response");

    // Simulando una petición al servidor
    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();

      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 3000);
  });
}
