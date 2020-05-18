import React from "react";
import { getUser } from "../api/users";

export default function useGetUser(userId) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);

  React.useEffect(() => {
    async function doGetUser() {
      try {
        setLoading(true);
        const user = await getUser(userId);
        setUser(user);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    doGetUser();
  }, [userId]);

  return { user, loading, errorMessage };
}
