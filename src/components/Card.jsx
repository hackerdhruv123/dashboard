export default function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border">
      <h3 className="text-3xl font-semibold text-gray-800 mb-6">
        {title}
      </h3>

      {children}
    </div>
  )
}