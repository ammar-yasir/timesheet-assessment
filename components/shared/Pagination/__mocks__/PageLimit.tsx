export default function PageLimit({
  value,
  onChange,
}: {
  value: number;
  onChange: (newLimit: number) => void;
}) {
  return (
    <div>
      <span>Limit: {value}</span>
      <button onClick={() => onChange(20)}>Change Limit</button>
    </div>
  );
}
