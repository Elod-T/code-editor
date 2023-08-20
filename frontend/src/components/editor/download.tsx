interface Props {
  name: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}

export default function Download({ name, htmlCode, cssCode, jsCode }: Props) {
  return (
    <a
      href={`data:text/html;charset=utf-8,${encodeURIComponent(
        `<html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}</script>
            </body>
            </html>`
      )}`}
      download={`${name}.html`}
      className="bg-fg-0 hover:bg-fg-1 text-bg-0 font-bold py-2 px-4 rounded inline-flex items-center ml-3"
    >
      <img className="w-6" src="/assets/download.svg" alt="" />
    </a>
  );
}
