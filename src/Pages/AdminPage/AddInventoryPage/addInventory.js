import React, { useState, useEffect } from 'react';
import AdminNavBar from '../../../components/admin-components/admin-nav/admin-navbar'
import AdminPageHedder from '../../../components/admin-components/admin-hedder/adminHedder';
import { MapContainer, TileLayer, Marker, useMapEvents, useMapEvent } from 'react-leaflet';
import { Input, Form, InputNumber, Select, Button,message} from 'antd';
import L from 'leaflet';
import './addInventory.css';
import { useInventory } from '../../../components/InventoryContext';
import { addNewInventory } from '../../../api';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const LocationPicker = ({ setLocation, form }) => {
    const map = useMapEvents({
        click: (e) => {
            const newLocation = e.latlng;
            setLocation(newLocation);
        },
    });
    return null; 
};


export default function AddInventory() {
    const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });
    const [form] = Form.useForm();
    const {adminId} = useInventory();

    const onFinish = async (values) => {
        console.log("Hello")
        delete values.locationPos;
        const inventoryData ={
            admin_id:adminId,
            ...values,
            longitude:location.lng,
            latitude:location.lat
        }
        console.log(inventoryData);
        try {
            const res=await addNewInventory(inventoryData);
            console.log(res.status);
            if(res.status === 200){
                message.success("Inventory Sucessfully Added")
            }
        } catch (error) {
            message.error("Error Adding User Please Check the Values!")
            console.log("Could not create a Inventory!");
        }
        
    };


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
                            <div className='form-area'>
                                <h2>Add New Inventory</h2>
                                <div className="form-map-container"> 
                                    <Form 
                                        name="addInventory" 
                                        layout="vertical" 
                                        onFinish={onFinish}
                                        className="left-column"
                                     
                                    >
                                        <div className='form-content'>

                                        
                                            <div className='left-column'>
                                                <Form.Item 
                                                    name="inventoryId" 
                                                    label="Inventory ID" 
                                                    rules={[{ required: true, message: 'Please input the quantity!' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item 
                                                    name="telNo" 
                                                    label="Contact No" 
                                                    rules={[{ required: true, message: 'Please input the quantity!' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item 
                                                    name="email" 
                                                    label="Email" 
                                                    rules={[{ required: true, message: 'Please input the quantity!' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item 
                                                    name="address" 
                                                    label="Official Address" 
                                                    rules={[{ required: true, message: 'Please input the quantity!' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item 
                                                    name="noOfEmployee" 
                                                    label="No of Employees" 
                                                    rules={[{ required: true, message: 'Please input the quantity!' }]}
                                                >
                                                    <InputNumber min={1} />
                                                </Form.Item>
                                                <Form.Item 
                                                    name="maxStockCap" 
                                                    label="Maximum Stock Capacity" 
                                                    rules={[{ required: true, message: 'Please input the quantity!' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item 
                                                    name="availableStockQuantity" 
                                                    label="Available Stock Quantity" 
                                                    rules={[{ required: true, message: 'Please input the quantity!' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </div>
                                        
                                            <div className="right-column"> 
                                                <Form.Item 
                                                    name="userName" 
                                                    label="User Name" 
                                                    rules={[{ required: true, message: 'Please input the quantity!' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item 
                                                    name="password" 
                                                    label="Password" 
                                                    rules={[{ required: true, message: 'Please input the quantity!' }]}
                                                >
                                                    <Input.Password placeholder="Password"/>
                                                </Form.Item>
                                                <Form.Item 
                                                    name="locationPos" 
                                                    label="Location" 
                                                    rules={[{ required: false, message: 'Please select a location!' }]}
                                                >
                                                    <MapContainer 
                                                            center={[6.079635106310293, 80.19188949389012]} 
                                                            zoom={13} 
                                                            style={{ height: '300px', width: '100%' }}
                                                        >
                                                            <TileLayer
                                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                            />
                                                            {location && <Marker position={location} />}
                                                            <LocationPicker setLocation={setLocation}/>
                                                    </MapContainer>
                                                </Form.Item>

                                                <Form.Item className="submit-button">
                                                    <Button type="primary" htmlType="submit">
                                                        Add Inventory
                                                    </Button>
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
