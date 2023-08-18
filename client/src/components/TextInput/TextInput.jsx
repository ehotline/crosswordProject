import React, { useEffect, useRef, useState } from 'react'
import styles from './TextInput.module.css'
import { CSSTransition } from 'react-transition-group'

const TextInput = ({ state = null, ...props }) => {
    const [visible, setVisible] = useState(false)
    const nodeRef = useRef(null)

    useEffect(() => {
        setVisible(true)
    }, [])

    return (
        <CSSTransition
            in={state == null ? visible : state}
            timeout={100}
            nodeRef={nodeRef}
            classNames={styles}
            unmountOnExit
        >
            <input ref={nodeRef} className={`${styles.input} ${styles.invisible}`} {...props} />
        </CSSTransition>
    )
}

export default TextInput