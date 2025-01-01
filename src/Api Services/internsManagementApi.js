import baseUrl from "./baseURL";
import commonApi from "./commonApi";


// Add Inten Empoyee
export const addInternEmployee = async(data,header)=>{
    return await commonApi(`${baseUrl}/api/interns/add`, "POST",header, data)
}


// Get All Intern Employees
export const getAllInternEmployees = async(header)=>{
    return await commonApi(`${baseUrl}/api/interns/`, "GET",header)
}

// Get Intern Employee By Id
export const getInternEmployeeById = async(id,header)=>{
    return await commonApi(`${baseUrl}/api/interns/${id}`, "GET",header)
}

// Update Intern Employee
export const updateInternEmployee = async(id,data,header)=>{
    return await commonApi(`${baseUrl}/api/interns/${id}`, "PUT",header,data)
}

// Delete Intern Employee
export const deleteInternEmployee = async(id,header)=>{
    return await commonApi(`${baseUrl}/api/interns/${id}`, "DELETE",header)
}
