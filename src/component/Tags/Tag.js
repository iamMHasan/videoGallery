import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tagRemoved, tagSelected } from '../../features/filter/filterSlice'

const Tag = ({ tag }) => {
    const { id, title } = tag
    const { tags: selectedTags } = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const isSelected = selectedTags.includes(title) 
    const handleSelect = () => {
        isSelected ? dispatch(tagRemoved(title)) : dispatch(tagSelected(title))
    }
    const style = isSelected ? "bg-blue-600 text-blue-600 px-4 py-1 rounded-full cursor-pointer text-white" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
    return (
        <div
            onClick={handleSelect}
            className={style}
        >
            {title}
        </div>
    )
}

export default Tag
