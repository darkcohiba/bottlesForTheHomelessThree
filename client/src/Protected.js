import { Navigate } from "react-router";

export default function Protected ({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return( <Navigate to="/login" replace />)
            // alert("You must be logged in"))
    }

    return children;
}