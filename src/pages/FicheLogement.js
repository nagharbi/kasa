import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Accordeon from "../components/Accordeon";
import Avatar from "../components/Avatar";
import Carroussel from "../components/Carroussel";
import Header from "../components/Header";
import Stars from "../components/Stars";
import Tag from "../components/Tag";
import { getOneLogement } from "../services/service";

function FicheLogement() {
  const params = useParams();
  const id = params.id;
  const [logement, setlogement] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      const data = await getOneLogement(id);
      if (data) {
        setlogement(data)
      } else {
        navigate('/not-found')
      }
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
              <div className="house-title">{logement.title}</div>
              <div className="house-position">{logement.location}</div>
            </div>
            <div className="tag-container">
              {logement.tags ? logement.tags.map((content, index) => <Tag key={index} content={content} />) : null}
            </div>
          </div>
          <div className="house-stars">
            <div className="stars-container">
              <Stars rating={logement.rating} total="5" />
            </div>
            <div className="avatar-container">
              <Avatar name={logement?.host?.name} picture={logement?.host?.picture} />
            </div>
          </div>
        </div>
        <div className="accordeon-container">
          <Accordeon id="description" title="Dèscription" content={logement.description} small size="size-m" />
          <Accordeon id="equipments" title="Equipements" content={logement.equipments} small size="size-m" />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
