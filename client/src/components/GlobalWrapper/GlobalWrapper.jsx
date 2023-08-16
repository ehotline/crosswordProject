import React, { useEffect, useRef, useState } from 'react'
import styles from './GlobalWrapper.module.css'
import { CSSTransition } from 'react-transition-group'

const GlobalWrapper = ({ children, ...props }) => {
    const [isPageLoading, setIsPageLoading] = useState(false)
    const mainNode = useRef(null)

    useEffect(() => {
        setIsPageLoading(true)
    }, [])

    return (
        <CSSTransition
            in={isPageLoading}
            timeout={100}
            nodeRef={mainNode}
            classNames={styles}
        >
            <div ref={mainNode} className={styles.container} {...props}>{children}</div>
        </CSSTransition>
    )
}

export default GlobalWrapper