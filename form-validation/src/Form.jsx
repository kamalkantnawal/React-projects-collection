import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const handleValidate = (e) => {
    e.preventDefault();
    if (name.length < 8) {
      setNameError("username must be 8 letters long");
    } else {
      setNameError("");
    }
    if (email.includes("@gmail")) {
      setEmailError("");
    } else {
      setEmailError("Email should have @gmail");
    }
    if (password.length > 8) {
      setPasswordError("");
    } else {
      setPasswordError("Password should be 8 letters long");
    }
    if (password !== "" && password === confirmPassword) {
      console.log(password, confirmPassword);
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Passwords didn't matched.");
    }
  };
  return (
    <div>
      <form>
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <p style={{ color: "red" }}>{nameError}</p>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: "red" }}>{emailError}</p>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={{ color: "red" }}>{passwordError}</p>
        <input
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p style={{ color: "red" }}>{confirmPasswordError}</p>
        <button className="submit-btn" type="submit" onClick={handleValidate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
