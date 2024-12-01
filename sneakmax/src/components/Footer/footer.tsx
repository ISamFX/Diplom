import styled from "./style.module.scss"

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


const Footer =() => {
  return (
    <footer className={styled.Footer}>
        <nav> 
              <p className={styled.footer_logo}>SneakMax</p>                 
             <ul className={styled.nav_list}>
                 {navList.map((item) => (
                  <li key={item.id} className={styled.nav_bnt} >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}                    
              </ul> 
        </nav>
    </footer>
  );
}

export default Footer;
