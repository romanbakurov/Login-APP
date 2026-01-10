import { Login } from './pages/Login/Login.tsx';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard.tsx';
import { ProtectedRoute } from './routes/ProtectedRoute.tsx';
import { ThemeToggle } from './Components/ThemeToggle/ThemeToggle.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
