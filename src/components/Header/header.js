import {useEffect} from 'react';
import './header.css';
const Header = ()=>{
    const handleBtn = ()=>{
        document.querySelector('nav').classList.toggle('show');
        document.querySelector('.ham-bar').classList.toggle('open');
    }
    useEffect(()=>{
    document.querySelectorAll('.nav-item').forEach((item)=>{
        item.addEventListener('click',()=>{
            document.querySelector('.active').classList.remove('active');
            item.classList.add('active');
        })
    })
    },[])
    return(
        <header className="header">
            <div className="top-header">
                <div className="logo">
                  <img src="https://sarafrazgroup.com/wp-content/uploads/elementor/thumbs/sarafraz-group3-final-group-01-1-pechk3tll1av0xcbig9j13gkoexdb9vhbtvdsh2e3s.png" alt="LOGO" />
                </div>
              <div className="header-items">
                 <nav>
                     <ul className='nav-list'>
                         <li className='nav-item active'><a href="#">صفحه نخست</a></li>
                         <li className='nav-item '><a href="#">فرصت های شغلی</a></li>
                         <li className='nav-item'><a href="#">فلسفه ما</a></li>
                         <li className='nav-item'><a href="#">تماس با ما</a></li>
                     </ul>
                 </nav>
                 <div className="ham-bar" onClick={()=> handleBtn()}></div>
                 <div className="input-control">
                     <input type="search" name="search" id="search" placeholder='جستجو کنید...'/>
                 </div>
              </div>
            </div>
            <div className="header-intro">
                <h1>شرکت هلدینگ توسعه و تجارت سرافراز</h1>
                <p>هلدینگ توسعه تجارت سرافراز نه تنها برای ایرانی آباد تر تلاش میکند بلکه رویکرد آن ساختن جهانی بهتر میباشد.</p>
            </div>
        </header>
    )
}

export default Header