import { Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'

const SearchField = ({ onSubmit, setOpen }) => {
    const searchRef = useRef()
   

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Getting ready to find a place")

        if (!searchRef.current.value) {
            return
        }

        onSubmit(searchRef.current.value)
        setOpen(true)

        console.log("The place you chose is: ", searchRef.current.value)
    }

	return (
        <>
            <Form onSubmit={handleFormSubmit}  className="d-flex flex-row rounded" >
                <Autocomplete>  
                    <Form.Control
                        size="sm"
                        type="search"
                        placeholder="Hungry?"
                        aria-label="Search"
                        ref={searchRef}
                        required
                    />
                </Autocomplete>          

                <Button 
                    type="submit" 
                    size="sm" 
                    variant="light" 
                    className="border"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </Form> 
        </>
    )
}

export default SearchField
