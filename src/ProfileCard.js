import React from 'react'

const ProfileCard = (props) => {
    const {title, handle ,ImgSrc, description}=props //Destructring 
      return (
    <div className='card'>
        <div className="card-image"> 
            <figure className='image is-1by1'>
            <img src={ImgSrc}/>
            </figure>
        </div>
        {/* <h4>This is {title} & Handle {handle}</h4> */}
        <div  className='card-content'>
            <div className='media-content'>
            <p className='title is-4'>{title} </p>
            <p className='subtitle is-6'>{handle}</p>
            </div>
            <div className='content'>{description}</div>
        </div>
       
        
    </div>
  )
}

export default ProfileCard