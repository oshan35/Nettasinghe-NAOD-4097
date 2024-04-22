import React, { useState, useEffect } from 'react';
import { Input, Table, Checkbox,Typography } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import { Button, Space } from 'antd';
import ProductModal from './addProductModel';
import { useInventory } from '../../components/InventoryContext';
import { fetchProductDetails, addNewProductApi,updateProductAPI, deleteProduct} from '../../api';

const dummyData = [
    { productId: 'P1000', productName: 'Monitor', unitPrice: 400.54, description: 'This is a description for product P1000.'},
    {productId: 'P1001', productName: 'USB Cable', unitPrice: 224.66, description: 'This is a description for product P1001.'},
    {productId: 'P1002', productName: 'Mouse', unitPrice: 770.52, description: 'This is a description for product P1002.'},
    {productId: 'P1003', productName: 'Mouse', unitPrice: 307.72, description: 'This is a description for product P1003.'},
    // {key: 4, productId: 'P1004', productName: 'Mouse', unitPrice: 846.28, description: 'This is a description for product P1004.'},
    // {key: 5, productId: 'P1005', productName: 'Mouse', unitPrice: 748.69, description: 'This is a description for product P1005.'},
    // {key: 6, productId: 'P1006', productName: 'Keyboard', unitPrice: 245.07, description: 'This is a description for product P1006.'},
    // {key: 7, productId: 'P1007', productName: 'Monitor', unitPrice: 255.47, description: 'This is a description for product P1007.'},
    // {key: 8, productId: 'P1008', productName: 'Tablet', unitPrice: 636.00, description: 'This is a description for product P1008.'},
    // {key: 9, productId: 'P1009', productName: 'Mouse', unitPrice: 444.70, description: 'This is a description for product P1009.'},
];


export default function ProductsPage() {
    const [data, setData] = useState([]);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const {inventoryId} = useInventory();
    const [mode, setMode] = useState('add');
    const [refreshData, setRefreshData] = useState(false);



    const columns = [
        {
            title: '',
            dataIndex: 'checkbox',
            render: (_, record) => (
                <Checkbox
                    checked={checkedKeys.includes(record.key)}
                    onChange={(e) => handleCheck(e, record.key)}
                />
            ),
            width: '5%',
        },
        {
          title: 'Product ID',
          dataIndex: 'productId',
        },
        {
          title: 'Product Name',
          dataIndex: 'productName',
        },
        {
          title: 'Unit Price',
          dataIndex: 'unitPrice',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        }
    ];



    const handleCheck = (e, key) => {
        console.log(checkedKeys);
        console.log(e.target);
        console.log(key);
        const newCheckedKeys = e.target.checked
            ? [key]
            : checkedKeys.filter(checkedKey => checkedKey !== key);
        setCheckedKeys(newCheckedKeys);
    
        if (e.target.checked) {
            const selected = data.find(item => item.key === key);
            console.log("product before: ",selected);
            setSelectedProduct(selected);
            console.log("Selected Product",selectedProduct);
        } else {
            setSelectedProduct(null);
        }
    };

    useEffect(() => {
        console.log("Updated selectedProduct:", selectedProduct);
    }, [selectedProduct]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(inventoryId);
                const response = await fetchProductDetails(inventoryId);
                const dataWithKeys = response.data.map((item, index) => ({
                    ...item,
                    key: index 
                }));
                console.log(dataWithKeys);
                setData(dataWithKeys);
            } catch (error) {
                console.log("Error fetching transaction data");
            }
        };
    
        fetchData();
    }, [refreshData]);
    

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleAdd = () => {
        setSelectedProduct([]);
        setMode('add');
        showModal(); 
  
    };

    const handleDelete = async () => {
        if (checkedKeys.length === 1) {
            console.log(selectedProduct.productId);
            const res= await deleteProduct(selectedProduct.productId);
            if(res.status == 200){
                setRefreshData(prevState => !prevState);
            }
        } else {
            alert('Please select exactly one transaction to Delete.');
        }
      
    };

    const handleUpdate = () => {
        if (checkedKeys.length === 1) {
            setMode('update');
            setIsModalVisible(true);
        } else {
            alert('Please select exactly one transaction to update.');
        }
     
    };

    const handleOk = async (form) => {
        form.validateFields()
            .then(async values => {
                form.resetFields();
                console.log("Values: "+values);
                const productId = values.productId;
                const productData = {
                    inventoryId: inventoryId,
                    ...values
                };
    
                if (mode === 'add') {
                    try {
                        console.log(productData);
                        await addNewProductApi(productData);
                        console.log('Product added successfully');
                    } catch (error) {
                        console.error('Error adding product', error);
                    }
                } else if (mode === 'update') {
                    try {
                        console.log("Test");
                        console.log("Updet api",productId);
                        await updateProductAPI(productId,productData); 
                        console.log('Product updated successfully');
                    } catch (error) {
                        console.error('Error updating product', error);
                    }
                }
                setRefreshData(prevState => !prevState);
                setIsModalVisible(false);
            })
            .catch(info => {
                console.log('Validation Failed:', info);
            });
    };
    
    return (
        <>
            <PageHedder />
            <div className="container">
                <div className="column">
                    <div className="nav-bar">
                        <NavbarEdited />
                    </div>
                    <div className="transactions-content">
                        <div className="instructions">
                                <p className='topic'>Available Products</p>
                        </div>
                        <div className="row">
                            <div className='button-container'>
                                <Button className='transaction-btn' onClick={handleAdd}>New Product</Button>
                                <Button type='primary' className='transaction-btn' id="delete" onClick={handleDelete}>Delete Product</Button>
                                <Button className='transaction-btn' onClick={handleUpdate}>Update Product</Button>
                            </div>
                            <div className='data-area'>
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal 
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                selectedProduct={selectedProduct}
                isUpdateMode={mode == 'update'}
            />

        </>
    );
}
