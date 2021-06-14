import React from 'react'

export default function SearchBar(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="mb-3">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={props.handleChange} className="form-control">
                </input>
            </form>
        </div>
    )
}


