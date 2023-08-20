import axios from "axios";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  code: string;
}

export default function AskGpt({ code }: Props) {
  const [answer, setAnswer] = useState("");

  const askGpt = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/openai`,
        {
          code,
        }
      );

      setAnswer(response.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="ml-3 mb-10">
        <button
          onClick={askGpt}
          className="cursor-pointer bg-fg-0 hover:bg-fg-1 text-bg-0 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          I need help
        </button>
      </div>

      {answer && (
        <div className={open ? "block ml-3 mb-10 text-fg" : "hidden"}>
          <h2>Answer:</h2>
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      )}
    </>
  );
}
