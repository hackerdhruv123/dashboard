export default function TableRow({
  subject,
  min,
  max,
  onDelete,
}) {

  return (
    <tr className="border-t">

      <td className="p-4">
        {subject}
      </td>

      <td className="p-4">
        {min}
      </td>

      <td className="p-4">
        {max}
      </td>

      <td className="p-4">

        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Delete
        </button>

      </td>

    </tr>
  )
}