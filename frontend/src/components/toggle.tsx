interface Props {
  checked: boolean;
  onChange: () => void;
}

export default function Toggle({ checked, onChange }: Props) {
  return (
    <label className="flex gap-x-2 mb-4 ml-2">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="text-fg">Intercept console methods</span>
    </label>
  );
}
