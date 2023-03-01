import React from 'react';
import {Layout, Menu, Row} from "antd";
import {RouteNames} from "../router/routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useHistory} from "react-router-dom";
import {useActions} from "../hooks/useActions";


const Navbar = () => {
    const router = useHistory()
    const {isAuth,user} = useTypedSelector(state => state.authReducer)
    const {loginOut} = useActions()
    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth ?
                    <Menu theme={'dark'} mode={'horizontal'} selectable={false}>
                        <div style={{color: "white"}}>
                            {user.userName}
                        </div>
                        <Menu.Item onClick={() => loginOut()} key={1}>Exit</Menu.Item>
                    </Menu>
                    :
                    <Menu theme={'dark'} selectable={false}>
                        <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>Login</Menu.Item>
                    </Menu>

                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;