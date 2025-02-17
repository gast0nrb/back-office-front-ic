import {useEffect} from 'react'
const ErrorMessage = ({ message, setError }) => {

  useEffect(()=> {
    setTimeout(()=> {
     setError("")
    }, 3000)
  }, [message])

  return (
    <>
      {message.length > 0 ? (
        <p className="text-ic-blackorange text-center">{message}</p>
      ) : null}
    </>
  );
};

export default ErrorMessage;
