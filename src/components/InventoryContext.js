
import React, { createContext, useContext, useState, useEffect } from 'react';

const InventoryContext = createContext();

export const useInventory = () => {
    return useContext(InventoryContext);
};

export const InventoryProvider = ({ children }) => {
    const initialInventoryId = sessionStorage.getItem('inventoryId') || null;
    const initialAdminId = sessionStorage.getItem('adminId') || null;

    const [inventoryId, setInventoryId] = useState(initialInventoryId);
    const [adminId, setAdminId] = useState(initialAdminId);

    useEffect(() => {
        if (inventoryId) {
            sessionStorage.setItem('inventoryId', inventoryId);
        } else {
            sessionStorage.removeItem('inventoryId');
        }
    }, [inventoryId]);

    useEffect(() => {
        if (adminId) {
            sessionStorage.setItem('adminId', adminId);
        } else {
            sessionStorage.removeItem('adminId');
        }
    }, [adminId]);


    const logout = () => {
        sessionStorage.removeItem('inventoryId');
        sessionStorage.removeItem('adminId');
        setInventoryId(null);
        setAdminId(null);
    }

    return (
        <InventoryContext.Provider value={{ inventoryId, setInventoryId, adminId, setAdminId, logout }}>
            {children}
        </InventoryContext.Provider>
    );
};
