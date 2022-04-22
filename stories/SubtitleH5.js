import '../assets/styles/styles.css';
export const createText = ({
    color = 'black',
    label = 'Ceci est un exemple',
}) => {
    const h2 = document.createElement('h5')
    h2.className = ['subtitle5']
    h2.classList.add(`${color}`)
    h2.innerText = label

    return h2
}