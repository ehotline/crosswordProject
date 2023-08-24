import React, { useContext, useEffect, useRef, useState } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import styles from './Auth.module.css'
import Button from '../../components/Button/Button'
import { AuthContext } from '../../contexts/AuthContext'
import ComponentWrapper from '../../components/ComponentWrapper/ComponentWrapper'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import UserService from '../../services/UserService'
import { useNavigate } from 'react-router-dom'
import { ROUTE_CROSSWORDS } from '../../routes'
import { observer } from 'mobx-react-lite'

const Auth = observer(() => {
    const { Context } = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordDouble, setPasswordDouble] = useState("")
    const [email, setEmail] = useState("")
    const nodeRef = useRef(null)
    const navigate = useNavigate()

    const onButtonClick = async (e) => {
        e.preventDefault()
        try {
            let user;
            if (isLogin) {
                user = await UserService.login(username, password)
                console.log(user);
            } else {
                if (password !== passwordDouble) {
                    alert("Пароли не совпадают!")
                    return
                }
                user = await UserService.register(username, email, password)
            }
            if (user != null) {
                console.log(user)
                Context.setIsAuth(true)
                Context.setUser(user)
                navigate(ROUTE_CROSSWORDS)
            }
        } catch (e) {
            alert(e.response.data.Message)
        }
    }

    useEffect(() => {
        if (Context.isAuth) {
            navigate(-1)
        }
    }, [])

    return (
        <ComponentWrapper>
            <SwitchTransition mode='out-in'>
                <CSSTransition
                    key={isLogin}
                    classNames={styles}
                    timeout={100}
                    nodeRef={nodeRef}
                >
                    <div ref={nodeRef} className={styles.main}>
                        <form className={styles.form}>
                            <h1>
                                {isLogin ? "Вход" : "Регистрация"}
                            </h1>
                            <TextInput value={username} onChange={e => setUsername(e.target.value)} placeholder="Логин" />
                            {!isLogin && <TextInput value={email} onChange={e => setEmail(e.target.value)} placeholder="Электронная почта" />}
                            <TextInput value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" type="password" />
                            {!isLogin && <TextInput value={passwordDouble} onChange={e => setPasswordDouble(e.target.value)} placeholder="Повторите пароль" type="password" />}
                            <div className={styles.switchModes} onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? "Нет аккаунта? Зарегистрируйся!" : "Есть аккаунт? Войди!"}
                            </div>
                            <Button onClick={e => onButtonClick(e)}>
                                {isLogin ? "Войти" : "Зарегистрироваться"}
                            </Button>
                        </form>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </ComponentWrapper>
    )
})

export default Auth