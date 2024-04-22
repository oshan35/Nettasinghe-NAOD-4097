import React, { useState, useEffect } from 'react';
import AdminNavBar from '../../components/admin-components/admin-nav/admin-navbar';
import AdminPageHedder from '../../components/admin-components/admin-hedder/adminHedder';

import { Input, Table, Checkbox } from 'antd';
import { useInventory } from '../../components/InventoryContext';
import { inventoryDataAPI } from '../../api';

export default function Admin() {
    const [inventoryData, setinventoryData] = useState([]);
    const {adminId} = useInventory();
    const columns = [
        {
          title: 'Inventory ID',
          dataIndex: 'inventoryId',
        },
        {
          title: 'Contact No',
          dataIndex: 'telNo',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Maximum Stock Capacity',
            dataIndex:'maxStockCap',
        },
        {
            title: 'Available Stock',
            dataIndex:'availableStockQuantity'
        },
        {
            title: 'Employee Count',
            dataIndex:'noOfEmployee'
        }
    ];
 
    useEffect(() => {
        const fetchInventoryData = async () => {
            try {
                const response = await inventoryDataAPI(adminId);
                if(response.status === 200){
                    setinventoryData(response.data);
                }
            } catch (error) {
                console.log("Error fetching inventory Data");
            }
        }

        fetchInventoryData();
    },[]);

    return (
        <>
            <AdminPageHedder />
            <div className="container">
                <div className="column">
                    <div className="nav-bar">
                        <AdminNavBar />
                    </div>
                    <div className="dashboard-content">
                        <div className="row">
                            <div className='data-area'>
                                    <Table columns={columns} dataSource={inventoryData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
