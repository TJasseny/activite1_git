// Affiche la réponse
function afficherReponse(tableauObjetsUser) {
    var contenu = document.getElementById("contenu");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", tableauObjetsUser.avatar_url);
    contenu.appendChild(avatar);
}
// Demande de ressource à l'API GitHub
function appelAjax(user) {
    ajaxGet("https://api.github.com/users/" + user, function (reponse) {
        var array = JSON.parse(reponse);
        afficherReponse(array);
    });
}
// Gestion du formulaire
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var user = e.target.user.value;
    appelAjax(user);
})