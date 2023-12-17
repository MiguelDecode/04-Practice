import { useState } from "react";

const initialProduct = {
  title: "Título",
  description: "Descripción",
  image: {
    small: "",
    medium: "",
    big: "",
  },
};

function ProductApp() {
  const [product, setProduct] = useState(initialProduct);

  const updateProduct = (key, value) => {
    setProduct({
      ...product,
      [key]: value,
    });
  };

  return (
    <>
      <h2>ProductApp</h2>
      <button onClick={() => updateProduct("title", "Nuevo Título")}>
        Update Title
      </button>

      <button
        onClick={() =>
          updateProduct("description", "Nueva descripción añadida")
        }
      >
        Update Description
      </button>

      <h3>
        {product.title} - {product.description}
      </h3>

      <img src={product.image?.medium} alt="Product image" />

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </>
  );
}

export default ProductApp;
