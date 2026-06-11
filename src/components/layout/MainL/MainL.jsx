import Style from "./MainL.module.css"
import Home from "../../../pages/Home/Home"
import Footer from "../Footer/Footer"
import ProductCard from "../../common/ProductCard/ProductCard"
import  Pagination from "../../common/Pagination/Pagination"
import SortFilter from '../../common/SortFilter/SortFilter'
function MainL(){
    return <div className={Style.mainL}>
                <Home/>
<div className={Style["main"]}>                <SortFilter></SortFilter>
                <div className={Style["pdr-card"]}>
                    {Array(10).fill(0).map(data=><ProductCard></ProductCard>)}
                </div></div>
                <Pagination></Pagination>
                <Footer></Footer>
    </div>
}
export default MainL