async function getAllLogement() {
  const reponse = await fetch(process.env.PUBLIC_URL + "/data/logement.json");
  const data = await reponse.json();
  return data;
}

async function getOneLogement(id) {
  const allLogement = await getAllLogement();
  const logement = allLogement.find((item) => item.id === id);
  return logement;
}

export { getAllLogement, getOneLogement };
