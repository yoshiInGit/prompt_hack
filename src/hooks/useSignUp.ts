import { useState } from 'react';
// import { getFirestore, doc, setDoc } from 'firebase/firestore';
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);
  // const db   = getFirestore();

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      // Firebase Authenticationで新規ユーザー作成
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // // Firestoreにユーザーの追加情報を保存
      // if (user) {
      //   const userRef = doc(db, 'users', user.uid);
      //   await setDoc(userRef, {
      //     email: user.email,
      //     createdAt: new Date()
      //   });
      // }

      setLoading(false);
      return user;
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'サインアップに失敗しました');
      setLoading(false);
      return null;
    }
  };

  return { signUp, loading, error };
};

export default useSignUp;
