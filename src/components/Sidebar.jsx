import GetMyLocation from './GetMyLocation'
import SearchField from './SearchField'
import ResultsList from './ResultsList'


const Sidebar = ({onSubmit, setOpen, myLocation, city, setCity, restaurants, resetCity}) => {

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