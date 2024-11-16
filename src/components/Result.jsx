import React from 'react'

const Result = () => {
  return (
    <div>
      <img src='data:image/jpeg;base64,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'
      alt='pic'/>
      <h2>Thanks You! Diamond will be added in your account before <code style={{color: 'purple'}}>12 hours!</code></h2>
      <a style={{marginLeft: '20%', fontSize: '21px'}} href='/'>back-></a>
    </div>
  )
}

export default Result