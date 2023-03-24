import { Column, Text, Button, Input } from 'components'
import { QRCodeSVG } from 'qrcode.react'

const Home = () => {
  const obj = {
    name: '',
    linkedin: '',
    github: ''
  }
  return (
    <Column p='2rem'>
      <Text variant='big' fontWeight='bold' mb='16px'>
        QR Code Image Generator
      </Text>
      <Input name='name' value={obj.name} />
      <Input name='linkedin' />
      <Input name='github' />
      <Button fontWeight='bold' width='340px' mt='16px'>
        Generate Image
      </Button>
      <QRCodeSVG value={JSON.stringify(obj.github)} />
    </Column>
  )
}

export default Home
