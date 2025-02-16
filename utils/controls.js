export let left = false;
export let right = false;
export let up = false;
export let down = false;
export let space = false;
export let lastPressed = 'ArrowLeft'; // Initialize the lastPressed variable

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            left = true;
            lastPressed = 'ArrowLeft'; // Update lastPressed
            break;
        case 'ArrowRight':
            right = true;
            lastPressed = 'ArrowRight'; // Update lastPressed
            break;
        case 'ArrowUp':
            up = true;
            lastPressed = 'ArrowUp'; // Update lastPressed
            break;
        case 'ArrowDown':
            down = true;
            lastPressed = 'ArrowDown'; // Update lastPressed
            break;
        case ' ':
            space = true;
            break;
    }
});

document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            left = false;
            break;
        case 'ArrowRight':
            right = false;
            break;
        case 'ArrowUp':
            up = false;
            break;
        case 'ArrowDown':
            down = false;
            break;
        case ' ':
            space = false;
            break;
    }
});
