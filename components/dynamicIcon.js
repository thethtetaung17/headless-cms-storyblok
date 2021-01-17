import React from 'react'
import Mail from './mail'
import Phone from './phone'
import Twitter from './twitter'

const Components = {
  'twitter': Twitter,
  'mail': Mail,
  'phone': Phone,
}

const DynamicIcon = ({ type }) => {
  if (typeof Components[type] !== 'undefined') {
    const Component = Components[type]
    return <Component />
  }
  return null
}

export default DynamicIcon;
