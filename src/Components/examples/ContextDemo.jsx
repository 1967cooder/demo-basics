import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useEmployeeContext } from "../context/EmployeeContext";
import EmployeeCounter from "./EmployeeCounter";

/**
 * ContextDemo - Demonstrates Context API usage
 *
 * This component shows:
 * 1. How to consume context using useEmployeeContext hook
 * 2. How to perform CRUD operations through context
 * 3. How multiple components can share the same state
 * 4. How state updates propagate to all consumers
 */
const ContextDemo = () => {
  const {
    employees,
    loading,
    error,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    clearError,
  } = useEmployeeContext();

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    department: "",
    salary: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update existing employee
        await updateEmployee(editingId, {
          ...formData,
          salary: Number(formData.salary),
        });
        setEditingId(null);
      } else {
        // Add new employee
        await addEmployee({
          ...formData,
          salary: Number(formData.salary),
          status: "active",
          hireDate: new Date().toISOString().split("T")[0],
        });
      }
      // Reset form
      setFormData({
        name: "",
        position: "",
        department: "",
        salary: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const handleEdit = (employee) => {
    setFormData({
      name: employee.name || "",
      position: employee.position || "",
      department: employee.department || "",
      salary: employee.salary?.toString() || "",
    });
    setEditingId(employee.id);
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      position: "",
      department: "",
      salary: "",
    });
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await deleteEmployee(id);
      } catch (err) {
        console.error("Error deleting employee:", err);
      }
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Context API & State Management Demo
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        This component demonstrates how to use React Context for global state
        management. The employee data is shared across all components that use
        the EmployeeContext.
      </Typography>

      {/* Error Display */}
      {error && (
        <Alert severity="error" onClose={clearError} sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Employee Counter - Shows context is shared */}
      <Box sx={{ mb: 3 }}>
        <EmployeeCounter />
      </Box>

      <Grid container spacing={3}>
        {/* Form Section */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {editingId ? "Edit Employee" : "Add New Employee"}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Salary"
                name="salary"
                type="number"
                value={formData.salary}
                onChange={handleInputChange}
                required
                margin="normal"
              />
              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  fullWidth
                >
                  {loading ? (
                    <CircularProgress size={20} />
                  ) : editingId ? (
                    "Update"
                  ) : (
                    "Add"
                  )}
                </Button>
                {editingId && (
                  <Button
                    variant="outlined"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                )}
              </Box>
            </form>
          </Paper>

          {/* Context Info */}
          <Paper
            sx={{
              p: 3,
              mt: 3,
              bgcolor: "info.light",
              color: "info.contrastText",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Context Benefits
            </Typography>
            <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
              <li>Shared state across components</li>
              <li>No prop drilling</li>
              <li>Centralized state management</li>
              <li>Automatic re-renders on state changes</li>
            </Typography>
          </Paper>
        </Grid>

        {/* Employee List Section */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h6">
                Employees ({employees.length})
              </Typography>
              {loading && <CircularProgress size={24} />}
            </Box>
            <Divider sx={{ mb: 2 }} />

            {employees.length === 0 && !loading ? (
              <Typography color="text.secondary" align="center" sx={{ py: 4 }}>
                No employees found. Add one using the form!
              </Typography>
            ) : (
              <Grid container spacing={2}>
                {employees.slice(0, 6).map((employee) => (
                  <Grid item xs={12} sm={6} key={employee.id}>
                    <Card>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography variant="h6" component="div">
                            {employee.name}
                          </Typography>
                          <Chip
                            label={employee.status || "active"}
                            color={
                              employee.status === "active"
                                ? "success"
                                : "warning"
                            }
                            size="small"
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {employee.position}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {employee.department}
                        </Typography>
                        {employee.salary && (
                          <Typography
                            variant="body2"
                            sx={{ mt: 1, fontWeight: "bold" }}
                          >
                            ${employee.salary.toLocaleString()}
                          </Typography>
                        )}
                        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleEdit(employee)}
                            disabled={loading}
                          >
                            Edit
                          </Button>
                          <Button
                            size="small"
                            variant="outlined"
                            color="error"
                            onClick={() => handleDelete(employee.id)}
                            disabled={loading}
                          >
                            Delete
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContextDemo;
