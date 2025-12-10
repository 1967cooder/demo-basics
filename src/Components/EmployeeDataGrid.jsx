import { DataGrid } from "@mui/x-data-grid";
import useAxios from "../hooks/useAxios";
import axios from "axios";

const EmployeeDataGrid = () => {
  const url = "http://localhost:3001/employees"; // ← поправено httpp → http
  const { data, loading, error } = useAxios(url);

  console.log("Data:", data);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },

    {
      field: "position",
      headerName: "Position",
      width: 150,
      editable: true,
      onCellEditCommit: (params) => {
        console.log("Cell edit commited: ", params);
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 150,

      renderCell: (params) => {
        const statusColors = {
          active: "green",
          onleave: "yellow",
          inactive: "red",
        };

        const color = statusColors[params.value] || "gray";

        return (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
  ];
  const handleSave = (id, updatedRow) => {
    axios
      .put(`http://localhost:3001/employees/${id}`, updatedRow)
      .then((response) => {
        console.log("Row saved:", response.data);
      });
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data ?? []}
        columns={columns}
        loading={loading}
        processRowUpdate={(updatedRow, originalRow) => {
          console.log("Row updated from", originalRow);
          handleSave(updatedRow.id, updatedRow);
          return updatedRow;
        }}
        onProcessRowUpdateError={(error) =>
          console.error("Error updating row:", error)
        }
      />
    </div>
  );
};

export default EmployeeDataGrid;
