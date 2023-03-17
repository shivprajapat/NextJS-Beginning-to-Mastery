import React from 'react'

export default function News({ data }) {
    return (
        <div>
            <h1>News : {data}</h1>
        </div>
    )
}

export async function getStaticProps(context) {
    console.log('Running getStaticProps', context.previewData)
    return {
        props: {
            data: context.preview
                ? 'List of draft articles'
                : 'List of published articles'
        }
    }
}