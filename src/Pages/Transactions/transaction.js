import React, { useState, useEffect } from 'react';
import { Input, Table, Checkbox } from 'antd';
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import {Divider, Radio, Button, Space } from 'antd';
import TransactionModal from './transactionForm'; 
import './transaction.css';
import { useInventory } from '../../components/InventoryContext';
import { fetchTransactionData, addNewTransaction } from '../../api';


export default function TransactionsPage() {
    const [data, setData] = useState([]);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const {inventoryId, setInventoryId} = useInventory();
    const [, forceUpdate] = useState();
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
          title: 'Transaction ID',
          dataIndex: 'transactionID',
        },
        {
          title: 'Product ID',
          dataIndex: 'product',
        },
        {
            title: 'Transaction Date',
            dataIndex: 'date',
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
        },
        {
          title: 'Unit Price',
          dataIndex: 'unitPrice',
        },
        {
          title: 'Total',
          dataIndex: 'total',
        },
        {
            title: 'Buy/Sell',
            dataIndex: 'type',
        },
    ];

    const handleCheck = (e, key) => {
        const newCheckedKeys = e.target.checked
            ? [...checkedKeys, key]
            : checkedKeys.filter(checkedKey => checkedKey !== key);
        setCheckedKeys(newCheckedKeys);
    
        if (e.target.checked) {
            const selected = data.find(item => item.key === key);
            setSelectedTransaction(selected);
        } else {
            setSelectedTransaction(null);
        }
    };
    
    useEffect(() => async () => {
        try {
            console.log("Hii: "+inventoryId);
            const response = await fetchTransactionData(inventoryId);
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.log("Error fetching transaction data")
        }
    },[refreshData]);


    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleAdd = () => {
        showModal();  // Show the modal when the Add button is clicked
    };

    const handleDelete = () => {
        // Handle deleting checked transactions
        // ...
    };

    const handleUpdate = () => {
        if (checkedKeys.length === 1) {  // Ensure only one transaction is selected
            setIsModalVisible(true);
        } else {
            alert('Please select exactly one transaction to update.');
        }
    };


    const handleOk = (form) => {
        form.validateFields()
            .then(async values => {
                form.resetFields();
                
                const formattedDate = values.date ? values.date.format('YYYY-MM-DD') : null;
                const total = values.unitPrice * values.quantity;
                console.log(formattedDate);
                
                const transactionData = {
                    inventoryId: inventoryId,
                    ...values,
                    date: formattedDate,
                    total: total
                };

            
                console.log(transactionData);
                await addNewTransaction(transactionData);
                forceUpdate({});
                console.log("Transaction Sucessfull");
                setIsModalVisible(false);
                setRefreshData(prevState => !prevState);
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
                            <p className='topic'>Transactions</p>
                        </div>
                        <div className="row">
                            <div className='button-container'>
                                <Button className='transaction-btn' onClick={handleAdd}>New Transactions</Button>
                            </div>
                            <div className='data-area'>
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TransactionModal 
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                transaction={selectedTransaction}
            />
        </>
    );
}
