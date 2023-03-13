import React from 'react'

const Post = ({ item }) => {
    const { id, title, body } = item;

    return (
        <article>
            <div>
                <button>{id}</button>
                <h3>{`${title.slice(0, 25)}...`}</h3>
                <p>{`${body.slice(0, 100)}...`}</p>
            </div>
        </article>
    )
}

export default Post