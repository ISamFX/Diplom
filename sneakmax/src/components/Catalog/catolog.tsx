
import styled from "./style.module.scss"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
import { SubmitHandler } from "react-hook-form"
import { fetchSneak } from "../../redux/sneak/sneakSlice"
import { sneakSelector } from "../../redux/sneak/sneakSelector"
import {Pagination} from "./Pagination"
import FilterForm  from "./FilterForm";
import { FilterFormValues } from "./FilterForm";
import SneakerList from "./SneakerList";
import { RootState, useAppDispatch } from "../../store";

function Catalog() {
    const dispatch = useAppDispatch();
    const sneak = useSelector((state: RootState) => sneakSelector(state));
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([1850, 25768]);
    // const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(fetchSneak({ sizes: [], minPrice: 1850, maxPrice: 25768, gender: "" }));
    }, [dispatch]);
  
    const onSubmit: SubmitHandler<FilterFormValues> = (data) => {
    const filterData = {
        ...data,
        sizes: selectedSizes,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
      };
      // dispatch(resetData());
      dispatch(fetchSneak(filterData));
    };
  
    const handleReset = () => {
      // dispatch(resetData());
      dispatch(fetchSneak({ sizes: [], minPrice: 1850, maxPrice: 25768, gender: "" }));
      setSelectedSizes([]);
    };
  
    const handlePriceUpdate = (values: string[]) => {
      setPriceRange([Math.round(Number(values[0])), Math.round(Number(values[1]))]);
    };
  
    const toggleSizeSelection = (size: string) => {
      setSelectedSizes((prevSelectedSizes) =>
        prevSelectedSizes.includes(size)
          ? prevSelectedSizes.filter((s) => s !== size)
          : [...prevSelectedSizes, size]
      );
    };

      // const submitBasket = (item: SneakMember) => {
      // dispatch(addProduct(item));
    // };
    // 
    
    return (
    <>
      <div className={styled.container_catalog} id="catalog">
        <h4 className={styled.heading_cat}>Каталог</h4>
      </div>  
      <div className={styled.product_cat}> 
        <div className={styled.Nouislider}>
          <FilterForm onSubmit={onSubmit} onReset={handleReset}
                      onPriceUpdate={handlePriceUpdate} selectedSizes={selectedSizes}
                      toggleSizeSelection={toggleSizeSelection}
                      priceRange={priceRange} />
        </div>                         
            {/* {sneak.loading && sneak.data.length === 0 ? ( */}
              <div className={styled.filter_message}>  
                <p>...извините, такого размера нет в наличии...</p>
              </div>   
            {/* ) : (  */}
                    <SneakerList/>
                {/* )} */}
          <Pagination />
      </div>    
    </>    
      );
    }
  export default Catalog;