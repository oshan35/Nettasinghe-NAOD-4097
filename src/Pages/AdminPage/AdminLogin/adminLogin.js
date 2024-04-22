import React, { useState } from 'react';
import { Form, Input, Button, Typography,message} from 'antd';
import './adminLogin.css';
import { useInventory } from '../../../components/InventoryContext';
import {fetchAdminLogin} from '../../../api';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const AdminLogin = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const {adminId, setAdminId} = useInventory();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    try {
        
        // API request to the backend
        const response = await fetchAdminLogin(values);
        console.log(response);
        
        // Handle response accordingly
        if (response.status === 200) {
            setAdminId(response.data);
            message.success('Login successful!');
            navigate('/admin');
        } else {
            message.error('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('An error occurred during the login process:', error);
        message.error('An error occurred. Please try again later.');
    }
};

  return (
    <div className="login-container">
      <Title level={2}>Admin Login</Title>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="adminUserName"
          label="Username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="adminPassword"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminLogin;
