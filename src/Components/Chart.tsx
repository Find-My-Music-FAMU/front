import React from "react"
import ChartItem, { ChartItemType } from "./ChartItem"

type Props = {
  chartList: ChartItemType[]
}

const Chart = (props: Props) => {
  return (
    <div>
      {props.chartList.map(it => {
        return (
          <ChartItem
            id={it.id}
            thumbnail={it.thumbnail}
            title={it.title}
            artist={it.artist}
          />
        )
      })}
    </div>
  )
}

export default Chart
