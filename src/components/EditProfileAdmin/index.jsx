import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { Formik } from 'formik'
import EditProfileForm from './EditProfileForm';
import * as Yup from 'yup';
import axios from '../../config/axiosConfig';

const Wrapper = styled.div`
    /* background-color: lightskyblue; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 33px 50px 100px 50px;
    width: 40vw;
    margin: 150px auto 0 auto;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

const WrapperHeader = styled.div`
    /* background-color: lightcoral; */
    font-size: 16px;
    margin-bottom: 18px;
`

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
                .max(40, "Must not be longer than 40 characters")
                .required("This field is required"),
  lastName: Yup.string()
                .max(40, "Must not be longer than 40 characters")
                .required("This field is required")
})


const EditProfileAdminPage = () => {
  // TODO: replace this. Use either route params or context to get the current admin user
  // TODO: currently the upload profile picture button is not functional. However updateProfile function is
  // working and updates the user in the database by firstName, lastName and profileImage.
  const adminUser = {
      userId: '5e1a9f0440d2242ac92c5050',
  }
  
  const { userId } = adminUser;

  const history = useHistory()
  const updateProfile = async (userId, firstName, lastName, profileImage) => {
    try {
      const response = await axios.put(`http://localhost:5000/profiles/updateByUser/${userId}`, {
        firstName,
        lastName,
        profileImage
      })
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <WrapperHeader>Edit Profile</WrapperHeader>
      <Formik
        initialValues={{
          firstName: "",
          lastName: ""
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          updateProfile(userId, values.firstName, values.lastName, values.profileImage )
          resetForm()
        }}
      >
        {(props) => <EditProfileForm {...props} />}
      </Formik>
    </Wrapper>
  );
}



export default EditProfileAdminPage;