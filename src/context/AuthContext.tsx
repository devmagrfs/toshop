import { User } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleLogin, logout, onUserStateChange } from '../api/firebase';

const AuthContext = createContext<any | null>(null);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | undefined>(undefined);

	useEffect(() => {
		onUserStateChange((user: User) => {
			setUser(user);
		});
	}, []);

	return <AuthContext.Provider value={{ user, login: GoogleLogin, logout: logout }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
	return useContext(AuthContext);
}
