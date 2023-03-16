import React from 'react'
import styles from './button.module.css'

const Button = ({ children }) => {
    return (
        <button type="button" className={styles.primary}>{children}</button>
    )
}

export default Button