import { useState } from 'react'
import GetMyLocation from './GetMyLocation'
import SearchField from './SearchField'
import ResultsList from './ResultsList'


const Sidebar = ({onSubmit, myLocation, city, setCity, restaurants}) => {
    const [open, setOpen] = useState(false)

    const resetCity = () => {
		setCity(null)
		setOpen(false)
	}


    return (
        <>
            <div className="searchBox d-flex flex-row">
                <SearchField onSubmit={onSubmit} setOpen={setOpen}/>
                <GetMyLocation  myLocation={myLocation} />
            </div>
            {open && <ResultsList city={city} setCity={setCity} restaurants={restaurants} resetCity={resetCity} /> }
        </>
    )
}

export default Sidebar