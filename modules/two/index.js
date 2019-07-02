import './styles-a.scss';
import './styles-b.scss';

const handle = () => {
  console.log('---module-two');
  const element = document.createElement('div');

  element.classList.add('module-two');
  element.innerHTML = 'Module Two';

  return element;
};

document.body.appendChild(handle());
