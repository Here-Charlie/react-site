import React from 'react'

export default function Feature({ image, header, subtext, orientation='left' }) {



  return (
    <>    
      { orientation === "left" && 
      <div className='feature'>
          <img className='feature-image' alt='feature' src={image} />

          <section className='feature-text'>
              <p className='feature-text-header'>{header}</p>
              <p className='feature-text-subtext'>{subtext}</p>
          </section>
      </div>
      }  

      { orientation === "right" && 
      <div className='feature'>
          <section className='feature-text'>
              <p className='feature-text-header'>{header}</p>
              <p className='feature-text-subtext'>{subtext}</p>
          </section>

          <img className='feature-image' alt='feature' src={image} />
      </div>
      }  
    </>  
  )
}
