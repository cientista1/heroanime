import styled from 'styled-components'

interface bgProps {
  images: any
}
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`

export const BgImage = styled.div<bgProps>`
  background-image: url(${props => props.images.original});
  background-color: ${props => props.theme.colors.background2Color};
  position: absolute;
  top: 0;
  width: 100%;
  height: 80vh;
  filter: blur(9px);
  -webkit-filter: blur(10px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
`

export const Content = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  padding-top: 100px;
  justify-content: center;
`

export const Image = styled.img`
  width: 250px;
  height: 350px;
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 90%;
  max-width: 400px;
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  margin-bottom: 10px;
`

export const SubTitle = styled.h3`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.white};
  font-weight: 300;
`

export const AverageRating = styled.h2`
  margin-top: 10px;
  font-size: 20px;
  color: ${props => props.theme.colors.textColor};
  svg {
    color: ${props => props.theme.colors.yellow};
    margin-right: 6px;
  }
`

export const Button = styled.button`
  width: 160px;
  margin: 10px 0 0;
  border-radius: 25px !important;
`

export const Description = styled.p`
  color: ${props => props.theme.colors.white};
  margin-top: 10px;
  font-size: 0.9rem;
  &::before {
    content: 'Description :';
    font-size: 1rem;
    font-weight: bold;
  }
`

export const PlayerWrapper = styled.div`
  margin-left: 10px;
  width: 90%;
  height: 350px;
  max-width: 400px;
  border-radius: 4px;
`
