import React, { useContext, useEffect } from 'react';
import { UsersContext } from '../../contexts/UsersContext';
import styled from 'styled-components';
import ClientProfileTable from './ClientProfileTable'
import ClientDocsTable from './ClientDocsTable';
import { LoadSpinner } from '../../uiKit/LoadSpinner';

const Wrapper = styled.div`
    /* background-color: lightgreen; */
    margin: 60px auto 0px auto;
    width: 58vw;
    height: 54vh;
    display: flex;
`

const ClientDetailPage = (props) => {
    const { profileDetails, getProfileDetails, updateApproveStatus, isLoading } = useContext(UsersContext);

    useEffect(() => {
        const { userId } =  props.match.params;
        console.log('in useEffect profile index');
        getProfileDetails(userId);
    }, [])


    console.log('in render', isLoading);
    return (
        <>
            {!isLoading ? (
                <Wrapper> 
                    <ClientProfileTable client={profileDetails}/>
                    <ClientDocsTable client={profileDetails} updateApproveStatus={updateApproveStatus}/>
                </Wrapper>
            ) : (
                <>
                    <LoadSpinner topMargin="38vh" /> 
                </>
            )}
        </>
    )
}

export default ClientDetailPage;