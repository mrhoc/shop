import React from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
import { useContext,useState } from 'react';
import { productContext } from '../providers/ProductProvider';
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const { author, setAuthor, users } = useContext(productContext);


    const onFinish = (values) => {
        console.log('Success:', values);

        let index = users && users.findIndex(user => user.username === values.username && user.password === values.password);
        if (index !== -1) {
            setAuthor({ ...values, id: users[index].id })
            navigate('/')
            return
        }
        else{
            setErr(true)
        }
        setAuthor(values);

    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0px auto', padding: '50px 0', minHeight: 'calc(100vh - 181px)' }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    
                    <Button htmlType="submit" className='mb-3'>
                        Submit
                    </Button>
                    { err&&<span style={{display:'block',color:'red'}} className='mb-3'>username or password is wrong</span>}
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
