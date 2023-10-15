import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { useState } from "react";

const initialDatabase = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andrómeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

export const CrudApp = () => {
  const [database, setDatabase] = useState(initialDatabase);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    // Método no recomendado de generar un id
    data.id = Date.now();
    setDatabase([...database, data]);
  };

  const updateData = (data) => {
    const newData = database.map((el) => (el.id === data.id ? data : el));
    setDatabase(newData);
  };

  const deleteData = (id) => setDatabase(database.filter((el) => el.id !== id));

  return (
    <>
      <h2>CRUD App</h2>

      <article className="grid">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        <CrudTable
          data={database}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
      <hr />
    </>
  );
};
