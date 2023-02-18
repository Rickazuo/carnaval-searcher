import { useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./styles.module.css";

const Map = ({ cards }) => {
  const [activePark, setActivePark] = useState(null);
  const position = [-23.5489, -46.6388];

  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cards.map((card) => (
        <Marker
          onClick={() => {
            setActivePark(park);
          }}
          position={[card.coordinates[0], card.coordinates[1]]}
        >
          <Popup>
            <p className={styles.mapPopupTitle}>{card.title} 🎉</p>
            <img width={300} src={card.image}/>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
