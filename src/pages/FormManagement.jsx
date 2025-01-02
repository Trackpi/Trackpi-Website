//import React from "react";
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';
import FormTable from '../components/FormTable';

function FormManagement () {
    return (
        <div className='row bg-white'>
            <div className='col-lg-2'>
                <AdminSidebar/>
            </div>
            <div className='col-lg-10'>
            <AdminNavbar/>
         
           <FormTable/>

            </div>
           
        </div>
    )
}








export default FormManagement;
