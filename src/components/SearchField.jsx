import { Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'

const SearchField = ({ onSubmit, setOpen, setQuerys }) => {
    const searchRef = useRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Getting ready to find a place")

        if (!searchRef.current.value) {
            return
        }

        onSubmit(searchRef.current.value)

        console.log("The place you chose is: ", searchRef.current.value)

        //setOpen(true)
      

        searchRef.current.value = ''
    }

    console.log("our setQuery is the choosen thing " + setQuerys?.city)
	return (
        <>
            <Form onSubmit={handleFormSubmit}  className="d-flex flex-row rounded" >
                <Form.Group controlId='address'> {/*väljer själva namn. ej kopplat till db */}
                    <Autocomplete>  
                        <Form.Control
                        	//onChange={e => setSearchInput(e.target.value)}
                            size="sm"
                            type="search"
                            placeholder="Hungrig?"
                            aria-label="Search"
                            ref={searchRef}
                            required
                        />
                    </Autocomplete>    
                </Form.Group>      

                <Button 
                    type="submit" 
                    size="sm" 
                    variant="light" 
                    className="border"
                   /*  onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} */
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </Form> 
        </>
    )
}

export default SearchField
