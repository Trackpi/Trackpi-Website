
import React,{useState} from "react"


function InternManagement ()  {

   const [employees, setEmployees] = useState([
      {
        id: 1,
        name: "John Doe",
        employeeId: "E12345",
        email: "john.doe@example.com",
        phone: "1234567890",
      },
      {
        id: 2,
        name: "Jane Smith",
        employeeId: "E54321",
        email: "jane.smith@example.com",
        phone: "0987654321",
      },
      {
        id: 3,
        name: "Samuel Green",
        employeeId: "E67890",
        email: "samuel.green@example.com",
        phone: "5678901234",
      },
    ]);
  
    // Delete handler for an employee
    const handleDelete = (id) => {
      if (window.confirm("Are you sure you want to delete this employee?")) {
        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    };

    return (
      <div>
           <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h3 className="mb-4">Sales Management</h3>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <button
          className="btn btn-warning me-2"
          onClick={() => alert("Download feature coming soon!")}
        >
          <i
            className="fa-solid fa-file-arrow-down"
            style={{ color: "#050505" }}
          />
        </button>
        <button
          className="btn btn-warning me-2"
          onClick={() => alert("Upload feature coming soon!")}
        >
          <i
            className="fa-solid fa-file-arrow-up"
            style={{ color: "#050505" }}
          />
        </button>
        <button
          className="btn btn-warning"
          onClick={() => alert("Add Employee feature coming soon!")}
        >
          + Add Employee
        </button>
      </div>
      <Table bordered hover responsive>
        <thead style={{  fontWeight: "bold" }}>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Email ID</th>
            <th>Phone</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.employeeId}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>
                <button
                  className="btn btn-outline-warning"
                  onClick={() =>
                    alert(`Viewing details for ${employee.name}`)
                  }
                >
                  View Details
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  onClick={() => handleDelete(employee.id)}
                >
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#df0727" }}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
      </div>
    )
  }
  
  export default InternManagement 

