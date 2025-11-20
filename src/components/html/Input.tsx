interface InputProps {
  wrapperClassName?: string;
  placeholder?: string;
  type?: string;
}

export default function Input({
  wrapperClassName,
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <div className={wrapperClassName}>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full outline-none bg-transparent"
      />
    </div>
  );
}
