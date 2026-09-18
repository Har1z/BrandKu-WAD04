import { useEffect } from "react";
import { getData } from "../api/getData"
import { Card } from "./card";

export const CardGrid = ({features}) => {

  useEffect(() => {
    const data = getData()
    console.log(data, 'data')
  })

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-2 border-slate-400 p-4">
      {
        features.map((data) => {
          return(
            <Card key={data.id} icon={data.icon} title={data.title} subtitle={data.subtitle}/>
          )
        })
      }
    </div>
  )
}

export default CardGrid