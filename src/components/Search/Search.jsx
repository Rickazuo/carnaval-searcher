import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Search({ locations, cards, setSearchedCards }) {
  const [search, setSearch] = useState("")
  const [city, setCity] = useState("")

  const searchCard = () => {
    if(!search && !city)
      return cards

    return cards.filter(value => {
      const cityLower = value.localization.toLowerCase()
      const searchLower = value.title.toLowerCase()
      if(search && city && city !== "all")
        return searchLower.includes(search.toLowerCase()) && cityLower.includes(city.toLowerCase())
      if(search)
        return searchLower.includes(search.toLowerCase())
      if(city === "all")
        return true
      if(city)
        return cityLower.includes(city.toLowerCase())
      })
  }

  useEffect(()=> {
    setSearchedCards(searchCard())
  }, [search, city])

  return (
    <div className={styles.bannerButton}>
      <div className={styles.buttons}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquise por nome" />
        <select onChange={(e)=> setCity(e.target.value)} id="select-city">
          <option id="" value="" disabled selected hidden>
            Selecione uma cidade
          </option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
          <option value="all">Todas cidades</option>
        </select>
        <button className={styles.searchNow}>BUSCAR AGORA</button>
      </div>
    </div>
  );
}
