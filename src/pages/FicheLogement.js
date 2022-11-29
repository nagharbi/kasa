import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordeon from "../components/Accordeon";
import Avatar from "../components/Avatar";
import Carroussel from "../components/Carroussel";
import Header from "../components/Header";
import Stars from "../components/Stars";
import Tag from "../components/Tag";
import { getOneLogement } from "../services/service";

function FicheLogement() {
  const content =
    "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).";
  const params = useParams();
  const id = params.id;
  const [logement, setlogement] = useState({});

  useEffect(() => {
    async function load() {
      const data = await getOneLogement(id);
      setlogement(data);
    }
    load();
  }, []);

  return (
    <div>
      <Header />
      <div className="house-container">
        <div className="house-carousel">
          {logement.pictures ? <Carroussel imgs={logement.pictures} /> : <></>}
        </div>
        <div className="house">
          <div className="house-tags">
            <div className="house-content">
              <span className="house-title">
                Cozy loft on the Canal Saint-Martin
              </span>
              <span className="house-position">Paris, Île-de-France</span>
            </div>
            <div className="tag-container">
              <Tag content="Cozy" />
              <Tag content="Canal" />
              <Tag content="Paris 10" />
            </div>
          </div>
          <div className="house-stars">
            <div className="stars-container">
              <Stars rating="4" total="5" />
            </div>
            <div className="avatar-container">
              <Avatar title="Alexandre Dumas" />
            </div>
          </div>
        </div>
        <div className="accordeon-container">
          <Accordeon id="accordeon1" title="Description" content={content} />
          <Accordeon id="accordeon2" title="Test" content={content} />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
