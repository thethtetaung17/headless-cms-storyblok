import React from 'react'
import SbEditable from 'storyblok-react'

const Teaser = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="py-10">
        <h2>{blok.headline}</h2>
        <img src={blok.image.filename} alt={blok.image.alt} className="w-full" />
      </div>
    </SbEditable>
  )
}

export default Teaser;
