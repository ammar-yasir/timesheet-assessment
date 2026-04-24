"use client";
import Select from "@/components/ui/Select";

const limitOptions = [
  { label: "5 per page", value: 5 },
  { label: "10 per page", value: 10 },
  { label: "20 per page", value: 20 },
  { label: "50 per page", value: 50 },
];

const PageLimit = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (val: number) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(Number(e.target.value));
    }
  };
  return (
    <Select
      options={limitOptions}
      value={value}
      onChange={handleChange}
      selectClassName="min-w-29.5 bg-gray-50 border border-gray-200 text-gray-800 font-medium text-sm rounded-xl px-3 py-2"
    />
  );
};

export default PageLimit;
