//imports
import './titleContainer.style.css';

const TitleContainer = ({section, title, subtitle}) => {
    let classSection = `text-${section}`;

    return(
        <div className='title-container'>
            <h2 className={classSection}> {subtitle} </h2>
            <h3 className={classSection}> {title} </h3>
        </div>
    );
};

export default TitleContainer;