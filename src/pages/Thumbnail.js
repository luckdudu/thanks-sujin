import React from 'react'
import MenuNav from '../components/MenuNav'
import ThumbnailCom from '../components/ThumbnailCom'
import AddSome from '../components/AddSome'
import ScrollButton from '../components/ScrollButton'

const Thumbnail = () => {
  return (
    <div>
        <MenuNav />
        <ScrollButton />
        <ThumbnailCom />
        <AddSome />
    </div>
  )
}

export default Thumbnail
