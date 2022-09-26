import React from 'react'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

const Admin = () => {
  return (
    <div className='bg-[#e3e3e3] py-5 h-[100vh]'>
      <div className="container mx-auto px-5 pl-[330px]">
         <Sidebar/>
         <Table/>
      </div>
    </div>
  )
}

export default Admin