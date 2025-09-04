function jouer(choixJoueur) {
  const choix = ["pierre", "feuille", "ciseaux"];
  const choixOrdi = choix[Math.floor(Math.random() * 3)];

  let resultat = "";
  if (choixJoueur === choixOrdi) {
    resultat = "Égalité !";
  } else if (
    (choixJoueur === "pierre" && choixOrdi === "ciseaux") ||
    (choixJoueur === "feuille" && choixOrdi === "pierre") ||
    (choixJoueur === "ciseaux" && choixOrdi === "feuille")
  ) {
    resultat = "Bravo ! Tu as gagné 🎉";
  } else {
    resultat = "Dommage... L'ordi a gagné 🤖";
  }

  document.getElementById("resultat").innerText =
    `Ton choix : ${choixJoueur} | Ordi : ${choixOrdi}\n${resultat}`;
}
