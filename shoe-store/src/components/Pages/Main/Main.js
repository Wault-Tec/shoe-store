import TopSales from "../../TopSales/TopSales"
import Catalog from "../Catalog/Catalog"

const Main = () => {
    return (
        <>
        <TopSales />
        <Catalog searchOn={false} />
        </>
    )
}

export default Main