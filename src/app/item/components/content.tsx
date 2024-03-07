import { FC, useState } from 'react'
import { Chair } from './Chair'

const Content: FC = () => {
  const [hovered, setHover] = useState(false)

  return <Chair />
}

export default Content
