import Head from 'next/head'
import React from 'react'
import Header from '../components/header'

const About = () => {
    return (
        <>
            <Head>
                <title>My About page</title>
                <meta name="description" content="My About page" />
            </Head>
            <h1>About Page</h1>
        </>
    )
}

export default About
About.getLayout = function PageLayout(page) {
    return (
        <>
            <Header />
            {page}
        </>
    )
}