import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp.js";

export const useForm = (initialForm, validateForm) => {
  const [form, setform] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    handleChange(event);

    setErrors(validateForm(form));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando Formulario");
      setLoading(true);

      helpHttp()
        .post("https://formsubmit.co/ajax/jockerwolf@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then(() => {
          setLoading(false);
          setResponse(true);
          setform(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
