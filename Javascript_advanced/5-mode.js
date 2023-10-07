//create a function named changeMode

function changeMode(size, weight, transform, background, color){
    return function(){
        document.documentElement.style.fontSize = size + 'px';
        document.documentElement.style.fontWeight = weight;
        document.documentElement.style.textTransform = transform;
        document.documentElement.style.backgroundColor = background;
        document.documentElement.style.color = color;
    }
}

function main(){
    //creating variables to different themes
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white'); 
    const streamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    //create a paragraph
const parabody = document.createElement('p');
parabody.textContent  = 'Welcome Holberton!';
document.body.appendChild(parabody);

//create a button and add to the body with spooky text in it
const madeButton  =  document.createElement('button');
madeButton.textContent = 'spooky';
madeButton.addEventListener('click', spooky);
document.body.appendChild(madeButton);


//create a button and add to the body with dark mode text in it
const darkButton = document.createElement('button');
darkButton.textContent = 'darkmode';
darkButton.addEventListener('click', darkMode);
document.body.appendChild(darkButton);


//create a button and add to the body with stream text in it
const streambutton = document.createElement('button');
streambutton.textContent = 'stream mode';
streambutton.addEventListener('click', streamMode);
document.body.appendChild(streambuttom);
}

main();

