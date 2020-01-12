import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { PrimaryLink } from 'uiKit/Link'
import { PrimaryButton } from 'uiKit/Button'
import { TextField } from 'uiKit/userInput/TextField'
import { Formik } from 'formik'
import * as Yup from "yup"
import axios from "axios"

const Container = styled.div`
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

const HaveAnAccountText = styled.div`
  margin-right: 5px;
`

const LogInPrompt = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`

const TextFieldContainer = styled.div`
  margin: 16px 0;
  width: 100%;
`

const ButtonContainer = styled.div`
  margin: 28px 0px;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be an email address")
    .required("This field is required"),
  password: Yup.string()
    .required("This field is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
      "Must contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Case Character"
    )
})

const SignUpPage = () => {
  
  const history = useHistory()

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // resetForm()

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {(props) => <SignUpForm {...props} />}
      </Formik>
      <PrimaryLink onClick={() => console.log('forgot password')}>
        Forgot password?
      </PrimaryLink>
      <LogInPrompt>
        <HaveAnAccountText>Already have an account?</HaveAnAccountText>
        <PrimaryLink onClick={() => history.push("/log-in")}>
          Log in
        </PrimaryLink>
      </LogInPrompt>
    </Container>
  )
}



const SignUpForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  isValid,
  validateForm
}) => {
  useEffect(() => {
    (() => validateForm())();
  }, []);

  console.log(touched)
  console.log(errors)
  console.log(values)
  console.log(isValid)
  return (
    <Form onSubmit={handleSubmit}>

      <TextFieldContainer>
        <TextField 
          label="Email"
          type="text"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          touched={touched.email}
          error={errors.email}
        />
      </TextFieldContainer>

      <TextFieldContainer>
        <TextField 
          label="Password" 
          type="text"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          touched={touched.password}
          error={errors.password}
        />
      </TextFieldContainer>
      
      <ButtonContainer>
        <PrimaryButton type="submit" disabled={isSubmitting || (!isValid && touched !== {})}>Sign up</PrimaryButton>
      </ButtonContainer>
    </Form>
  )
}


export default SignUpPage