import React from 'react'

function Search(props) {
    return (
        <div>
            <input style={{height: "37px",
    marginBottom: "19px"}} type="search" placeholder="Search Monster" onChange={props.find} />
        </div>
    )
}

export default Search
