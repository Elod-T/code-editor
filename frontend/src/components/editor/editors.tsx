import { useEffect, useState } from "react";
import SingleEditor from "./singleEditor";
import Iframe from "./iframe";
import { useLocalStorage } from "usehooks-ts";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import Editable from "../editable";
import { Project } from "../../interfaces/project";
import { INJECT_JS } from "../../consts";
import Toast from "../toast";
import Toggle from "../toggle";
import Download from "./download";
import Share from "./share";
import AskGpt from "./askGpt";

export default function Editors() {
  const pathname = window.location.pathname;
  const id = pathname.split("/")[2];

  const [savedCode, setSavedCode] = useLocalStorage(`code-${id}`, {
    name: "",
    htmlCode: "",
    cssCode: "",
    jsCode: "",
  });
  const [name, setName] = useState(savedCode.name);

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [code, setCode] = useState({
    timeStamp: 0,
    code: "",
  });
  const [interceptConsole, setInterceptConsole] = useState(true);

  const [projects, setProjects] = useLocalStorage<Project[]>("projects", []);

  useEffect(() => {
    setHtmlCode(savedCode.htmlCode);
    setCssCode(savedCode.cssCode);
    setJsCode(savedCode.jsCode);
  }, []);

  useEffect(() => {
    if (new Date().getTime() - code.timeStamp > 1000) {
      updateCode(code.code);
    } else {
      const timer = setTimeout(() => {
        updateCode(code.code);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [htmlCode, cssCode, jsCode]);

  const updateCode = (code: string) => {
    const intercept = interceptConsole ? `<script>${INJECT_JS}</script>` : "";

    const newCode = `
    <html>
      <head>
        <style>${cssCode}</style>
        ${intercept}
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
    </html>
  `;
    if (newCode !== code) {
      setCode({
        timeStamp: new Date().getTime(),
        code: newCode,
      });
      setSavedCode({
        name,
        htmlCode,
        cssCode,
        jsCode,
      });
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);
    setSavedCode({
      name: value,
      htmlCode,
      cssCode,
      jsCode,
    });

    const newProjects = projects.map((project) => {
      if (project.id === id) {
        project.name = value;
      }
      return project;
    });

    setProjects(newProjects);
  };

  const handleInterceptChange = () => {
    // must repeat code because of strange behavior, first 2 times code didn't update then worked as expected
    const intercept = !interceptConsole ? `<script>${INJECT_JS}</script>` : "";

    const newCode = `
    <html>
      <head>
        <style>${cssCode}</style>
        ${intercept}
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
    </html>
  `;

    setCode({
      timeStamp: new Date().getTime(),
      code: newCode,
    });
    setInterceptConsole(!interceptConsole);
  };

  return (
    <>
      <div className="font-sans">
        <Editable
          className="text-4xl text-fg font-bold m-10 ml-3 mt-0 font-retro"
          text={name}
          setText={handleNameChange}
        ></Editable>

        <Toggle checked={interceptConsole} onChange={handleInterceptChange} />

        <div className="flex mb-5">
          <Download
            htmlCode={htmlCode}
            cssCode={cssCode}
            jsCode={jsCode}
            name={name}
          />
          <Share
            htmlCode={htmlCode}
            cssCode={cssCode}
            jsCode={jsCode}
            name={name}
          />
        </div>

        <AskGpt code={code.code} />

        <div className="flex mx-auto w-fit">
          <SingleEditor
            title="HTML"
            languageFn={html}
            code={htmlCode}
            updateCode={setHtmlCode}
            className="pl-1"
          />
          <SingleEditor
            title="CSS"
            languageFn={css}
            code={cssCode}
            updateCode={setCssCode}
            className="px-1"
          />
          <SingleEditor
            title="JS"
            languageFn={javascript}
            code={jsCode}
            updateCode={setJsCode}
            className="pr-1"
          />
        </div>

        <Iframe code={code.code} />
      </div>

      <Toast />
    </>
  );
}
