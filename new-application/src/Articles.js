export default function Articles(props) {
    return(
        <>
        <div className="article-wrapper">
            <h3 className="artHead">{props.title}</h3>
            <img className='artImg' src={props.imgSrc} alt="Image not found"/>
            <p className="artDesc">{props.desc}</p>
            <p className="publish">{props.publish}</p>
            <a className="artLink" href={props.url}>Read More</a>
            </div>
        </>
    );
}