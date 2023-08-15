import React, { useRef, useState } from 'react'
import { CSSTransition, Transition } from 'react-transition-group'
import styles from './SecretPage.module.css'

const SecretPage = () => {
    const [loaderVisible, setLoaderVisible] = useState(false)
    const nodeRef = useRef(null)
    return (
        <div className={styles.app}>
            <button onClick={() => setLoaderVisible(!loaderVisible)}>
                {
                    loaderVisible
                        ?
                        "hide"
                        :
                        "show"
                }
            </button>
            <div className={styles.wrap}>
                <CSSTransition
                    in={loaderVisible}
                    timeout={2000}
                    nodeRef={nodeRef}
                    classNames={{
                        ...styles
                    }}>
                    <div ref={nodeRef} className={styles.circle} />
                </CSSTransition>
            </div>
        </div>
    );
}

export default SecretPage