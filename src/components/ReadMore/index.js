// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  ContentContainer,
  Title,
  Subtitle,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [data, setData] = useState(false)
  const readMoreMsg = data
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const onClickTxt = () => setData(prevState => !prevState)

  return (
    <MainContainer>
      <Title>React Hooks</Title>
      <Subtitle>Hooks are a new addition to React</Subtitle>
      <ContentContainer>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />

        <Description>{readMoreMsg}</Description>
        <Button type="button" value={data} onClick={onClickTxt}>
          {data ? 'Read Less' : 'Read More'}
        </Button>
      </ContentContainer>
    </MainContainer>
  )
}

export default ReadMore
