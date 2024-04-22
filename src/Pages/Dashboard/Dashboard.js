import React from 'react';
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import RevenueCostChart from '../../components/charts/costrevenewChart/costrevernewChart';
import BestSelledProductChart from '../../components/charts/bestSalledProductChart/bestSellingProductChart';
import BestSelledProductChartBar from '../../components/charts/bestSalledProductChart/bestSalledProductChartBar';

import './Dashboard.css';

export default function Dashboard() {
    return (
        <>
            <PageHedder />
            <div className="container">
                <div className="column">
                    <div className="nav-bar">
                        <NavbarEdited />
                    </div>
                    <div className="dashboard-content">
                        <div className="row">
                            <div className='cost-revenew'>
                                <div className='col-5'>
                                    <RevenueCostChart className="graph-costrevanue"/>
                                </div>
                                
                            </div>
                            <div className='cost-revenew'>
                                <div className="column">
                                    <div className='graph-card'>
                                        <div className='col-6'>
                                            <BestSelledProductChart className="graph"/>
                                        </div>
                                    </div>
                                    <div className='graph-card'>
                                        <div className='col-6'>
                                            <BestSelledProductChartBar className="graph"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
