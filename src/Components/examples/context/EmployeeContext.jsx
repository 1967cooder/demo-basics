import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

/**
 * EmployeeContext - Manages global employee state
 *
 * This context provides:
 * - employees: Array of all employees
 * - loading: Boolean indicating if data is being fetched
 * - error: Error message if any
 * - fetchEmployees: Function to fetch all employees
 * - addEmployee: Function to create a new employee
 * - updateEmployee: Function to update an existing employee
 * - deleteEmployee: Function to delete an employee
 * - getEmployeeById: Function to get a single employee by ID
 */

// Create the context
const EmployeeContext = createContext(undefined);

// API base URL - can be configured
const API_BASE_URL = "http://localhost:3001";

/**
 * EmployeeProvider - Wraps the app and provides employee state
 */
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fetch all employees from the API
   */
  const fetchEmployees = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/employees`);
      setEmployees(response.data);
      return response.data;
    } catch (err) {
      const errorMessage = err.message || "Failed to fetch employees";
      setError(errorMessage);
      console.error("Error fetching employees:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Add a new employee
   */
  const addEmployee = useCallback(async (employeeData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
        `${API_BASE_URL}/employees`,
        employeeData
      );
      const newEmployee = response.data;
      setEmployees((prev) => [...prev, newEmployee]);
      return newEmployee;
    } catch (err) {
      const errorMessage = err.message || "Failed to add employee";
      setError(errorMessage);
      console.error("Error adding employee:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Update an existing employee
   */
  const updateEmployee = useCallback(async (id, employeeData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.put(
        `${API_BASE_URL}/employees/${id}`,
        employeeData
      );
      const updatedEmployee = response.data;
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === id || emp.id === String(id) ? updatedEmployee : emp
        )
      );
      return updatedEmployee;
    } catch (err) {
      const errorMessage = err.message || "Failed to update employee";
      setError(errorMessage);
      console.error("Error updating employee:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Delete an employee
   */
  const deleteEmployee = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      await axios.delete(`${API_BASE_URL}/employees/${id}`);
      setEmployees((prev) =>
        prev.filter((emp) => emp.id !== id && emp.id !== String(id))
      );
    } catch (err) {
      const errorMessage = err.message || "Failed to delete employee";
      setError(errorMessage);
      console.error("Error deleting employee:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Get a single employee by ID
   */
  const getEmployeeById = useCallback(
    (id) => {
      return employees.find((emp) => emp.id === id || emp.id === String(id));
    },
    [employees]
  );

  /**
   * Clear error state
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Fetch employees on mount
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  // Context value object
  const value = {
    employees,
    loading,
    error,
    fetchEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
    clearError,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

/**
 * Custom hook to use the EmployeeContext
 * Throws an error if used outside of EmployeeProvider
 */
export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (context === undefined) {
    throw new Error(
      "useEmployeeContext must be used within an EmployeeProvider"
    );
  }
  return context;
};

export default EmployeeContext;
