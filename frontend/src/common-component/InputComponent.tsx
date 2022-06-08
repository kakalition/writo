type Params = {
  id: string,
  label: string,
  type: string,
  placeholder: string,
  error: string | null
};

export default function InputComponent({
  id, label, type, placeholder, error,
}: Params) {
  return (
    <label
      className="flex flex-col text-lg text-gray-300 font-roboto"
      htmlFor={id}
    >
      {label}
      <div className="h-2" />
      <input
        className="p-3 bg-transparent border-[1px]  border-gray-600 focus:border-gray-400 focus:outline-0 font-roboto"
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
      />
      <div className={`${error !== null ? 'h-2' : null}`} />
      <span className="text-sm text-red-400">{error}</span>
    </label>
  );
}
