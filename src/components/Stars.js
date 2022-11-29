import React from 'react';
import starIcon from '../images/star.png'
import emptyStarIcon from '../images/star-empty.png'

function Stars(props) {
    const generateStars = () => {
        let stars = [];

        for (let i=1; i<=props.total; i++) {
            if (i <= props.rating) {
                stars.push(<img className="star-img" key={i} src={starIcon} alt="star" />)
            } else {
                stars.push(<img className="star-img" key={i} src={emptyStarIcon} alt="empty star" />)
            }
        }

        return stars;
    };

    return (
        <>
            {generateStars()}
        </>
    );
}

export default Stars;
