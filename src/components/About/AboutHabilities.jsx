import React from 'react'

const AboutHabilities = ({title, subTitle_1, description_1, subTitle_2, description_2}) => {
  return (
    <div>
      <div className='pb-9'>
      <h4>{title}</h4>
      <div className='border-2'></div>
      </div>
      <div className='pb-9'>
        <p className='body_1_bold'>{subTitle_1}</p>
        <p className='body_1_regular'>{description_1}</p>
      </div>
      <div className='pb-4'>
        <p className='body_1_bold'>{subTitle_2}</p>
        <p className='body_1_regular'>{description_2}</p>
      </div>
    </div>
  )
}

export default AboutHabilities
