import styled from "./style.module.scss"
import React, { useState } from "react"
import Instagram from "../../icons/Instagram.svg"
import vk from "../../icons/VK.svg"
import Question from "../../icons/question.png"
import Ellipse11 from "../../img/Ellipse11.png"
import MapYA from "../../img/Rectangle32.png"
import Fon from "../../img/Rectangle42.png"
import Exclude from "../../icons/Exclude.png"
import ExcludeRed from "../../icons/ExcludeRed.png"
import Tooltip from "../../img/Tooltip.png"

const Contacts: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div>
            <div className={styled.container} id="contacts">
                 <img  src={Fon} alt="фон" className={styled.Fon}/>     
            </div>
            <div>
                <h2 className={styled.Heading}>Контакты</h2>
                <p className={styled.text1}>Главный офис</p>
                        <button onMouseOver={() => setIsHovered(true)}
                                onMouseOut={() => setIsHovered(false)}>
                            <img  src={Question} alt="Вопрос" className={styled.Question}/>
                            <img  src={Ellipse11} alt="Эллипс" className={styled.Ellipse11}/>
                        </button>
                        {isHovered && (                        
                        <img  src={Tooltip} alt="Пояснение" className={styled.Tooltip}/>
                        )}
                <h2 className={styled.text2}>+7 800 789 89 89</h2>
                <p className={styled.text3}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
                <p className={styled.text4}>отдел продаж</p>
                <h2 className={styled.text5}>+7 800 789 89 89</h2>
                <p className={styled.text6}>г. Санкт-Петербург, Комсомольская, 43 к1</p>  
                <img  src={vk} alt="VK" className={styled.iconVK}/> 
                <img  src={Instagram} alt="Instagram" className={styled.iconInstagram}/>  
                <img  src={MapYA} alt="Карта" className={styled.MapYA}/> 
                <img  src={Exclude} alt="Точка 1" className={styled.Exclude1}/> 
                <img  src={Exclude} alt="Точка 2" className={styled.Exclude2}/>  
                <img  src={ExcludeRed} alt="Точка 3" className={styled.Exclude3}/>          
            </div>

        </div>
    )
}

export default Contacts;

