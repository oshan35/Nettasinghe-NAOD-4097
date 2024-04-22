// TransactionModal.js
import React, { useState,useEffect , useContext} from 'react';
import { Modal, Form, Input } from 'antd';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import { FormContext } from 'antd/es/form/context';

export default function ProductUpdateModal({ isModalVisible, handleOk, handleCancel, selectedProduct, isUpdateMode }) {
    const [form] = Form.useForm();
    const [initialValues, setInitialValues] = useState({});

    // useEffect(() => {
    //     console.log("Inside: ",selectedProduct);
    //     if (selectedProduct) {

    //         setInitialValues({
    //             productId: selectedProduct.productId,
    //             productName: selectedProduct.productName,
    //             unitPrice: selectedProduct.unitPrice,
    //             description: selectedProduct.description,
    //         });
    //     } else {
    //         setInitialValues({});
    //     }
    // }, [selectedProduct, isModalVisible]);
    useEffect(() => {
        if (isUpdateMode && selectedProduct) {
            const newValues = {
                productId: selectedProduct.productId,
                productName: selectedProduct.productName,
                unitPrice: selectedProduct.unitPrice,
                description: selectedProduct.description,
            };
            form.setFieldsValue(newValues);
        } else {
            form.resetFields();
        }
    }, [selectedProduct, isUpdateMode, form]);

    return (
        <Modal
            title="New Product"
            visible={isModalVisible}
            onOk={() => handleOk(form)}
            onCancel={handleCancel}
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={initialValues}
            >
                <Form.Item
                    name="productId"
                    label="product ID"
                    rules={[{ required: true}]}
                >
                    <Input disabled={isUpdateMode}/>
                </Form.Item>

                <Form.Item
                    name="productName"
                    label="Product Name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="unitPrice"
                    label="Unit Price"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}
