// Coloca la primera letra de una palabra en mayúsculas
const capitalize = (name) => {
  name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  return name;
};

export default capitalize;