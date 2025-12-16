import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useEmployeeContext } from "../context/EmployeeContext";
import { generateColumns } from "../utils/generateColumns";

const EmployeeDataGrid = () => {
  // Using Context instead of local state management
  const { employees, loading, error, fetchEmployees } = useEmployeeContext();
  const [columns, setColumns] = useState([]);

  // Generate columns when employees data changes
  useEffect(() => {
    if (employees && employees.length > 0) {
      const generatedColumns = generateColumns(employees, {
        // You can customize specific columns here
        salary: {
          headerName: "Salary (USD)",
          description: "Annual salary in US dollars",
        },
        status: {
          renderCell: (params) => {
            const statusColors = {
              active: "#4caf50",
              "on leave": "#ff9800",
              inactive: "#f44336",
            };
            const color = statusColors[params.value] || "#757575";
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: color,
                    display: "inline-block",
                  }}
                />
                <span style={{ textTransform: "capitalize" }}>
                  {params.value || ""}
                </span>
              </div>
            );
          },
        },
      });
      setColumns(generatedColumns);
    } else {
      setColumns([]);
    }
  }, [employees]);

  // Refetch employees if needed (context handles initial fetch, but we can refresh)
  useEffect(() => {
    if (employees.length === 0 && !loading) {
      fetchEmployees();
    }
  }, [employees.length, loading, fetchEmployees]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
        <Typography variant="body2" sx={{ mt: 2 }}>
          To start the server, run: <code>npm run server</code>
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ height: "100%", width: "100%", p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Employee DataGrid
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        This datagrid demonstrates automatic column generation from data
        structure. Features: sorting, filtering, pagination, column resizing,
        and custom cell rendering.
      </Typography>
      <Box sx={{ height: 600, width: "100%" }}>
        {columns.length > 0 && employees.length > 0 ? (
          <DataGrid
            rows={employees}
            columns={columns}
            pageSizeOptions={[10, 25, 50, 100]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{
              "& .MuiDataGrid-cell": {
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          />
        ) : (
          <Typography>No data available</Typography>
        )}
      </Box>
    </Box>
  );
};

export default EmployeeDataGrid;
