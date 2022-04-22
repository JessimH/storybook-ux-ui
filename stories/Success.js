import '../assets/styles/styles.css';
import success from '../assets/images/success.svg';


export const createIcon = ({
}) => {

  const Icon = {
    src: success,
  };
  const svg = document.createElement('img')

  svg.src = Icon.src;

  return svg
}