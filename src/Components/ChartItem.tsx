import styled from "styled-components"

export interface ChartItemType {
  id: number
  thumbnail: string
  title: string
  artist: string
}

const Item = styled.div`
  padding: 16px 16px;
  margin: 8px 20px;
  height: 50px;
  width: 318px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin-right: 20px;
`

const Title = styled.span`
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  display: block;
  color: white;
  margin-bottom: 4px;
`

const Artist = styled.span`
  height: 17px;
  font-size: 14px;
  display: block;
  color: #9a9a9a;
`

const Id = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: white;
`

const ChartItem = (props: ChartItemType) => {
  return (
    <Item>
      <div style={{ display: "flex" }}>
        <Thumbnail src={props.thumbnail}></Thumbnail>
        <div>
          <Title>{props.title}</Title>
          <Artist>{props.artist}</Artist>
        </div>
      </div>
      <Id>{props.id}</Id>
    </Item>
  )
}

export default ChartItem
