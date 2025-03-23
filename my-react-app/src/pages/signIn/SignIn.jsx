import React from 'react'
import Form from '../../containers/form/Form'
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import { BUTTON_TYPES } from "../../helpers/buttonsTypes";
import { FIELD_TYPES } from '../../helpers/fieldTypes';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const postURL = `${import.meta.env.VITE_DATABASE_URL}/user/login`;

  const onSubmit = async (e) => {
    e.preventDefault();
    const logs = {
      email: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch(postURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logs),
      });
      if(!response.ok) {
        throw new Error("Identifiants incorrects");
      }

      const data = await response.json();
      localStorage.setItem("token", data.body.token);
      navigate("/user");
    } catch (error) {
      console.error("Erreur de connexion :", error.message);
    };
    
  };
  
  return (
    <main className='main bg-dark'>
      <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h2>Sign In</h2>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Field label="Username" id="username" name="username" className="input-wrapper" required/>
        <Field type={FIELD_TYPES.INPUT_PASSWORD} label="Password" id="password" name="password" className="input-wrapper" required/>
        <Field type={FIELD_TYPES.INPUT_CHECKBOX} label="Remember me" id="remember-me" name="remember-me" className="input-remember"/>
        <Button type={BUTTON_TYPES.SUBMIT} className="sign-in-button" children="Sign In"/>
      </Form>
      </section>
    </main>
  );
};

export default SignIn