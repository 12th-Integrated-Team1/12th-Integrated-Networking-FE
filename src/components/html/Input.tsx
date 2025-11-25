interface InputProps {
  wrapperClassName?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function Input({
  wrapperClassName,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
}: InputProps) {
  return (
    <div className={wrapperClassName}>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full outline-none bg-transparent"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
