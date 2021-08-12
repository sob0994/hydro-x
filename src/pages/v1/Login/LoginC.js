import { useEffect, useState } from "react";

const LoginC = () => {
  // initial State
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ init: true });

  // Function to Validate Date
  const validate = (data) => {
    let err = {};
    if(data.username.length<2){
        err.username='Minimal 2 karakter'
    }
    if (data.username === "") {
      err.username = "Username wajib diisi";
    }
    if (data.password === "") {
      err.password = "Password wajib diisi";
    }
    return err;
  };

  //   Handle Change Input
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  // on CLick Login Btn
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      const error = validate(data);
      setIsError(error);
      setLoading(false);
    }, 500);
  };

  // if no Error run login code
  useEffect(() => {
    if (Object.keys(isError).length === 0) {
      console.log("No Error");
    }
  }, [isError]);

  //   Return
  return { isLoading, isError, data, handleLogin, handleChange };
};

export default LoginC;
