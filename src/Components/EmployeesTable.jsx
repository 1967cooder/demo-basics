import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
} from "@mui/material";

import useAxios from "../hooks/useAxios";
import EmployeeDataGrid from "./EmployeeDataGrid";

const EmployeesTable = () => {
  const { data, loading, error } = useAxios(
    "https://demo-basics.onrender.com/employees"
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!Array.isArray(data) || data.length === 0) {
    //   if (!data || data.length === 0) {
    return <div>No data found </div>;
  }
  // Check for nested employees array
  // const employees = data?.employees || [];

  // if (employees.length === 0) return <div>No data found</div>;

  return (
    <div className="content">
      <EmployeeDataGrid />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Favourite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.title}</TableCell>
                <TableCell>{employee.age}</TableCell>
                <TableCell>{employee.isFavourite ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeesTable;

//-----------------------7.2.2026-----------------------
// import { DataGrid } from "@mui/x-data-grid";
// import useAxios from "../hooks/useAxios";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
//   TableHead,
//   TableContainer,
//   Paper,
// } from "@mui/material";

// const EmployeesTable = () => {
//   const { data, loading, error } = useAxios(
//     "https://demo-basics.onrender.com/employees"
//   );

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (!Array.isArray(data) || data.length === 0)
//     return <div>No data found</div>;

//   const columns = [
//     { field: "id", headerName: "ID", width: 50 },
//     { field: "name", headerName: "Name", width: 150 },
//     { field: "title", headerName: "Title", width: 150 },
//     { field: "age", headerName: "Age", width: 100 },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//       renderCell: (params) => {
//         const statusColors = {
//           active: "green",
//           onleave: "yellow",
//           inactive: "red",
//         };
//         const color = statusColors[params.value] || "gray";
//         return (
//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <span
//               style={{
//                 width: "10px",
//                 height: "10px",
//                 borderRadius: "50%",
//                 backgroundColor: color,
//                 display: "inline-block",
//               }}
//             />
//             <span style={{ textTransform: "capitalize" }}>
//               {params.value || ""}
//             </span>
//           </div>
//         );
//       },
//     },
//     { field: "isFavourite", headerName: "Favourite", width: 100 },
//   ];

//   return (
//     <div className="content">
//       {/* DataGrid */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1200px",
//           height: 400,
//           marginBottom: "2rem",
//         }}
//       >
//         <DataGrid rows={data} columns={columns} />
//       </div>

//       {/* Plain Table */}
//       <TableContainer component={Paper} sx={{ width: "100%" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Title</TableCell>
//               <TableCell>Age</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Favourite</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((employee) => {
//               const statusColors = {
//                 active: "green",
//                 onleave: "yellow",
//                 inactive: "red",
//               };
//               const color = statusColors[employee.status] || "gray";
//               return (
//                 <TableRow key={employee.id}>
//                   <TableCell>{employee.id}</TableCell>
//                   <TableCell>{employee.name}</TableCell>
//                   <TableCell>{employee.title}</TableCell>
//                   <TableCell>{employee.age}</TableCell>
//                   <TableCell>
//                     <span
//                       style={{
//                         width: "10px",
//                         height: "10px",
//                         borderRadius: "50%",
//                         backgroundColor: color,
//                         display: "inline-block",
//                         marginRight: "5px",
//                       }}
//                     />
//                     {employee.status}
//                   </TableCell>
//                   <TableCell>{employee.isFavourite ? "Yes" : "No"}</TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default EmployeesTable;
