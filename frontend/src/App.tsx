import React from "react";
import RoutesWrapper from "./routes/RoutesWrapper";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./constants/query-client";
import { AuthProvider } from "./contexts/AuthContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SnackbarProvider } from "notistack";

const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-teal-500 text-gray-200">
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoHideDuration={3000}
        className="bg-white"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <RoutesWrapper />
            </QueryClientProvider>
          </AuthProvider>
        </LocalizationProvider>
      </SnackbarProvider>
    </div>
  );
};

export default App;
