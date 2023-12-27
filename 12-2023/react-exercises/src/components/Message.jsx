const Message = ({ msg, bgColor }) => {
  let banner = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };

  return (
    <div style={banner}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
