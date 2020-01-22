import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import FileUpload from './UploadFile'
import styled from 'styled-components'
import { PrimaryButton } from '../../uiKit/Button'
import { AuthContext } from '../../contexts/AuthContext'
import { PrimaryLink } from '../../uiKit/Link'
import { UserContext } from '../../contexts/UserContext'
import { LoadSpinner } from '../../uiKit/LoadSpinner'
import { StepA } from '../../uiKit/Stepper'
import { InfoModal } from '../../uiKit/InfoModal'

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 25px; */
  font-size: 16px;
  align-items: center;
  width: 388px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  /* margin: 25px; */
`

const Info = styled.div`
  font-size: 16px;
  align-items: center;
  /* margin: 25px; */
`

const Label = styled.div`
  font-size: 16px;
  margin-bottom: 13px;
  display: flex;
  justify-content: flex-start;
`

const ButtonWrapper = styled.div`
  margin: 15px;
`

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 60px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
  width: 40vw;
  margin: 30px auto 0 auto;
  max-width: 487px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

const UploadWrapper = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-direction: column;
  align-items: flex-start;
`

const Desc = styled.div`
  font-size: 12px;
  font-style: italic;
`

const CompanyVerificationDesc = () => {
  return (
    <i>
      {' '}
      A certified copy of an Australian Securities and Investments Commission
      extract or your most recent company statement issued by ASIC showing all
      company directors and members
    </i>
  )
}

const DirectorIdentificationDesc = () => {
  return (
    <i>
      For each Director and Beneficial Owner of the company, a certified copy of
      their Australian driver's licence (front and back) that contains a
      photograph of the licence holder and displaying current residential
      address
    </i>
  )
}

const WholeSaleInvestorCertDesc = () => {
  return (
    <i>
      An accountant certificate under section 708(8) of the Corporations Act for
      the purpose of confirming your sophisticated investor status. The
      accountant certificate must contain the name of the accountant, the
      accountant's professional accounting body membership type and membership
      number, accountant's sign-off, and the date that the certificate was
      signed. <br /> <br /> *Please note that accountant certificates are valid
      for 2 years from the date of signing.
    </i>
  )
}

const SubmitDocuments = (props) => {
  const history = useHistory()
  const { currentUserProfile, isLoading } = useContext(UserContext)
  const userId = props.match.params.id
  if (isLoading === false) {
    return (
      <PageWrapper>
        <StepA
          inputSteps={['Sign Up', 'Create Profile', 'Submit Documents']}
          stepNumber={2}
        />
        }
        <Container>
          <Title>Submit your documents</Title>

          <UploadWrapper>
            <TitleWrapper>
              <Label>Company Verification</Label>
              <Info>
                <InfoModal
                  documentType="Company Verification"
                  desc={<CompanyVerificationDesc />}
                />
              </Info>
            </TitleWrapper>
            <FileUpload userId={userId} documentId="Company Verification" />
          </UploadWrapper>

          <UploadWrapper>
            <TitleWrapper>
              <Label>Director and Beneficial Owner Identification </Label>
              <Info>
                <InfoModal
                  documentType="Director and Beneficial Owner Identification"
                  desc={<DirectorIdentificationDesc />}
                />
              </Info>
            </TitleWrapper>
            <FileUpload
              userId={userId}
              documentId="Director and Beneficial Owner Identification"
            />
          </UploadWrapper>

          <UploadWrapper>
            <TitleWrapper>
              <Label>Section 708 Wholesale Investor Certification</Label>
              <Info>
                <InfoModal
                  documentType="Section 708 Wholesale Investor Certification"
                  desc={<WholeSaleInvestorCertDesc />}
                />
              </Info>
            </TitleWrapper>
            <FileUpload
              userId={userId}
              documentId="Section 708 Wholesale Investor Certification"
            />
          </UploadWrapper>

          <ButtonWrapper>
            <PrimaryButton
              onClick={() => history.push(`/conversations/${userId}`)}
            >
              Submit
            </PrimaryButton>
          </ButtonWrapper>
          <PrimaryLink onClick={() => history.push(`/conversations/${userId}`)}>
            Skip
          </PrimaryLink>
        </Container>
      </PageWrapper>
    )
  } else return <LoadSpinner topMargin="38vh" />
}

export default SubmitDocuments
