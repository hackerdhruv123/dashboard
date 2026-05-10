export default function SmallInput({
  placeholder,
  value,
  onChange,
}) {

  return (
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="h-14 border rounded-xl px-4 outline-none"
    />
  )
}