import React from 'react'
import ReactSoundcloud from "./SoundCloud";


const Audio = () => {
    return (
        <div className="Acontainer">
         <div className="Rcontainer">
         <div className="block">
          
           <ReactSoundcloud />
           <ReactSoundcloud url="https://soundcloud.com/tn-si/rayne-p2" />
           <ReactSoundcloud url="https://soundcloud.com/tn-si/on-the-wayblack-batman" />
           <ReactSoundcloud url="https://soundcloud.com/tn-si/sweettalk" />
           <ReactSoundcloud url="https://soundcloud.com/tn-si/llnlong-liv-nip" />
           <ReactSoundcloud url="https://soundcloud.com/tn-si/anythingback-to-manda-bay" />
           <ReactSoundcloud url="https://soundcloud.com/tn-si/rayne" />
         </div>
       </div>
        </div>
    )
}

export default Audio