import { Login } from './pages/Login/Login.tsx';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard.tsx';
import { ProfilePage } from './pages/Profile/ProfilePage.tsx';
import { ProtectedRoute } from './routes/ProtectedRoute.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Layout } from './Layout/Layout.tsx';
import { SettingsPage } from './pages/SettingsPage/SettingsPage.tsx';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route element={<Layout />}>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route element={<Layout />}>
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
