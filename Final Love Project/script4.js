function angry() {

    const container = document.querySelector('.container');

    const creat = document.createElement('div');
    creat.classList.add('angry');
    creat.innerHTML = `💀`;

    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random() * 3 + 2 + 's';

    container.appendChild(creat)
    setTimeout(() => {
        creat.remove();
    }, 3000);
    
}

setInterval(angry, 100);