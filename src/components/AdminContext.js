import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();



export const useAdmin = () => {

    return useContext(AdminContext);

};



export const AdminProvider = ({ children }) => {

    const [adminId,setAdminId] = useState(null);


    return (

        <AdminContext.Provider value={{adminId,setAdminId}}>

            {children}

        </AdminContext.Provider>

    );

};