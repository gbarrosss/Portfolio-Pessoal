function maqEscrever() {
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
      setTimeout(() => (elemento.innerHTML += letra), 100 * i);
    });
  }

  const frase = document.querySelector(".frase");
  if (frase) {
    typeWriter(frase);
  }
}

maqEscrever();




const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
});

sr.reveal(".sobre>img, .sobre>p, .sobre>h2, .sobre>a", { delay: 200 });
sr.reveal(".competencias>h2, .competencias-lista", { delay: 200 });
sr.reveal(".projetos>h2, .lista", { delay: 200 });
sr.reveal(".projetos>h2, .lista", { delay: 200 });

