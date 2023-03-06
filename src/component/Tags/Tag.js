import React from 'react'

const Tag = ({tag}) => {
    const {id, title} = tag
    return (
        <div
            class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
        >
            {title}
        </div>
    )
}

export default Tag
