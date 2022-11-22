async function getAllLogement(){
   const reponse = await fetch ('data/logement.json');
   const data = await reponse.json();
   return data;
}

export { getAllLogement };