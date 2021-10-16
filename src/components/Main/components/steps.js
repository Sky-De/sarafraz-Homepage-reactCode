


import './steps.css';


const Steps = (props)=>{
    
    const {url,title,content}= props;

    return(
        <div className="step-card">
            <img src={url} alt="icon" />
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}


export default Steps