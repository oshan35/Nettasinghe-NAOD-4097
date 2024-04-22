// TransactionModal.js
import React, { useEffect } from 'react';
import { Modal, Form, Input, Select,DatePicker  } from 'antd';
import moment from 'moment';

export default function TransactionModal({ isModalVisible, handleOk, handleCancel, transaction }) {
    const [form] = Form.useForm();
    const { Option } = Select;

    useEffect(() => {
        if (transaction) {
            form.setFieldsValue({
                orderId: transaction.orderId,
                productId: transaction.productId,
                customerName: transaction.customerName,
                items: transaction.items,
                total: transaction.total
            });
        } else {
            form.resetFields();
        }
    }, [transaction, form]);
    

    return (
        <Modal
            title="New Transaction"
            visible={isModalVisible}
            onOk={() => handleOk(form)}
            onCancel={handleCancel}
        >
            <Form
                form={form}
                layout="vertical"
            >
                <Form.Item
                    name="transactionID"
                    label="Transaction ID"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="productID"
                    label="Product ID"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="date"
                    label="Transaction Date"
                    rules={[{ required: true, message: 'Please input the Transaction Date!' }]}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    name="quantity"
                    label="Quantity"
                    rules={[{ required: true, message: 'Please input the Quantity!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="unitPrice"
                    label="Unit Price"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="type"
                    label="Buy/Sell"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                <Select placeholder="Select a type">
                    <Option value="Buy">Buy</Option>
                    <Option value="Sell">Sell</Option>
                </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
}
