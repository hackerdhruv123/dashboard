import {
  LayoutDashboard,
  Users,
  BookOpen,
  Building2,
  Clock3,
  Settings,
  LogOut,
} from 'lucide-react'

import SidebarItem from './SidebarItem'
export default function Sidebar({ handleLogout }){
  return (
    <div className="w-[240px] bg-gradient-to-b from-[#0f172a] to-[#111827] text-white flex flex-col">

      <div className="h-20 flex items-center px-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
            🎓
          </div>

          <h1 className="text-xl font-semibold">
            Smart Scheduler
          </h1>
        </div>
      </div>

      <div className="flex-1 py-4 px-3 space-y-2">
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />

        <SidebarItem icon={<Users size={20} />} text="Faculty" />

        <SidebarItem icon={<BookOpen size={20} />} text="Subjects" />

        <SidebarItem icon={<Building2 size={20} />} text="Rooms" />

        <SidebarItem icon={<Clock3 size={20} />} text="Timetable" />

        <SidebarItem icon={<Settings size={20} />} text="Constraints" />
      </div>
      <div
  onClick={handleLogout}
  className="flex items-center gap-4 px-5 py-4 rounded-xl cursor-pointer transition-all text-red-300 hover:bg-red-500/20"
>
  <LogOut size={20} />

  <span className="text-lg">
    Logout
  </span>
</div>
    </div>
  )
}