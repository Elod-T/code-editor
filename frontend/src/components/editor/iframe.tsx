import { useEffect, useState } from "react";

interface Props {
  code: string;
}

export default function Iframe({ code }: Props) {
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

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={
        open
          ? "absolute inset-0 w-screen h-screen z-100 bg-black"
          : "w-[97vw] h-[59vh] mx-auto bg-black"
      }
    >
      <div
        className={
          (open ? "px-1" : "") +
          " text-fg font-medium flex items-center h-7 justify-between"
        }
      >
        <h3>PREVIEW</h3>
        <button className="text-fg bg-black h-min w-min" onClick={handleClick}>
          <img
            src={`/assets/${open ? "minimize" : "maximize"}.svg`}
            alt=""
            className="w-4 h-5 invert"
          />
        </button>
      </div>
      <iframe
        className="w-full h-full bg-fg-0"
        sandbox="allow-scripts"
        srcDoc={code}
      ></iframe>
    </div>
  );
}
