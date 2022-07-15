import Container from '../_utils/container'

const NotFound = ({ name }) => {
  return (
    <Container>
      <p className="text-center font-bold">"{name}" is not a Pokemon</p>
    </Container>
  )
}

export default NotFound
