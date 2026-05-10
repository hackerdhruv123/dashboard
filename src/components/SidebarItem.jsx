export default function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-4 px-5 py-4 rounded-xl cursor-pointer transition-all
      ${
        active
          ? 'bg-white/10 text-white'
          : 'text-gray-300 hover:bg-white/5'
      }`}
    >
      {icon}

      <span className="text-lg">
        {text}
      </span>
    </div>
  )
}