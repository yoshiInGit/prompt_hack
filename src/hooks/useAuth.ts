import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase"; // Firebase設定ファイルをインポート

const useAuthStatus = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsChecking(false);
    });
    return () => unsubscribe();
  }, []);

  return { currentUser, isChecking };
};

export default useAuthStatus;
