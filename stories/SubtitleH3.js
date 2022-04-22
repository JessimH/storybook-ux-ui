import '../assets/styles/styles.css';
export const createText = ({
    color = 'black',
    label = 'Ceci est un exemple',
}) => {
    const txt = document.createElement('h3')
    txt.className = ['subtitle3']
    txt.classList.add(`${color}`)
    txt.innerText = label

    return txt
}