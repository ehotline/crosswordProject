import React, { useContext, useEffect, useRef, useState } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import styles from './Auth.module.css'
import Button from '../../components/Button/Button'
import { AuthContext } from '../../contexts/AuthContext'
import ComponentWrapper from '../../components/ComponentWrapper/ComponentWrapper'
import { CSSTransition } from 'react-transition-group'

const Auth = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true)
    const nodeRef = useRef(null)

    return (
        <ComponentWrapper>
            <div className={styles.main}>
                <form className={styles.form}>
                    <h1>
                        {
                            isLogin
                                ?
                                "Вход"
                                :
                                "Регистрация"
                        }
                    </h1>
                    <TextInput placeholder="Логин" />
                    <TextInput placeholder="Пароль" type="password" />
                    <TextInput placeholder="Повторите пароль" type="password" state={!isLogin} />
                    <div className={styles.switchModes} onClick={() => setIsLogin(!isLogin)}>
                        {
                            isLogin
                                ?
                                "Нет аккаунта? Зарегистрируйся!"
                                :
                                "Есть аккаунт? Войди!"
                        }
                    </div>
                    <Button>
                        {
                            isLogin
                                ?
                                "Войти"
                                :
                                "Зарегистрироваться"
                        }
                    </Button>
                </form>
            </div>
        </ComponentWrapper>
    )
}

export default Auth