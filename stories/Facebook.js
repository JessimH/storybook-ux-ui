import '../assets/styles/styles.css';
import facebook from '../assets/images/facebook.svg';


export const createIcon = ({
}) => {

  const Icon = {
    src: facebook,
  };
  const svg = document.createElement('img')

  svg.src = Icon.src;

  return svg
}