import '../assets/styles/styles.css';
import user from '../assets/images/user.svg';


export const createIcon = ({
}) => {

  const Icon = {
    src: user,
  };
  const svg = document.createElement('img')

  svg.src = Icon.src;

  return svg
}