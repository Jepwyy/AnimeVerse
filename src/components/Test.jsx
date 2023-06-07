import React, { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

const Test = () => {
  return (
    <div>
      <ReactPlayer
        url='https://ta-002.adesicdn.com/1ab5d45273a9183bebb58eb74d5722d8ea6384f350caf008f08cf018f1f0566d0cb82a2a799830d1af97cd3f4b6a9a81ef3aed2fb783292b1abcf1b8560a1d1aa308008b88420298522a9f761e5aa1024fbe74e5aa853cfc933cd1219327d1232e91847a185021b184c027f97ae732b3708ee6beb80ba5db6628ced43f1196fe/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.360.m3u8'
        controls={true}
        width='100%'
        height='auto'
      />
    </div>
  )
}

export default Test
