import '../assets/styles/styles.css';
import insta from '../assets/images/insta.svg';


export const createIcon = ({
}) => {

  const Icon = {
    src: insta,
  };
  const svg = document.createElement('img')

  svg.src = Icon.src;

  return svg
}