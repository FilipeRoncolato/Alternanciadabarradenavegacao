//quando o elemento com classe "theme-switch e clicado"
$("theme-switch").on("click", ()=> {
     //Adiciona ou remove a classe "light-theme" do elemento "body"
     $("body").toggleClass("light-theme");
});
    