import '../assets/styles/styles.css';
import error from '../assets/images/error.svg';


export const createIcon = ({
}) => {

  const Icon = {
    src: error,
  };
  const svg = document.createElement('img')

  svg.src = Icon.src;

  return svg
}