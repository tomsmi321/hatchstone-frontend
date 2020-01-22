import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import EditProfileForm from './EditProfileForm'
import { LoadSpinner } from '../../uiKit/LoadSpinner'
import * as Yup from 'yup'
import axios from '../../config/axiosConfig'
import { UserContext } from '../../contexts/UserContext'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  max-width: 487px;
  margin: 150px auto 0 auto;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

const WrapperHeader = styled.div`
  font-size: 16px;
  margin-bottom: 18px;
`

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(40, 'Must not be longer than 40 characters')
    .required('This field is required'),
  lastName: Yup.string()
    .max(40, 'Must not be longer than 40 characters')
    .required('This field is required'),
})

const EditProfileAdminPage = (props) => {
  // consume context
  const { currentUserProfile, updateProfile, isLoading } = useContext(
    UserContext,
  )
  const [submitted, setSubmitted] = useState(false)
  // extract userId from route params, this is more performant than from context
  const userId = props.match.params.id

  console.log('submitted status', submitted)
  console.log('currentUserProfile context', currentUserProfile)
  console.log('in render', isLoading)
  return (
    <Wrapper>
      <WrapperHeader>Edit Profile</WrapperHeader>
      {!isLoading ? (
        <Formik
          initialValues={{
            firstName: currentUserProfile.firstName,
            lastName: currentUserProfile.lastName,
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            updateProfile(
              userId,
              values.firstName,
              values.lastName,
              values.profileImage,
            )
            resetForm()
            setSubmitted(!submitted)
            alert('Profile successfully updated')
            // Formik was not passing in the new state so manual reload here to display the updated details
            window.location.reload()
          }}
        >
          {(props) => <EditProfileForm {...props} />}
        </Formik>
      ) : (
        <LoadSpinner />
      )}
    </Wrapper>
  )
}

export default EditProfileAdminPage
