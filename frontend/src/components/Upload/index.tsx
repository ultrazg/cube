import React, { useState } from 'react'
import { Button } from '@/components'
import { SelectFile } from '@/bridge/io'
import './index.scss'

type IProps = {
  style?: React.CSSProperties
  label: string
  placeholder?: string
}

const Upload: React.FC<IProps> = ({ label, style }) => {
  const [filePath, setFilePath] = useState<string>('')

  const handleSelectFile = () => {
    SelectFile()
      .then((res) => {
        console.log('res', res)
        setFilePath(res)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  return (
    <div
      className="upload-layout"
      style={style}
    >
      <div className="upload-box">
        <div className="upload-label">{label}</div>
        <div className="upload-body">
          <Button onClick={handleSelectFile}>
            {filePath ? filePath : '···'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Upload
