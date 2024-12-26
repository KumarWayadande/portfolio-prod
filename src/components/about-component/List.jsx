
export default function List(prop) {
  return (
    <li className='list-disc sub-text my-2 text-gray-500 text-lg dark:text-gray-400'>
        {prop.children}
    </li>
  )
}
