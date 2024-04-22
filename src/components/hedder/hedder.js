import React from 'react'
import {LogoutOutlined} from '@ant-design/icons';
import { useInventory } from '../InventoryContext';
import './hedder.css';

const PageHedder = () => {
    const {logout} = useInventory();

    return(
        <>
            <div className='hedder'>
                <div className='nav-icon'>
                    <svg className='hedder-icon'>
                        <path d="M26 10H6" stroke="#605DEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 16H6" stroke="#605DEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 22H6" stroke="#605DEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='name'>
                    <span className='company-name'>InventoSync</span>
                </div>
                <div className='logout-container'>
                    <button className='logout-button' onClick={logout}><LogoutOutlined /> Logout</button>
                </div>
            </div>
        </>
    );
}

export default PageHedder;