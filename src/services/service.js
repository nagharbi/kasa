// fonction creer pour l'appel API
async function getAllLogement() {
  const response = await fetch(process.env.PUBLIC_URL + "/data/logement.json");
  const data = await response.json();
  return data;
}

async function getOneLogement(id) {
  const allLogement = await getAllLogement();
  const logement = allLogement.find((item) => item.id === id);
  return logement;
}

async function getDataApropos() {
  const response = await fetch(process.env.PUBLIC_URL + "/data/apropos.json");
  const data = await response.json();
  return data;
}

export { getAllLogement, getOneLogement, getDataApropos };
