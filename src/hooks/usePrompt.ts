import { useEffect, useState } from "react";
import {db} from '../firebase'
import { doc, getDoc } from "firebase/firestore";

interface PromptData {
    id          : string
    title       : string;
    description : string,
    ai          : string,
    prompts     : string[],
    userId      : string,
    createdAt   : Date,
}

const usePrompt = (promptId : string) => {
    const [prompt, setPrompt]       = useState<PromptData | null>(null);
    const [loading, setLoading]     = useState<boolean>(true);
    const [error, setError]         = useState<string | null>(null);

  useEffect(() => {
    if (!promptId) {
      setLoading(false);
      setError("Document ID is not provided.");
      return;
    }

    const fetchDocument = async () => {
      setLoading(true);

      try {
        const docRef = doc(db, "prompts", promptId); // コレクション名は "documents" に変更可能
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data()
          setPrompt({
                id          : docSnap.id,
                title       : data.title ?? "-",
                description : data.description ?? "--",
                ai          : data.ai ?? "--",
                prompts     : data.prompts ?? ["--","--"],
                userId      : data.userId ?? "--",
                createdAt   : data.createdAt.toDate(),
            });
        } else {
          setError("Document does not exist.");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [promptId]);

  return {prompt, loading, error };
}

export default usePrompt;