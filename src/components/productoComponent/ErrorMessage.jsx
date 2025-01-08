const ErrorMessage = ({ message }) => {
  return (
    <>
      {message.length > 0 ? (
        <p className="text-ic-blackorange text-center">{message}</p>
      ) : null}
    </>
  );
};

export default ErrorMessage;
