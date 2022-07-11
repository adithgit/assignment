const colorClasses = ['color1', 'color2', 'color3', 'color4', 'color2', 'color4' ];
const tagNames = ['Trending', 'Sports', 'Fashion', 'Finance', 'Trade']
document.addEventListener("DOMContentLoaded", main);

function openMenu(){
    document.getElementById("menu").classList.add('menu-open');
    document.getElementById("menu").style.display = 'flex';

}

function closeMenu(){
    document.getElementById("menu").classList.remove('menu-open');
}
function tagHelper(){
    if (window.innerWidth < 700) {
        const tags = document.querySelectorAll('.tag');
        for (const element of tags) {
            const className = colorClasses.pop();
            element.classList.add(className);
        }
    }else{
        const tags = document.querySelectorAll('.tag');
        for (const element of tags) {
            element.innerHTML = tagNames.pop();
        }

    }
}

function main(){
    tagHelper();
}