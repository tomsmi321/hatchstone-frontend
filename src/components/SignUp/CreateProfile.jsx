import React, { useEffect, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { PrimaryButton, TertiaryButton } from 'uiKit/Button'
import { TextField } from 'uiKit/userInput/TextField'
import { SelectInvestorType } from 'uiKit/userInput/SelectInvestorType'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from '../../config/axiosConfig'
import { AuthContext } from '../../contexts/AuthContext'
import { useDropzone } from 'react-dropzone'
import { UploadPictureField } from '../../uiKit/UploadPictureField'
import { StepA } from '../../uiKit/Stepper'

const PageWrapper = styled.div`
  padding-bottom: 60px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 36px 50px 55px 32px;
  width: 40vw;
  max-width: 487px;
  margin: 60px auto 0 auto;
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
  margin: 28px 0px 0px;
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
    .min(2, 'Must be at least 2 characters')
    .required('This field is required'),
  lastName: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .required('This field is required'),
  address: Yup.string().required('This field is required'),
  contactNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required('This field is required'),
  investorType: Yup.string()
    .oneOf(['individual', 'individualTrustee', 'company', 'corporateTrustee'])
    .required('Please select an investor type'),
})

const CreateProfilePage = (props) => {
  const { currentUser, currentUserProfile, setCurrentUserProfile } = useContext(
    AuthContext,
  )
  console.log(currentUser)

  const createProfile = async (
    firstName,
    lastName,
    address,
    contactNumber,
    investorType,
    profileImage,
  ) => {
    try {
      console.log('in AuthContext createProfile function')
      const response = await axios.post('/profiles', {
        userId: currentUser._id,
        firstName,
        lastName,
        address,
        phone: contactNumber,
        investorType,
        appProgress: 0,
        approved: false,
        dateStarted: new Date(),
        profileImage: '',
      })
      console.log(response.data)
      const profile = response.data
      setCurrentUserProfile(profile)
    } catch (error) {
      console.log(error.message)
    }
  }

  const [showLoading, setShowLoading] = useState(false)

  return (
    <PageWrapper>
      <StepA
        inputSteps={['Sign Up', 'Create Profile', 'Submit Documents']}
        stepNumber={1}
      />
      <Container>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            address: '',
            contactNumber: '',
            investorType: '',
            profileImage: '',
          }}
          validationSchema={ValidationSchema}
          onSubmit={(
            values,
            { setSubmitting, setErrors, setStatus, resetForm },
          ) => {
            try {
              setSubmitting(true)
              createProfile(
                values.firstName,
                values.lastName,
                values.address,
                values.contactNumber,
                values.investorType,
                values.profileImage,
              )

              const { history } = props
              setTimeout(() => {
                console.log('Creating profile', values)
                setSubmitting(false)
                history.push(`/submit-documents/${currentUser._id}`)
              }, 500)
              // history.push(`/submit-documents/${currentUser._id}
              // `);

              setStatus({ success: true })
            } catch (error) {
              setStatus({ success: false })
              setSubmitting(false)
              setErrors({ submit: error.message })
            }
          }}
        >
          {(props) => <CreateProfileForm {...props} />}
        </Formik>
      </Container>
    </PageWrapper>
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
  validateForm,
  onDrop,
}) => {
  useEffect(() => {
    ;(() => validateForm())()
  }, [])

  // console.log(touched)
  // console.log(errors)
  // console.log(values);
  // console.log(isValid)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Please complete your profile</Title>
      <TextFieldContainer>
        <TextField
          required
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
          required
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
          required
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
          required
          label="Contact number"
          type="tel"
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
          required
          name="investorType"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.investorType}
          touched={touched.investorType}
          error={errors.investorType}
        />
      </TextFieldContainer>
      <UploadPictureField />
      <ButtonContainer>
        <PrimaryButton
          label="submit"
          name="submit"
          onChange={handleChange}
          type="submit"
          disabled={isSubmitting || (!isValid && touched !== {})}
        >
          Submit
        </PrimaryButton>
      </ButtonContainer>
    </Form>
  )
}

export default CreateProfilePage
