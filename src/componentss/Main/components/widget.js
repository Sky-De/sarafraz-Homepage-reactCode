import { useEffect } from 'react';
import './widget.css';

const Widget = ()=>{
    useEffect(()=>{
    const allItems = document.querySelectorAll('h5');
    allItems.forEach((i)=>{
        i.addEventListener('click',()=>{

            document.querySelector('li.selected').classList.remove('selected');
            document.querySelector('img.active').classList.remove('active');
            i.nextSibling.classList.add('active');
            i.parentNode.classList.add('selected');
        })
    })
    },[])
    return(
        <div className="widget-con">
            <ul>
                <li className='selected'>
                    <h5>بیلبورد</h5>
                    <img className='active' src="https://sarafrazgroup.com/wp-content/uploads/2021/10/بیلبورد-02-min-scaled.jpg" alt="" />
                </li>
                <li>
                    <h5>شرکت تبلیغاتی فرامارکتینگ</h5>
                    <img src="https://sarafrazgroup.com/wp-content/uploads/2021/10/Faramarketing_PosterSite.jpg-min-scaled.jpg" alt="" />
                </li>
                <li>
                    <h5>سرافراز وب</h5>
                    <img src="https://sarafrazgroup.com/wp-content/uploads/2021/10/بیلبورد-02-min-scaled.jpg" alt="" />
                </li>
                <li>
                    <h5>فروشگاه پترو تجهیز</h5>
                    <img src="https://sarafrazgroup.com/wp-content/uploads/2021/10/PetroTajhiz_PosterSite.jpg-min-scaled.jpg" alt="" />
                </li>
                <li>
                    <h5>ایران شیمی</h5>
                    <img src="https://sarafrazgroup.com/wp-content/uploads/2021/10/IranChemi_PosterSite.jpg-min-scaled.jpg" alt="" />
                </li>
                <li>
                    <h5>فرارویش</h5>
                    <img src="https://sarafrazgroup.com/wp-content/uploads/2021/10/Fararoyesh_PosterSite-scaled.jpg" alt="" />
                </li>
            </ul>
        </div>
    )
}

export default Widget