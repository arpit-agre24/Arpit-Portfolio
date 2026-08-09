import React from 'react'

const Video = (props) => {
  return (
    <div>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-3xl shadow-2xl">
        <source src={props.path} type="video/mp4" />
    </video>
    </div>
  )
}

export default Video