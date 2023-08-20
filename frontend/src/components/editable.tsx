import { useState } from "react";

interface Props {
  className?: string;
  text: string;
  setText: (text: string) => void;
}

export default function Editable({ className, text, setText }: Props) {
  const [editing, setEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };

  return (
    <>
      {editing ? (
        <input
          className={className + " bg-bg text-fg font-medium"}
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div
          className="flex cursor-pointer align-middle"
          onClick={() => setEditing(true)}
        >
          <p className={className}>{text}</p>
          <img
            className="w-12 invert relative bottom-6"
            src="/assets/edit.svg"
            alt=""
          />
        </div>
      )}
    </>
  );
}
