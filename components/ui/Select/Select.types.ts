export interface Option {
  label: string;
  value: string | number;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  label?: string | React.ReactNode;
  selectClassName?: string;
  chevronColor?: string;
  defaultOptionLabel?: string;
}