import styled from "./style.module.scss"
import Nouislider from "nouislider-react"
import "nouislider/distribute/nouislider.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { useEffect } from "react"

export type FilterFormValues = {
  gender: string
  sizes: string[]
};

type FilterFormProps = {
  onSubmit: SubmitHandler<FilterFormValues>
  onReset: () => void;
  onPriceUpdate: (values: string[]) => void
  selectedSizes: string[]
  toggleSizeSelection: (size: string) => void
  priceRange: [number, number]
};

function FilterForm ({ onSubmit, onReset,  onPriceUpdate,
         selectedSizes, toggleSizeSelection, priceRange,}: FilterFormProps) {
  
        const { handleSubmit, register, setValue } = useForm<FilterFormValues>();

        useEffect(() => {setValue("sizes", selectedSizes);},
                         [selectedSizes, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className={styled.find_catalog}>
            <h4 >Подбор <br></br> по параметрам</h4> 
        </div>
        <div className={styled.txt_find_catalog}>
            <p >Цена, руб</p>
        </div> 
        <div className={styled.price_range_display}>
          <p className={styled.catalog_range_price}>{priceRange[0]}</p>
          <p className={styled.catalog_range_price}>{priceRange[1]}</p>
        </div >
        <div className={styled.range_display}>
            <Nouislider
            range={{ min: 1850, max: 120768 }}
            start={ [1850, 100768] }
            onUpdate={ onPriceUpdate }
            connect  />
        </div>  
        <div className={styled.catalog_description1}>
             <p >Пол</p>
        </div> 
        <div className={styled.catalog_gender}>
            <div className={styled.input_discrishion}>
             <p className={styled.input_checkbox}> 
                <input className={styled.input_label}
                type="checkbox"
                {...register("gender")}
                 value="Мужской"
                 id="male"  />
                <label htmlFor="male" >мужской </label>
             </p>
            </div>  
            <div className={styled.input_discrishion}>
             <p className={styled.input_checkbox}>           
                <input className={styled.input_label}
                type="checkbox"
                {...register("gender")}
                value="Женский"
                 id="female"  />
                <label htmlFor="female" > женский </label>
             </p>
            </div> 
        </div>         
        <p className={styled.catalog_description2}>Размер</p>
        <div >
              <ul  className={styled.catalog_size}>
                <li 
                    key={"35"} 
                    onClick={() => toggleSizeSelection("35")} >       
                    <p className={styled.r1}>35</p>  
                </li>    
                <li  key={"36"} 
                    onClick={() => toggleSizeSelection("36")} > 
                    <p className={styled.r2}>36</p>   
                </li>    
                <li  key={"37"} 
                    onClick={() => toggleSizeSelection("37")} >   
                   <p className={styled.r3}>37</p>   
                </li>    
                <li className={styled.r4} key={"38"} 
                    onClick={() => toggleSizeSelection("38")} >   
                      <p>38</p>   
                </li>    
                <li className={styled.r5} key={"39"} 
                    onClick={() => toggleSizeSelection("39")} >  
                    <p>39</p>   
                </li>    
                <li className={styled.r6} key={"40"} 
                    onClick={() => toggleSizeSelection("40")} >   
                     <p>40</p>   
                </li>    
                <li className={styled.r7} key={"41"} 
                    onClick={() => toggleSizeSelection("41")} >  
                    <p>41</p>   
                </li>    
                <li className={styled.r8} key={"42"} 
                     onClick={() => toggleSizeSelection("42")} > 
                     <p>42</p>   
                </li>  
                <li className={styled.r9} key={"43"} 
                    onClick={() => toggleSizeSelection("43")} > 
                    <p>43</p>   
                </li>  
              </ul> 
              <input type="hidden" />   
        </div> 
        <div className={styled.catalog_btns}>
            <button  type="button" className={styled.catalog_btn} >
                Применить
            </button>
            <button type="button" className={styled.catalog_reset} onClick={onReset}>
                 сбросить
            </button>
        </div>
      </div>
    </form>
  );
}
export default FilterForm;