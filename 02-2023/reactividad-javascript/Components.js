const Component = (function () {
  // Creamos el constructor del componente
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  // Agregamos lo métodos al prototipo del constructor del componente

  // Render Ui
  Constructor.prototype.render = function () {
    const $element = document.querySelector(this.el);
    if (!$element) return;
    $element.innerHTML = this.template(this.data);

    console.log(this.data);
  };

  // Actualizar el State de forma reactiva
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }

    this.render();
  };

  // Obtenemos una copia inmutable del State
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
