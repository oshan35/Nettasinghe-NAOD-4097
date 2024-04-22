import React from 'react';
import InStock from "../../asserts/check.png";
import "./navbar.css";

const Navbar = () =>{
    return(
        <>
            <div className='main-navbar'>
                <div className='nav-option' href="#">

                    <p className='nav-text'>Dashboard</p>
                </div>

                <div className='nav-option' href="#">
                    <svg className='icon' viewBox="0 0 17 24">
                        <g style="mix-blend-mode:lighten" >
                            <path d="M4 5.33337H9.33333V10.6667H4V5.33337ZM12 6.66671V9.33337H28V6.66671H12ZM4 13.3334H9.33333V18.6667H4V13.3334ZM12 14.6667V17.3334H28V14.6667H12ZM4 21.3334H9.33333V26.6667H4V21.3334ZM12 22.6667V25.3334H28V22.6667H12Z" fill="white"/>
                        </g>
                    </svg>
                    <p className='nav-text'>Inventory</p>
                    
                </div>

                <div className="nav-option" href="#">
                    <svg className='icon' viewBox="0 0 17 24">
                        <g style="mix-blend-mode:screen" clip-path="url(#clip0_119_422)">
                            <path d="M16.6901 4.92188L12.356 0.328125C12.1568 0.117188 11.8867 0 11.6034 0H11.3333V6H17V5.71406C17 5.41875 16.8893 5.13281 16.6901 4.92188ZM9.91667 6.375V0H1.0625C0.473698 0 0 0.501562 0 1.125V22.875C0 23.4984 0.473698 24 1.0625 24H15.9375C16.5263 24 17 23.4984 17 22.875V7.5H10.9792C10.3948 7.5 9.91667 6.99375 9.91667 6.375ZM2.83333 3.375C2.83333 3.16781 2.99182 3 3.1875 3H6.72917C6.92484 3 7.08333 3.16781 7.08333 3.375V4.125C7.08333 4.33219 6.92484 4.5 6.72917 4.5H3.1875C2.99182 4.5 2.83333 4.33219 2.83333 4.125V3.375ZM2.83333 7.125V6.375C2.83333 6.16781 2.99182 6 3.1875 6H6.72917C6.92484 6 7.08333 6.16781 7.08333 6.375V7.125C7.08333 7.33219 6.92484 7.5 6.72917 7.5H3.1875C2.99182 7.5 2.83333 7.33219 2.83333 7.125ZM9.20833 19.4944V20.625C9.20833 20.8322 9.04984 21 8.85417 21H8.14583C7.95016 21 7.79167 20.8322 7.79167 20.625V19.4864C7.29185 19.4592 6.80576 19.2745 6.40289 18.9544C6.23023 18.817 6.22138 18.5433 6.37766 18.3853L6.89784 17.8598C7.02047 17.7361 7.20286 17.7305 7.3463 17.8256C7.51763 17.9391 7.71198 18 7.91385 18H9.15831C9.44607 18 9.6807 17.7225 9.6807 17.3817C9.6807 17.1028 9.52088 16.8572 9.29245 16.785L7.30026 16.1522C6.47727 15.8906 5.90219 15.0544 5.90219 14.1183C5.90219 12.9689 6.74555 12.0352 7.79122 12.0056V10.875C7.79122 10.6678 7.94971 10.5 8.14539 10.5H8.85372C9.0494 10.5 9.20789 10.6678 9.20789 10.875V12.0136C9.70771 12.0408 10.1938 12.225 10.5967 12.5456C10.7693 12.683 10.7782 12.9567 10.6219 13.1147L10.1017 13.6402C9.97909 13.7639 9.79669 13.7695 9.65326 13.6744C9.48193 13.5605 9.28758 13.5 9.0857 13.5H7.84125C7.55349 13.5 7.31885 13.7775 7.31885 14.1183C7.31885 14.3972 7.47867 14.6428 7.70711 14.715L9.6993 15.3478C10.5223 15.6094 11.0974 16.4456 11.0974 17.3817C11.0974 18.5316 10.254 19.4648 9.20833 19.4944Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_119_422">
                                <rect width="17" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='nav-text'>Transactions</p>
                    
                </div>

                <div className='nav-option' href="#">
                    
                    {/* <svg className='icon'>
                        <path d="M1 7.81818L12.9231 1L18.8846 4.40909M1 7.81818V19.1818L12.9231 26M1 7.81818L6.96154 11.2273M24.8462 7.81818L12.9231 14.6364M24.8462 7.81818V19.1818L12.9231 26M24.8462 7.81818L18.8846 4.40909M12.9231 14.6364V26M12.9231 14.6364L6.96154 11.2273M6.96154 11.2273L18.8846 4.40909" stroke="white"/>
                        <circle cx="16" cy="16" r="14" fill="white" stroke="#264ECA" stroke-width="2" />
    
                        <path d="M12 17.3L9.7 15l-1.4 1.4 3 3 6.3-6.3-1.4-1.4L12 17.3z" fill="none" stroke="#264ECA" stroke-width="2" />
                    </svg>
                    <p className='nav-text'>In stock</p> */}
                    <img src={InStock} alt="Last Option Icon" className="icon" />
                </div>
            </div>
        </>
    )
}

export default Navbar;
