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
<a class="a" href="/index.html">SuperCours</a>
<a class="a" href="/SuperCours/premiere/Math/math.html">Maths</a>
<a class="a" href="/SuperCours/premiere/Physique-Chimie/Physique-Chimie.html">Physique-Chimie</a>
<a class="a" href="/SuperCours/premiere/SVT/SVT.html">SVT</a>
<a class="a" href="/SuperCours/premiere/Ens-Sci/Es.html">Ens. Scientifique</a>
<a class="a" href="/SuperCours/premiere/Français/Français.html">Français</a>
<a class="a" href="/SuperCours/premiere/HG/Histoire-Geo.html">Histoire-Géo</a>
<a class="a" href="/SuperCours/premiere/Espagnol/Espagnol.html">Espagnol</a>
<a class="a" href="/SuperCours/premiere/Anglais/Anglais.html">Anglais</a>
</header>
`;

document.body.append(template.content);