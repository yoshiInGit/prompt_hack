import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("ログイン成功");
    } catch (err) {
        setError(err instanceof Error ? err.message : 'ログインに失敗しました')
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading, error };
};

export default useSignIn;
