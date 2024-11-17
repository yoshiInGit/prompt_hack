import { useEffect, useState } from "react";
import {db} from '../firebase'
import { collection, getDocs, query, where } from "firebase/firestore";

interface PromptData {
    id          : string,
    title       : string,
    description : string,
    ai          : string,
    prompts     : string[],
    userId      : string,
    createdAt   : Date,
}

const usePromptsByUser = (userId : string) => {
    const [prompts, setPrompts]     = useState<PromptData[] | null>(null);
    const [loading, setLoading]     = useState<boolean>(true);
    const [error, setError]         = useState<string | null>(null);

  useEffect(() => {   
    const fetchDocument = async () => {
      setLoading(true);

      const promptDatas : PromptData[] = [];
      try {
        const q = query(collection(db, "prompts"), where("userId","==",userId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          promptDatas.push({
                id          : doc.id,
                title       : data.title,
                description : data.description,
                ai          : data.ai,
                prompts     : data.prompts,
                userId      : data.userId,
                createdAt   : data.createdAt, 
            }
          );

          setPrompts(promptDatas);
        });
        
        
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [userId]);

  return {prompts, loading, error };
}

export default usePromptsByUser;