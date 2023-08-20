interface Props {
  name: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}

export default function Share({ name, htmlCode, cssCode, jsCode }: Props) {
  // build url with query params
  const url = new URL(window.location.host + "/share");
  url.searchParams.set("name", name);
  url.searchParams.set("htmlCode", htmlCode);
  url.searchParams.set("cssCode", cssCode);
  url.searchParams.set("jsCode", jsCode);

  // copy url to clipboard
  const copy = () => {
    navigator.clipboard.writeText(url.toString());
  };

  return (
    <button
      onClick={copy}
      className="cursor-pointer bg-fg-0 hover:bg-fg-1 text-bg-0 font-bold py-2 px-4 rounded inline-flex items-center ml-3"
    >
      <img className="w-6" src="/assets/share.svg" alt="" />
    </button>
  );
}
