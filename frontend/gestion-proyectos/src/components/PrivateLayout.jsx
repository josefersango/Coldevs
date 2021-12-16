import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const PrivateLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <ToastContainer
                
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                
            />
        </div>
    )
}

export default PrivateLayout
