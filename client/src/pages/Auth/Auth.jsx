import React, { useContext, useEffect, useRef, useState } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import styles from './Auth.module.css'
import Button from '../../components/Button/Button'
import { AuthContext } from '../../contexts/AuthContext'
import GlobalWrapper from '../../components/GlobalWrapper/GlobalWrapper'

const Auth = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true)

    return (
        <GlobalWrapper>
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
                    {
                        !isLogin
                            ?
                            <TextInput placeholder="Повторите пароль" type="password" />
                            :
                            ""
                    }
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
        </GlobalWrapper>
    )
}

export default Auth