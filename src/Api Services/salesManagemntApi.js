import baseURL from './baseURL';
import commonApi from './commonApi';

// Add SalesEmployee
export const addSalesEmployee = async (data, header) => {
    console.log("FormData Entries:");
    for (let pair of data.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }

    return await commonApi(`${baseURL}api/sales/`, "POST", header, data);
};

// Get All SalesEmployees
export const getAllSalesEmployee = async (header) => {
    return await commonApi(`${baseURL}api/sales/`, "GET", header);
};

// Get SalesEmployee By Id
export const getSalesEmployeeById = async (id, header) => {
    return await commonApi(`${baseURL}api/sales/${id}`, "GET", header);
};

// Update SalesEmployee
export const updateSalesEmployee = async (data, id, header) => {
    console.log("FormData Entries for Update:");
    for (let pair of data.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }

    return await commonApi(`${baseURL}api/sales/${id}`, "PUT", header, data);
};

// Delete SalesEmployee
export const deleteSalesEmployee = async (id, header) => {
    return await commonApi(`${baseURL}api/sales/${id}`, "DELETE", header);
};
