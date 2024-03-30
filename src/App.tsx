import styled from "styled-components"
import Chart from "./Components/Chart"
import { ChartItemType } from "./Components/ChartItem"

const chartItemList: ChartItemType[] = [
  {
    id: 4939293,
    thumbnail:
      "https://image.bugsm.co.kr/album/images/50/40948/4094833.jpg?version=20240209014851.0",
    title: "Love 119",
    artist: "RIIZE",
  },
  {
    id: 8399293,
    thumbnail:
      "https://image.bugsm.co.kr/album/images/50/40935/4093522.jpg?version=20240307015748.0",
    title: "To.X",
    artist: "태연(TAEYEON)",
  },
  {
    id: 3913293,
    thumbnail:
      "https://image.bugsm.co.kr/album/images/50/40824/4082425.jpg?version=20231215003716.0",
    title: "Ditto",
    artist: "NewJeans",
  },
  {
    id: 4658293,
    thumbnail:
      "https://image.bugsm.co.kr/album/images/50/4005/400586.jpg?version=20230601000615.0",
    title: "첫눈",
    artist: "EXO",
  },
  {
    id: 9402293,
    thumbnail:
      "https://image.bugsm.co.kr/album/images/50/40929/4092948.jpg?version=20240307022045.0",
    title: "Drama",
    artist: "aespa",
  },
  {
    id: 1942293,
    thumbnail:
      "https://image.bugsm.co.kr/album/images/50/40926/4092661.jpg?version=20240209023306.0",
    title: "MANIAC",
    artist: "VIVIZ(비비지)",
  },
]

type Props = {}

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: white;
  margin-left: 36px;
  margin-bottom: 16px;
`

const GenreTab = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 36px;

  & > span {
    font-size: 24px;
    letter-spacing: -5%;
    color: white;
    font-weight: 500;
  }

  & > span:nth-child(1) {
    box-shadow: 0 1.5px 0 0 #0500ff, 0 3px 0 0 #ff3d00;
  }
`

const App = (props: Props) => {
  return (
    <>
      <GenreTab>
        <span>EDM</span>
        <span>R&B</span>
        <span>City Pop</span>
        <span>Indie</span>
      </GenreTab>
      <img
        style={{
          width: "323px",
          height: "323px",
          borderRadius: "20px",
          marginLeft: "36px",
          marginTop: "24px",
          marginBottom: "48px",
        }}
        src="https://www.rockitrecordplayers.com.au/wp-content/uploads/2021/10/Billie-Eilish-Dont-Smile-At-Me-Vinyl-album-UM-5791948I.jpg"
      ></img>
      <div>
        <Title>최근 노래방 업데이트</Title>
        <Chart chartList={chartItemList} />
      </div>
    </>
  )
}

export default App
