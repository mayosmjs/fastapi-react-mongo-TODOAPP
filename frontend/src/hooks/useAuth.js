import { useContext } from "react";
import { AuthContext } from "../context/jwtauth";

export const useAuth = () => useContext(AuthContext);