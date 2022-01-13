import React from 'react';
import './SearchBox.styles.css'

function SearchBox({placeholder, searchfield}){
    return (
        <div>
            <input className='search' type = 'search' placeholder={placeholder } onChange = {searchfield} />
        </div>
    )
}


export default SearchBox;