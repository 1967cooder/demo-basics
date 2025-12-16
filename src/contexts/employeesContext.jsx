import { createContext, useState } from "react";

const EmployeesContext = createContext();

const EmployeesProvider = ({ children }) => {
  const [state, setState] = useState({
    employees: [],
    loading: true,
    error: null,
  });

  return (
    <EmployeesContext.Provider value={[state, setState]}>
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
export { EmployeesContext };
