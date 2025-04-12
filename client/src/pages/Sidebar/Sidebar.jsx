import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import PetLine_Logo from '../../assets/icons/PetLineLogo.svg'
import Dashboard from '../../assets/icons/Dashboard.svg';
import Contacts from '../../assets/icons/Contact.svg';
import Products from '../../assets/icons/Products.svg'
import Cart from '../../assets/icons/Cart.svg';


export default function Sidebar() {

    const [activeIndex,setActiveIndex] = useState(null);
    const [activeSubMenu,setActiveSubMenu] = useState('');
    const navigate = useNavigate();

    const handleActiveMenu = (index,path) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
        navigate(path);
    }

    const handleSubMenu = (subItem) => {
        setActiveSubMenu((prev) => (prev === subItem ? '' : subItem));
    }
    const sidebar_menu = [
        { 
            text: 'Tableau de bord', 
            iconPath: Dashboard,
            path: '/' 
        },
        { 
            text: 'Contacts', 
            iconPath: Contacts,
            path: '/contact' ,
            subMenu: [
                { text: "Clients", path: "/" },
                { text: "Fournisseurs", path: "/" },
                { text: "Employés", path: "/" },
            ],
        },
        { 
            text: 'Produits', 
            iconPath: Products,
            path: '/products' 
        },
        { 
            text: 'Ventes', 
            iconPath: Cart,
            path: '/sales' 
        },
    ];

  return (
    <div className='Sidebar'>
        <div className='Sidebar-Header'>
            <img alt='Logo' src={PetLine_Logo} className='Sidebar-header-Logo' />
        </div>
        <div className='Sidebar-body'>
            <ul>
            {sidebar_menu.map((item, index) =>(
                    <li key={index} className={`menu-item ${activeIndex === index ? 'active' : ''}`}
                        
                    >
                        {!item.subMenu ? (
                            <div className='menu-item-content' onClick={() => {handleActiveMenu(index,item.path);setActiveSubMenu('')}}>
                                <img src={item.iconPath} alt={item.text} />
                                <span>{item.text}</span>
                            </div>
                            )
                             : (
                                <div className={`submenu ${activeIndex === index ? 'active' : ''}`}  >
                                    <div className='menu-item-content' onClick={() => handleActiveMenu(index,item.path)}>
                                        <img src={item.iconPath} alt={item.text} />
                                        <span className='submenu-text'>{item.text}</span>
                                    </div>
                                    
                                    {activeIndex === index ? (
                                        <ul className='submenu-list'>
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <li className={`submenu-item ${activeSubMenu === subItem.text ? 'active' : ''}`} key={subIndex} onClick={() => handleSubMenu(subItem.text)}>
                                                {activeSubMenu === subItem.text && <span className="submenu-indicator"></span>}
                                                {subItem.text}
                                            </li>
                                        ))}
                                    </ul>
                                    ) : ''}
                                    
                                </div>
                             )}
                            {/* <img src={item.iconPath} alt={item.text} />
                            <span>{item.text}</span> */}
                    </li>
                ))}
            </ul>
        </div>
        <div className='Sidebar-footer'>sidebar footer</div>
    </div>
  )
}
