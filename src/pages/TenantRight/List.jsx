import { CirclePlus } from 'lucide-react'
const List = ({ item }) => {
    return (
        <li className='flex '>
            <CirclePlus
                size={20}
                className='text-red-500 shrink-0'
            />
            <span className='ml-2'> {item}</span>
        </li>
    )
}

export default List