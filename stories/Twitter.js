import '../assets/styles/styles.css';
import twitter from '../assets/images/twitter.svg';


export const createIcon = ({
}) => {

  const Icon = {
    src: twitter,
  };
  const svg = document.createElement('img')

  svg.src = Icon.src;

  return svg
}