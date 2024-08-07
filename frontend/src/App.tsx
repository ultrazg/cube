import { Input, Button, Divider, Upload } from './components'
import { Version } from './bridge/version'
import './app.scss'
import { useEffect, useState } from 'react'

const App = () => {
  const [version, setVersion] = useState<string>('-')

  useEffect(() => {
    Version()
      .then((res: string) => {
        setVersion(res)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }, [])

  return (
    <div className="app-layout">
      <Input
        style={{ marginBottom: '1rem' }}
        label="本地代理端口"
        placeholder="请输入"
        onChange={(e) => console.log(e.target.value)}
      />

      <Upload
        label="上传图片"
        placeholder="请输入"
      />

      <Button
        style={{ marginTop: '1rem' }}
        onClick={() => console.log('you clicked')}
      >
        生成
      </Button>

      <Divider />

      <div className="content">
        <textarea readOnly />
      </div>

      <div className="footer">Cube by Hexdr3am v{version}</div>
    </div>
  )
}

export default App
