import PropTypes from "prop-types";
// const newMessage = { message: "Hola Mundo!!", title: "Miguel Decode" };

export const FirstApp = ({ title, subtitle, name }) => {
  // console.log(props);

  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
  name: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "Miguel Decode",
  subtitle: 829,
  title: "No hay título",
};
