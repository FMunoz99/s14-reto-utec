import { jwtDecode } from "jwt-decode";

interface DecodedToken {
	role:String;
	username:String;
	IssuedAt: Date;
	ExpiresAt:Date;
}

export function getUsernameBasedOnToken() {
	const token = localStorage.getItem("token");
	if (!token) throw new Error("Token not found");
	const decodedToken = jwtDecode<DecodedToken>(token);
	return decodedToken.username;
}
