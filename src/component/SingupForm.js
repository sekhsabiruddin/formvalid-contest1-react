import React, { useState } from "react";
const initialValues = {
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SingupForm() {
  //   const [name, setName] = useState();
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();
  //   const [conpassword, setConPassword] = useState();
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [valid, setValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function validateForm(e) {
    e.preventDefault();
    if (values.fullname.length === 0) {
      setError("Plese enter Valid name");
      setValid(false);
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      setError("Please enter a valid email example@email.com");
      setValid(false);
    } else if (
      values.password.length == 0 ||
      values.confirmPassword.length == 0
    ) {
      setError("Password and confrim password must be filled");
      setValid(false);
    } else if (values.password !== values.confirmPassword) {
      setError("Password and confirm password is mismatch");
      setValid(false);
    } else {
      setError("Form submited successfully");
      setValid(true);
    }
  }

  return (
    <div className="container">
      <form>
        <h2>Sing Up</h2>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleInputChange}
        />
        <p className={valid ? "success" : "error"}>{error}</p>
        <button type="submit" onClick={validateForm}>
          Sing Up
        </button>
      </form>
    </div>
  );
}

export default SingupForm;
