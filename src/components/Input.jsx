export default function Input({
  label,
  placeholder,
  value,
  onChange,
}) {

  return (
    <div>
      <label className="block mb-3 text-lg text-gray-700">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-14 border rounded-xl px-4 outline-none"
      />
    </div>
  )
}