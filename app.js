//렌덤 배경화면 
const imge = ['01imge.jpg', '02imge.jpg']

const ranDomImge = imge[Math.floor(Math.random() * imge.length)];
const addImge = document.createElement('img');
addImge.src = `imge/${ranDomImge}`;
addImge.style.width = '100%';
addImge.style.height = '100vh';

document.body.appendChild(addImge);
