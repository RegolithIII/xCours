/* var isMenuShown = true;

function menuShow() {
    if (isMenuShown == true) {
        document.getElementById("menu").style.display = 'none';
        isMenuShown = false;
    } else {
        document.getElementById("menu").style.display = 'inline-block';
        isMenuShown = true;
    }
}
*/
const template = document.createElement('template');

template.innerHTML = `
<header class="header">
<a class="a" href="/index.html">Home</a>
<a class="a" href="/Cours/premiere/Math/math.html">Maths</a>
<a class="a" href="/Cours/premiere/Physique-Chimie/Physique-Chimie.html">Physique-Chimie</a>
<a class="a" href="/Cours/premiere/SVT.html">SVT</a>
<a class="a" href="#about">Ens. Scientifique</a>
<a class="a" href="#about">Français</a>
<a class="a" href="#about">Histoire-Géo</a>
<a class="a" href="#about">Espagnol</a>
<a class="a" href="#about">Anglais</a>
</header>
`;

document.body.append(template.content);