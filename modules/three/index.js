import './styles-a.scss';
import './styles-b.scss';

const handle = () => {
  console.log('---module-three');
  const element = document.createElement('div');

  element.classList.add('module-three');
  element.innerHTML = 'Module Three';

  return element;
};

document.body.appendChild(handle());
