import {
  Search,
  Bell,
  ChevronDown,
} from 'lucide-react'

export default function TopNavbar({ role }) {
  return (
    <div className="h-20 bg-white border-b flex items-center justify-between px-10">

      <h1 className="text-3xl font-semibold text-gray-800">
        Smart Scheduler
      </h1>

      <div className="flex items-center gap-6">

        <div className="w-[320px] h-12 bg-gray-100 rounded-xl flex items-center px-4 gap-3">
          <Search className="text-gray-400" size={20} />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-gray-600"
          />
        </div>

        <Bell className="text-gray-500" size={22} />

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <span className="font-medium text-gray-700">
          {role}
          </span>

          <ChevronDown size={18} className="text-gray-500" />
        </div>
      </div>
    </div>
  )
}