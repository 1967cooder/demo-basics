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
    <div className="container">
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
