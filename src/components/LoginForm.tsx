import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import { rules } from '../utils/rules';
// import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useAppSelector } from '../hooks/useAppDispatch';
import { useActions } from '../hooks/useActions';


const LoginForm: React.FC = () => {
    // const dispatch = useAppDispatch()
    const {error, isLoading} = useAppSelector(state => state.auth)
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {login} = useActions() // вместо dispatch используем хук

    const submit = () => {
        // dispatch(AuthActionCreators.login(username, password))
        login(username, password)
    }

    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста введите имя пользователя!')]}
            >
                <Input 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста введите пароль!')]}
            >
                <Input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type={"password"}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm