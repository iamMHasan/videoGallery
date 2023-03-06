import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../../features/tags/tagSlice'
import Loading from '../Loading/Loading'
import Tag from './Tag'

const Tags = () => {
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTags())
  }, [dispatch])
  const { tags, isLoading, isError, errorMsg } = useSelector(state => state.tags)

  let content = 0;
  if (isLoading)
    content = <Loading />
  if (isError)
    content = <div className="col-span-12">some error happened <br /> {errorMsg}</div>
  if(!isLoading, !isError)
    content = tags.map(tag => <Tag
      key={tag.id}
      tag={tag}
    />)

  return (
    <section>
            <div
                class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
                {content}
            </div>
        </section>
  )
}

export default Tags
