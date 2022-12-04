import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

interface ProtectedRouteProp {
	children: React.ReactElement;
	requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin }: ProtectedRouteProp) => {
	const { user } = useAuthContext();

	if (!user || (requireAdmin && !user.isAdmin)) {
		return <Navigate to='/' replace />;
	}

	return children;
};

export default ProtectedRoute;
