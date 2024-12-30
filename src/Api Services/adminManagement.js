import axios from "axios";
import baseUrl from "./baseURL";




//admin login
export const adminLogin=async(data)=>{
    return await axios.post(`${baseUrl}adminlogin`,data)
}

//get all admins

export const getAdmins = async (jwt) => {
    try {
      return await axios.get(`${baseUrl}admin`, {
        headers: {
          'Authorization': `Bearer ${jwt}`, // Replace with your actual token
          'Content-Type': 'application/json', // You can add more headers as needed
        }
      });
    } catch (error) {
      console.error('Error fetching admins:', error);
      throw error;
    }
  };
  
// edit admin data
  export const editAdminData = async (data,jwt) => {
    try {
      return await axios.put(`${baseUrl}admin`,data, {
        headers: {
          'Authorization': `Bearer ${jwt}`, // Replace with your actual token
          'Content-Type': 'application/json', // You can add more headers as needed
        },

      });
    } catch (error) {
      console.error('Error fetching admins:', error);
      throw error;
    }
  };


//delete admin
  export const deleteAdmin = async (data,jwt) => {
    try {
      return await axios.delete(`${baseUrl}admin/${data}`, {
        headers: {
          'Authorization': `Bearer ${jwt}`, // Replace with your actual token
          'Content-Type': 'application/json', // You can add more headers as needed
        },

      });
    } catch (error) {
      console.error('Error fetching admins:', error);
      throw error;
    }
  };



  //add admin
  export const addAdmin = async (data,jwt) => {
    try {
      return await axios.post(`${baseUrl}admin`,data, {
        headers: {
          'Authorization': `Bearer ${jwt}`, // Replace with your actual token
          'Content-Type': 'application/json', // You can add more headers as needed
        },

      });
    } catch (error) {
      console.error('Error fetching admins:', error);
      throw error;
    }
  };