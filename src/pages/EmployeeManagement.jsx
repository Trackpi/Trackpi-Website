import React from 'react'

import EmployeeTable from '../components/EmployeeTable'
import AdminSidebar from '../components/AdminSidebar'

function EmployeeManagement() {
  return (
    <div className='row'>
      <div className='col-lg-2'>
      <AdminSidebar/>
      </div>
      <div className='col-lg-10'>
      <EmployeeTable/>
      </div>
      
      </div>
  )
}

export default EmployeeManagement