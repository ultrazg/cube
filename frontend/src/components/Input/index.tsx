import React from 'react'
import './index.scss'

type IProps = {
  style?: React.CSSProperties
  label: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IProps> = ({ label, placeholder, onChange, style }) => {
  return (
    <div
      className="input-layout"
      style={style}
    >
      <div className="input-box">
        <div className="input-label">{label}</div>
        <div className="input-body">
          <input
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Input
