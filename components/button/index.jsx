import React from 'react'
import styles from './button.module.scss'
import variables from '../../styles/variables.module.scss'

const Button = ({ children }) => {
    return (
        <button type="button" className={styles.primary} style={{color:variables.primaryColor}}>{children}</button>
    )
}

export default Button