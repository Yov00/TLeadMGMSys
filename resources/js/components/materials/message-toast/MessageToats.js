import React from 'react'

const MessageToats = (props) => {
  return (
    <div className={`message-toast ${props.className}`}>
      {props.message}
    </div>
  )
}

export default MessageToats
