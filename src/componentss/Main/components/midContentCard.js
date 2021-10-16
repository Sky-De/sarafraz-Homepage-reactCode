


import './midContentCard.css';

const MidContentCard = ()=>{


    return(
        <>
        <section className="mid-content-card">
            <div className="card-img">
                <img src="https://sarafrazgroup.com/wp-content/uploads/elementor/thumbs/getty_840610244_370630-pd3d6der6krp249igp3k3qvehb8oqpas53f61hu4w0.jpg" alt="" />
            </div>
            <div className="card-content first">
                <article>
                    <h3>فلسفه ما</h3>
                    <p>وجود ذی نفعان همیشه در شرکت ها و سازمان ها موثر است چرا که باعث پیشرفت میشود. هلدینگ توسعه تجارت سرافراز رویکرد خود را بر پایه رضایت ذی نفعان در نظر دارد چرا که مسیر موفقیت در راستای ارزش نهادن بر مشتری محقق میشود. از این رو فعالیت های شرکت و شکوفایی به توانایی آنها برای همکاری مشترک در جهت اهداف کسب و کار متکی است.</p>
                </article>
                <a href="#" className='btn first'>فلسفه ما</a>
            </div>

        </section>
        <section className="mid-content-card">
            <div className="card-content second">
                <article>
                    <h3>درخواست سرمایه گذاری</h3>
                    <p>شما برای استفاده از خدمات و سرمایه گذاری هلدینگ سرافراز بهره مند شوید، نیاز به تکمیل فرم درخواست دارید. کارشناسان ما در سریع ترین زمان ممکن طرح شما را بررسی و نتایج و زمان جلسه احتمالی را به شما گزارش خواهند داد.</p>
                </article>
                <a href="#" className='btn second'>فرم همکاری</a>
            </div>
            <div className="card-img">
                <img src="https://sarafrazgroup.com/wp-content/uploads/2021/09/workplace-team-cooperation-businesswoman-laptop-office_1418-44.jpg" alt="" />
            </div>
        </section>
        </>
    )
}

export default MidContentCard;