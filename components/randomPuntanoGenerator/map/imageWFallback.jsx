import { useState } from 'react'
import Image from 'next/image'

const ImageWFallback = (props) => {
  const { src, fallbackSrc, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default ImageWFallback
