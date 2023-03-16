import React from 'react'
import Header from '../components/header'

const About = () => {
    return (
        <h1>About Page</h1>
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