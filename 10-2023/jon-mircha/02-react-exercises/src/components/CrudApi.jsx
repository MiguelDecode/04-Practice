import { helpHttp } from "../helpers/helpHttp";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const CrudApi = () => {
  const [database, setDatabase] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // let api = helpHttp();
  let url = "http://localhost:3000/santos";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        // console.log(res)
        if (!res.err) {
          setDatabase(res);
          setError(null);
        } else {
          setDatabase(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  // Insertar data a la base de datos
  const createData = (data) => {
    // Método no recomendado de generar un id único
    data.id = Date.now();

    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
      },
    };

    helpHttp()
      .post(url, options)
      .then((res) => {
        if (!res.err) {
          setDatabase([...database, res]);
        } else {
          setError(res);
        }
      });
  };

  // Actualizar data en la base de datos
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
      },
    };

    helpHttp()
      .put(endpoint, options)
      .then((res) => {
        if (!res.err) {
          const newData = database.map((el) => (el.id === data.id ? data : el));
          setDatabase(newData);
        } else {
          setError(res);
        }
      });
  };

  // Borrar data en la base de datos
  const deleteData = (id) => {
    let endpoint = `${url}/${id}`;

    let options = {
      headers: {
        "content-type": "application/json",
      },
    };

    helpHttp()
      .del(endpoint, options)
      .then((res) => {
        if (!res.err) {
          setDatabase(database.filter((el) => el.id !== id));
        } else {
          setError(res);
        }
      });
  };

  return (
    <>
      <h2>CRUD API</h2>

      <article className="grid">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {database && (
          <CrudTable
            data={database}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
      <hr />
    </>
  );
};
