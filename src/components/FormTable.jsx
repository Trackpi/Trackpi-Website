import React from 'react'

 function FormTable(){
    return(

<div className='p-5'>
                <h4 className='font-bold my-4'>Form Management</h4>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg  border-dark border-2">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead className="text-md font-bold text-black uppercase border-b-2 border-dark ">
                            <tr>

                                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                                   Sl No
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                                  Name
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                                   Email ID
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                                  Phone
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                                  Hear About Us
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                                   Time
                                </th>
                                <th scope="col" className="px-6 py-3  text-center">
                                 View
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                

                                    <tr  className="bg-white text-md  font-semibold text-black dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                        <td className="px-6 py-4  border-r-2   text-center">
                                            hgfdfg</td>
                                        <td className="px-6 py-4 border-r-2  text-center">
                                          iuyutyuu</td>
                                        <td className="px-6 py-4 border-r-2  text-center">
                                            ijuytfyu</td>
                                        <td className="px-6 py-4 border-r-2  text-center">
                                           jhgfdsfghjk</td>
                                        <td className="px-6 py-4 border-r-2  text-center">
                                            trrfghj</td>
                                        <td className='px-6 py-4 border-r-2   text-center'>
                                           10 AM
                                        </td>
                                        <td className='  text-center'>
                                           View Details
                                           </td>
                                    </tr>
                              

                        </tbody>
                    </table>
                </div>

               
            </div>

    )
 }
 export default FormTable;