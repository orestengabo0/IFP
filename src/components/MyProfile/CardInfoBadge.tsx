import React from 'react'

interface InfoCardProps {
    heading: string,
    role: string
}

const CardInfoBadge = ({heading, role}:InfoCardProps) => {
  return (
    <div className='bg-white p-2 pb-0 rounded-2'>
        <span className='text-success d-block fw-semibold'>{heading}</span>
        <span className='fw-semibold'>{role}</span>
    </div>
  )
}

export default CardInfoBadge