import React, { useEffect } from 'react'
import styled from 'styled-components';
import { PrimaryButton } from 'uiKit/Button'
import { TextField } from 'uiKit/userInput/TextField'
import { UploadPictureField } from 'uiKit/UploadPictureField';

const Form = styled.form`
    /* background-color: lightpink; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`
const WrapperTextField = styled.div`
    /* background-color: lightyellow; */
    margin: 16px 0;
    width: 100%;
`

const WrapperButton = styled.div`
    /* background-color: cadetblue; */
    margin: 28px 0px;
`

const EditProfileForm = ({
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
        <WrapperTextField>
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
        </WrapperTextField>
  
        <WrapperTextField>
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
        </WrapperTextField>
        <UploadPictureField />
        <WrapperButton>
          <PrimaryButton type="submit" disabled={isSubmitting || (!isValid && touched !== {})}>Update</PrimaryButton>
        </WrapperButton>
      </Form>
    )
  }

  export default EditProfileForm;
