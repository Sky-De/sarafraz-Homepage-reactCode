

import IntroCard from './components/introCard';
import './main.css';
import { introCardsData } from './allData/introCardsData';
import { stepsData } from './allData/stepsData';
import MidContentCard from './components/midContentCard';
import Steps from './components/steps';
import ContributeCard from './components/contributeCard';
import Widget from './components/widget';
const Main = ()=>{

    return(
        <main className='main'>
            {/* first part of main */}
            <div className="introduction">
               {introCardsData.map((i)=>{
                return <IntroCard key={i.id} {...i}/>
               })}
            </div>
            {/* second part of main */}
            <div className="mid-content">
                <MidContentCard/>
            </div>
            {/* contribute steps */}
            <div className="contribute-steps">
                <h3>فرآیند سرمایه گذاری</h3>
                <div className="con-steps">
                    {
                        stepsData.map((item)=>{
                            return <Steps key={item.id} {...item}/>
                        })
                    }
                </div>
            </div>
            {/* contribute Card */}
            <section className='con-contribute'>
                <ContributeCard/>
            </section>
            {/* widget */}
            <section className='widget'>
                <Widget/>
            </section>
        </main>
    )
}


export default Main