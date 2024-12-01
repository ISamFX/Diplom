import styled from "./style.module.scss"
// import { useState } from "react"
// import { useSelector } from "react-redux"
// import {ScrollLink} from "react-scroll"
import busket from "../../icons/Vector.svg"

interface NavItem {
  title: string;
  id: string;
}

const navList: NavItem[] = [
  { title: "Каталог", id: "catalog" },
  { title: "О нас", id: "about" },
  { title: "Подбор товара", id: "select" },
  { title: "Наша команда", id: "team" },
  { title: "Доставка и оплата", id: "questions" },
  { title: "Контакты", id: "contacts" },
];

const Hero =() =>{
    return (        
        <div className={styled.hero_container}>
                <nav>                  
                    <p className={styled.logo}>SneakMax</p>
                    {/* <ScrollLink to="catalog" spy={true} smooth={true} offset={50} duration={500}> */}
                        {/* Каталог */}
                    {/* </ScrollLink> */}
                    <ul className={styled.nav_list}>
                        {navList.map((item) => (
                            <li key={item.id} className={styled.nav_bnt} >
                                <a href={`#${item.id}`}>{item.title}</a>
                            </li>
                        ))}                    
                    </ul> 
                    <button className={styled.basket_bnt}>
                            Корзина <img src={busket} alt="Корзина" />
                            {/* <span>{basketCount}</span> */}
                    </button>
                </nav>
                <div className={styled.hero_textcontainer}> 
                    <h2 className={styled.hero_heading}>Кроссовки известных брендов с доставкой по России и СНГ</h2>
                    <p className={styled.hero_description}>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по
                    низким ценам</p>
                    <div className={styled.btn_hero_block}>
                        <button className={styled.btn_hero}>Перейти к покупкам</button>
                    </div>
                    <p className={styled.back_text}>SneakMax</p>
                </div>    
        </div>
    )
}

export default Hero;
