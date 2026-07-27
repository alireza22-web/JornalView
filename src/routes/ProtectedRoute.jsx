import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

    const user = JSON.parse(localStorage.getItem("journal-user"));

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}