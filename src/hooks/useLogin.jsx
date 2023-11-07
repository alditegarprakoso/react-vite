import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (!token) {
      window.location.href = "/login";
    } else {
      if (!username) {
        setUsername(getUsername(token.token));
      }
    }
  }, [username]);

  return username;
};
