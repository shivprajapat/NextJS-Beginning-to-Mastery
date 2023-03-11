import React from 'react'

const User = ({ item }) => {
    const { id, name, email } = item;
    return (
        <article>
            <div>
                <button>{id}</button>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </article>
    )
}

export default User