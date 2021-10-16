

import './footer.css';



const Footer = ()=>{

    return(
        <footer className='footer'>
         <div className="footer-group contact">
             <h3>راه های ارتباطی</h3>
             <ul>
                 <li className="contact-item">ایران، تهران، اتوبان چمران، جنب مترو نواب، برج گردان شمالی، طبقه 4 و 5</li>
                 <li className="contact-item">09121446629</li>
                 <li className="contact-item">info@sarafrazgroup.com</li>
             </ul>
         </div>
         <div className="footer-group short-links">
             <h3>لینک های کوتاه</h3>
             <ul>
                 <li className="link-item"><a href="#">همکاری با ما</a></li>
                 <li className="link-item"><a href="#">فرصت های شغلی</a></li>
                 <li className="link-item"><a href="#">صفحه نخست</a></li>
                 <li className="link-item"><a href="#">تماس باما</a></li>
                 <li className="link-item"><a href="#">فلسفه ما</a></li>
             </ul>
         </div>
         <div className="footer-group copaneis">
             <h3>شرکت های زیرمجموعه</h3>
             <ul>
                 <li className="company-item"><a href="#">بیلبورد</a></li>
                 <li className="company-item gray"><a href="#">سرافراز وب</a></li>
                 <li className="company-item"><a href="#">شرکت تبلیغاتی فرامارکتینگ</a></li>
                 <li className="company-item"><a href="#">تاپ پرس</a></li>
                 <li className="company-item gray"><a href="#">ایران شیمی</a></li>
                 <li className="company-item"><a href="#">شرکت تامین تجهیزات نفت و گاز پترو تجهیز</a></li>
             </ul>
         </div>
         <div className="develop-by">
             <h3>develop-by: <a href="https://github.com/sky-1991-sia" target='_blank'>sky-1991-sia</a></h3>
         </div>
        </footer>
    )
}


export default Footer