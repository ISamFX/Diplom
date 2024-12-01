import styled from "./style.module.scss"
import { useSelector } from "react-redux"
import { SneakMember } from "../../redux/sneak/sneakSlice"
import { sneakSelector } from "../../redux/sneak/sneakSelector"
import { RootState } from "../../store"
// import SneakerItem from "./SneakerItem"


// type SneakerListProps = {
//   item: (item: SneakMember) => void
//   onViewSneak: (id: string) => void;
//   onAddBasket: (item: SneakMember) => void;
// }
// 
function SneakerList() {
 
  const sneak = useSelector((state: RootState) => sneakSelector(state));

  return (
    <ul className={styled.product_cat_sneak}>
      {sneak.data.map((item: SneakMember) => (
        <li key={item.id} className={styled.list_sneak}>
             <img src={item.imgUrl} alt={item.title} className={styled.catalog_image} />
                {/* <div className={styled.overlay_buttons}> */}
                    {/* <button className={styled.overlay_buttons} onClick={() => onViewSneak(item.id.toString())}> */}
                        {/* <img className={styled.view_img_btn} src={view} alt="Просмотр" /> */}
                    {/* </button> */}
                    {/* <button className={styled.overlay_buttons} onClick={() => onAddBasket(item)}> */}
                        {/* <img className={styled.basket_img_btn} src={basket} alt="Добавить" /> */}
                    {/* </button> */}
                {/* </div> */}
            <p className={styled.catalog_title}> {item.title}</p>
            <p className={styled.catalog_price}> {item.price} ₽</p>
        </li>  
      ))}
    </ul>
  );
}

export default SneakerList;
