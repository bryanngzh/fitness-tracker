import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../configs/firebase";

const useAuthentication = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
      FIREBASE_AUTH,
      (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(undefined);
        }
      }
    );

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return { user };
};

export default useAuthentication;
