import { Box, Paper, Typography } from "@mui/material";
import { useEmployeeContext } from "../context/EmployeeContext";

/**
 * EmployeeCounter - Simple component demonstrating context consumption
 *
 * This component shows how any component can access the shared context state
 * without prop drilling. It automatically updates when the employee list changes.
 */
const EmployeeCounter = () => {
  const { employees, loading } = useEmployeeContext();

  // Calculate statistics
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(
    (emp) => emp.status === "active"
  ).length;
  const departments = new Set(employees.map((emp) => emp.department)).size;

  return (
    <Paper
      sx={{ p: 2, bgcolor: "primary.light", color: "primary.contrastText" }}
    >
      <Typography variant="h6" gutterBottom>
        Employee Statistics (from Context)
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box>
          <Typography variant="body1">
            Total Employees: {totalEmployees}
          </Typography>
          <Typography variant="body1">Active: {activeEmployees}</Typography>
          <Typography variant="body1">Departments: {departments}</Typography>
          <Typography
            variant="caption"
            sx={{ display: "block", mt: 1, opacity: 0.8 }}
          >
            This component shares state with ContextDemo and EmployeeDataGrid
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default EmployeeCounter;
