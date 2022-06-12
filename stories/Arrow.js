import '../assets/styles/styles.css';
import arrow from '../assets/images/arrow.svg';


export const createIcon = ({}) => {

    const arrowIcon = {
        src: arrow,
    };
    const svg = document.createElement('img')

    svg.src = arrowIcon.src;

    return svg
}