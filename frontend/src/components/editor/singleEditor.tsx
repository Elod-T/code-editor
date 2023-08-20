import { useCallback, useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { gruvboxDark } from "@uiw/codemirror-theme-gruvbox-dark";
import type { html } from "@codemirror/lang-html";
import type { css } from "@codemirror/lang-css";
import type { javascript } from "@codemirror/lang-javascript";

interface Props {
  title: string;
  languageFn: typeof html | typeof css | typeof javascript;
  code: string;
  updateCode: (code: string) => void;
  className?: string;
}

export default function SingleEditor({
  title,
  languageFn,
  code,
  updateCode,
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  const handleChange = useCallback(
    (value: string) => {
      updateCode(value);
    },
    [updateCode]
  );

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={
        open
          ? "absolute inset-0 w-screen h-screen z-100 bg-black"
          : className + " bg-black border-black border-x-[0.5px] border-y-[1px]"
      }
    >
      <div
        className={
          (open ? "px-1" : "") +
          " text-fg font-medium flex items-center h-7 justify-between"
        }
      >
        <h3>{title}</h3>
        <button className="text-fg bg-black h-min w-min" onClick={handleClick}>
          <img
            src={`/assets/${open ? "minimize" : "maximize"}.svg`}
            alt=""
            className="w-4 h-5 invert"
          />
        </button>
      </div>
      <CodeMirror
        value={code}
        height={open ? "100vh" : "300px"}
        width={open ? "100vw" : "32vw"}
        onChange={handleChange}
        theme={gruvboxDark}
        extensions={[languageFn()]}
        basicSetup={{
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
        }}
      />
    </div>
  );
}
