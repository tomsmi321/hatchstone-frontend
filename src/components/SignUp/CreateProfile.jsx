import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { PrimaryButton } from 'uiKit/Button'
import { TextField } from 'uiKit/userInput/TextField'
import { UploadPictureField } from 'uiKit/UploadPictureField';
import { SelectInvestorType } from 'uiKit/userInput/SelectInvestorType'
import { Formik } from 'formik'
import * as Yup from "yup"
import axios from "axios"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 36px 50px 100px 32px;
  width: 40vw;
  margin: 150px auto 0 auto;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
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
  firstName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("This field is required"),
  lastName: Yup.string()
    .required("This field is required"),
  address: Yup.string()
    .required("This field is required"),
  contactNumber: Yup.string()
    .required("This field is required"),
  investorType: Yup.string()
    .required("Please select an investor type")
})

const CreateProfilePage = () => {
  const history = useHistory()

  return (
    <Container>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          contactNumber: "",
          investorType: ""
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, {setSubmitting, setErrors, setStatus, resetForm}) => {

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {(props) => <CreateProfileForm {...props} />}
      </Formik>
    </Container>
  )
}


const CreateProfileForm = ({
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
      <Title>Please complete your profile</Title>
      <TextFieldContainer>
          <TextField 
            label="First name"
            type="text"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            touched={touched.firstName}
            error={errors.firstName}
          />
      </TextFieldContainer>
      <TextFieldContainer>
        <TextField 
          label="Last name"
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          touched={touched.lastName}
          error={errors.lastName}
        />
      </TextFieldContainer>
      <TextFieldContainer>
        <TextField 
          label="Address"
          type="text"
          name="address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address}
          touched={touched.address}
          error={errors.address}
        />
      </TextFieldContainer>
      <TextFieldContainer>
        <TextField 
          label="Contact number"
          type="text"
          name="contactNumber"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.contactNumber}
          touched={touched.contactNumber}
          error={errors.contactNumber}
        />
      </TextFieldContainer>
      <TextFieldContainer>
        <SelectInvestorType 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.investorType}
          touched={touched.investorType}
          error={errors.investorType} />
        </TextFieldContainer>
      <UploadPictureField />
      <ButtonContainer>
        <PrimaryButton type="submit" disabled={isSubmitting || (!isValid && touched !== {})}>Submit</PrimaryButton>
      </ButtonContainer>
    </Form>
  )
}

export default CreateProfilePage

