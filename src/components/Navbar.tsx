import { Layout, Row, Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RoteNames } from '../router'
import { useTypedSelector } from '../hooks/useTypedSelector'
// import { useAppDispatch } from '../hooks/useAppDispatch'
// import { AuthActionCreators } from '../store/reducers/auth/action-creators'
import { useActions } from '../hooks/useActions'

const Navbar: React.FC = () => {
    // const dispatch = useAppDispatch()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const router = useNavigate()
    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <Menu theme="dark" mode="horizontal" >
                        <div style={{color: 'white'}}>{user.username}</div>
                        <Menu.Item
                            onClick={logout}
                            key={1}
                        >
                            Выйти
                        </Menu.Item>
                    </Menu>
                    :
                    <Menu theme="dark" mode="horizontal" >
                        <Menu.Item
                            onClick={() => router(RoteNames.LOGIN)}
                            key={1}
                        >
                            Логин
                        </Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    )
}

export default Navbar