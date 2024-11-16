import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import {db} from "../firebase"


export const useAddPrompt = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]         = useState<string | null>(null);
  
    /**
     * 投稿処理を行う関数
     * @param {string} content - 投稿する文章
     */
    const addPrompt = async ({title, description, ai, prompts} : {title : string, description : string, ai : string, prompts : string[]}) => {
    //   if (!auth.currentUser) {
    //     setError("ログインが必要です");
    //     return;
    //   }
  
      setIsLoading(true);
      setError(null);
  
      try {
        // Firestore に投稿を保存
        const promptRef = collection(db, 'prompts');
        await addDoc(promptRef, {
          title : title,
          description : description,
          ai : ai,
          prompts : prompts,
          userId: "yoshimain016@gmail.com", // 現在ログイン中のユーザーID
          createdAt: serverTimestamp(), // サーバータイムスタンプ
        });
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "エラーが発生しました");
        setIsLoading(false);
        console.log(err);
      }
    };
  
    return { addPrompt, isLoading, error };
  };