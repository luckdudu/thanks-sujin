import React from 'react'
import MenuNav from '../components/MenuNav'
import EventBannerCom from '../components/EventBannerCom'
import ScrollButton from '../components/ScrollButton'

const EventBanner = () => {
  return (
    <div>
      <MenuNav />
      <ScrollButton />
      <EventBannerCom />
    </div>
  )
}

export default EventBanner
