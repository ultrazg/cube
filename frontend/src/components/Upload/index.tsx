import React from 'react'
import { Button } from '@/components'
import './index.scss'

type IProps = {
  style?: React.CSSProperties
  label: string
  placeholder?: string
}

const Upload: React.FC<IProps> = ({ label, style }) => {
  return (
    <div
      className="upload-layout"
      style={style}
    >
      <div className="upload-box">
        <div className="upload-label">{label}</div>
        <div className="upload-body">
          <Button>···</Button>
        </div>
      </div>
    </div>
  )
}

export default Upload
