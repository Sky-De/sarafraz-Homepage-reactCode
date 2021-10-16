

import './introCard.css';

const IntroCard = (props)=>{
    const {url,title,content} = props;
    return(
        <div className="intro-card">
            <img src={url} alt="icon" />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default IntroCard