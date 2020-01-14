import React, { useState } from 'react'

const PersonItem = ({person}) => {
    return (
        <div>{person}</div>
    )
}

const FilteredPage = () => {
    const [searchState, setSearchState] = useState('');

    const people = ['alice', 'bob', 'oscar', 'harry', 'emma', 'john', 'tim', 'tom', 'alley']; 

    const handleSearchChange = (e) => {
        setSearchState(e.target.value);
        console.log(searchState);
    }

    const filteredPeople = people.filter(person => {
        return person.indexOf(searchState) !== -1;
      });


    return (
        <>
            <input 
                label="search name"
                icon="search"
                onChange={handleSearchChange}
            />
            {   
                
                filteredPeople.map((person, i) => {
                    return <PersonItem index={i} person={person}/>
                })
            }
        </>
    )
}


export default FilteredPage;