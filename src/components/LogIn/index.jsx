import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { PrimaryLink } from '../../uiKit/Link'
import { PrimaryButton } from '../../uiKit/Button'
import { TextField } from '../../uiKit/userInput/TextField'
import { Formik } from "formik"
import * as Yup from "yup"
// import axios from "axios"
import Error from "./Error"

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 70px 50px 100px 50px;
  width: 40vw;
  margin: 150px auto 0 auto;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

const NoAccountText = styled.div`
  margin-right: 5px;
`

const SignUpPrompt = styled.div`
  display: flex;
  flex-direction: row;
`

const TextFieldContainer = styled.div`
  margin: 16px 0;
  width: 100%;
`

const ButtonContainer = styled.div`
  margin: 28px 0px;
`

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be an email address")
    .max(255, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(255, "Too Long!")
    .required("Required")
})

const LogInPage = () => {

  const history = useHistory()
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}

      validationSchema={ValidationSchema}
      
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
      }) => (
        <FormContainer>

          <TextFieldContainer>
            <TextField 
            labelValue="Email"
            type="text"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={touched.email && errors.email ? "has-error" : null}
            />
            <Error touched={touched.email} message={errors.email} />
          </TextFieldContainer>

          <TextFieldContainer>
            <TextField 
            labelValue="Password" 
            type="text"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={touched.password && errors.password ? "has-error" : null}
            />
            <Error touched={touched.password} message={errors.password} />
          </TextFieldContainer>
          
          <ButtonContainer>
            <PrimaryButton type="submit" disabled={isSubmitting}>Login</PrimaryButton>
          </ButtonContainer>

          <SignUpPrompt>
            <NoAccountText>No account?</NoAccountText>
            <PrimaryLink onClick={() => history.push("/sign-up")}>
              Create account
            </PrimaryLink>

          </SignUpPrompt>
        </FormContainer>
      )}
    </Formik>
  );
}

export default LogInPage