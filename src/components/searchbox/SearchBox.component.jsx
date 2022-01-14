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

// Because of one way dataflow, we put the state of the searchBox in the app component
// 

// props and state cant move from children to parent bt parent to child

// this.handleChange = this.handleChange.bind(this)
// The above code should be placed in the constructor function
// And is used to reference the function in the class Object
