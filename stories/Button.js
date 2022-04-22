import '../assets/styles/styles.css';

export const createButton = ({
  primary = true,
  label,
  disable = false,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;

  const mode = primary ? 'btn btn-primary' : 'btn btn-secondary';
  btn.className = [mode];

  if (disable) {
    btn.disabled = true;
  }

  return btn;
};
