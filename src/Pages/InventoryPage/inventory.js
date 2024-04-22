import React, { useState, useEffect } from 'react';
import { Input, Table ,message} from 'antd';
import './inventory.css';
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import { fetchSearchNearestInventories } from '../../api';
import { useInventory } from '../../components/InventoryContext';


const InventoryPage = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const {inventoryId, setInventoryId} = useInventory();

  const columns = [
    {
      title: 'Inventory ID',
      dataIndex: 'inventoryId',
    },
    {
      title: 'Product ID',
      dataIndex: 'productId',
    },
    {
      title: 'Location',
      dataIndex: 'address',
    },
    {
      title: 'Distance',
      dataIndex: 'distance',
    },
    {
      title: 'Available Stocks',
      dataIndex: 'quantity',
    },
  ];


  const handleSearch = async (value) => {
    try {
      console.log(value);
      const response = await fetchSearchNearestInventories(inventoryId,value);  
      console.log("Response: ",response);
      if(response.data.length > 0){
        console.log("Hello")
        setData(response.data);
        message.success("Item Found");
      }else{
        message.error("Item Not Found");
      }
      
    } catch (error) {
      message.error("Error Loading Data");
      console.error('There was an error fetching the data!', error);
    }
  };


  return (
    <div className="container">
      <PageHedder/>
      <div className="main-content">
        <NavbarEdited/>
        <div className="content-area">
          <div className="instructions">
            <p>Instructions: Use the search bar to find products by ID.</p>
          </div>
          <div className='data-area'>
            <Input.Search
                placeholder="Search Product ID"
                onSearch={handleSearch}
                enterButton
                className="search-bar"
            />
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
