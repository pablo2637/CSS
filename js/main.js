document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', ({ target }) => {

        if (target.matches('i')) {

            console.log(target)
            if (target.classList.contains('iBtnMenu'))
                divMenu.classList.toggle('mostrarNav');

        } else {

            if (divMenu.classList.contains('mostrarNav'))
                divMenu.classList.toggle('mostrarNav');
        }

    });


}) //Load