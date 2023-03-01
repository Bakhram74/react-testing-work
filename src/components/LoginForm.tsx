import React, {useState} from 'react';
import {Button, Form} from "antd";
import {rules} from "../utils/rules";

import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const LoginForm = () => {
    const {error,isLoading} = useTypedSelector(state => state.authReducer)
    const {login} = useActions()
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
const submit = ()=>{
 login(userName,password)
}
    return (
        <Form onFinish={submit}>
            {error && <div style={{color:"red"}}>{error}</div>}
            <Form.Item
            label={'userName'}
            name={'UserName'}
            rules={[rules.required('Please enter your name')]}
            >
                <input
                    value={userName}
                    onChange={e=>setUserName(e.currentTarget.value)}
                />
            </Form.Item>
            <Form.Item
                label={'password'}
                name={'password'}
                rules={[rules.required('Please enter your password')]}
            >
                <input
                    value={password}
                    onChange={e=>setPassword(e.currentTarget.value)}
                    type={'password'}
                />
            </Form.Item>
            <Form.Item>
<Button type={'primary'} htmlType={'submit'} loading={isLoading}>
    submit
</Button>
            </Form.Item>
            </Form>
    );
};

export default LoginForm;