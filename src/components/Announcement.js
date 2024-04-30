import React from 'react'

export default function Announcement({ header, subtext }) {
  return (
    <div className='announcement-background'>
        <p className='announcement-header'>{header}</p>
        <p className='announcement-subtext'>{subtext}</p>
    </div>
)
}
