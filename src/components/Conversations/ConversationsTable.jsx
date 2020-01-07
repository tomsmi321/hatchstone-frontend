import React from 'react'
import styled from 'styled-components'
import { SearchField } from 'uiKit/userInput/TextField';
import { AccountCircle } from 'uiKit/Icon'

// fix this
const OuterContainer = styled.div`
    /* background-color: lightpink; */
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 40vw;
    height: 90vh;
    overflow: scroll;
`
const InnerContainer = styled.div`
    /* background-color: lightyellow; */
    width: 25.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 60px 2.3vw 0 12.5vw;
`

const SearchContainer = styled.div`
  /* background-color: whitesmoke; */
  width: 23.2vw;
  height: 4.22vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 17px;
`

const ConvoItemsContainer = styled.div`
    /* background-color: lightgreen; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ConvoItemContainerOuter = styled.div`
    /* background-color: lightcyan; */
    background-color: #FFFFFF;
    width: 100%;
    margin-bottom: 17px;
    padding: 8px;
`

const ConvoItemContainerInner = styled.div`
    /* background-color: darksalmon; */
    width: 100%;
    height: 79px;
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
`

const AccountCircleIcon = styled(AccountCircle).attrs({ style: { fontSize: 42 } })`
  color: rgba(0, 0, 0, 0.4);
`

const AccountCircleIconDiv = styled.div`
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: column; 
    justify-content: center;
    margin-right: 17px;
`

const ConvoContentDiv = styled.div`
    /* background-color: goldenrod; */
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`

const ConvoPartnerDiv = styled.div`
    /* background-color: blue; */
    font-size: 14px;
    font-weight: 900;
    margin-bottom: 11px;
`
const ConvoSnippetDiv = styled.div`
    /* background-color: peachpuff; */
    font-size: 12px;
    max-height: 16px;
    overflow: hidden;
`

const TimeDiv = styled.div`
    /* background-color: crimson; */
    font-size: 12px;
    color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: flex-end;
    height: max-content;
`

const ConvoItem = () => {
    return (
        <ConvoItemContainerOuter>
            <ConvoItemContainerInner>
                <AccountCircleIconDiv>
                    <AccountCircleIcon />
                </AccountCircleIconDiv>
                <ConvoContentDiv>
                    <ConvoPartnerDiv>
                        Jack Greaves
                    </ConvoPartnerDiv>
                    <ConvoSnippetDiv>
                        Good morning Lisa, how are you today? Could you please send through...
                    </ConvoSnippetDiv>
                </ConvoContentDiv>
                    <TimeDiv>
                        2:15pm
                    </TimeDiv>
            </ConvoItemContainerInner>
        </ConvoItemContainerOuter>
    )
}

const ConversationsTable = () => {
    return (
        <OuterContainer>
            <InnerContainer>
                <SearchContainer>
                    <SearchField placeholder="Search your coversations" />
                </SearchContainer>
                <ConvoItemsContainer>
                    <ConvoItem />
                    <ConvoItem />
                </ConvoItemsContainer>
            </InnerContainer>
        </OuterContainer>
    )
}

export default ConversationsTable;