import { ChevronDown } from 'lucide-react'

export default function Select({ value }) {
  return (
    <div className="h-14 border rounded-xl px-4 flex items-center justify-between text-gray-700">
      <span>{value}</span>

      <ChevronDown size={18} />
    </div>
  )
}