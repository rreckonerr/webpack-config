import './styles-a.scss';
import './styles-b.scss';

const handle = () => {
  console.log('---module-one');
  const element = document.createElement('div');

  element.classList.add('module-one');
  element.innerHTML = 'Module One';

  return element;
};

document.body.appendChild(handle());
