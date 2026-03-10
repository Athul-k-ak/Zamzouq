import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedLayout() {
  const isAuthenticated = true // 🔥 Replace with real auth logic

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}