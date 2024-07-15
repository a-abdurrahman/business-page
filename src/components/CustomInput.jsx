export default function CustomInput({ type, label }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id="label"
        className="h-10 border-2 rounded-lg bg-[#f8f8f8]"
      />
    </div>
  );
}
