import { useEffect, useState } from "react";
import useJsonFetch from "../../hooks/useJsonFetch";
import ShoeCard from "../ShoeCard/ShoeCard";


const TopSales = () => {
  const url = ' http://localhost:7070/api/top-sales';
  const [data, loading, error] = useJsonFetch(url)
  const [items, setItems] = useState([])

  useEffect(() => {
    if(data) {
      console.log('data', data)
      setItems(data)
    }
  }, [data])


    return (
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>
          <div className="row">
          {items.map((item) => <ShoeCard item={item} />)}
          </div>
      </section>
    )
}

export default TopSales