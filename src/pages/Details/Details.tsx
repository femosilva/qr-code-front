import { Button, Column, Row, Text } from 'components'

const Details = () => {
  return (
    <Column p='2rem'>
      <Text variant='regular' mb='16px'>
        Hello, my is
      </Text>
      <Text variant='big' fontWeight='bold' mb='16px'>
        My history
      </Text>
      <Text variant='regular' mb='16px'>
        Lorem ipsum dolor sit amet, consectetur
      </Text>
      <Row>
        <Button fontWeight='bold' width='140px' mt='16px' mr='16px'>
          Github
        </Button>
        <Button fontWeight='bold' width='140px' mt='16px'>
          Linkedin
        </Button>
      </Row>
    </Column>
  )
}

export default Details
