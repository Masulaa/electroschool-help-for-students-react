import React, { useState } from 'react';

function Home() {
  const [ime, setIme] = useState("Luka");
  const [godine, setGodine] = useState(17);
  const [novoIme, setNovoIme] = useState("");
  const [noveGodine, setNoveGodine] = useState("");
  const [omiljenaHrana, setOmiljenaHrana] = useState([
    { ime: 'Pica', kalorija: 500 },
    { ime: 'Kacamak', kalorija: "nije bitno, ubija" },
  ]);

  const handleOnClick = (event) => {
    event.preventDefault();
    setIme(novoIme);
    setGodine(noveGodine);
    setNovoIme("");
    setNoveGodine("");
  };

  return (
    <div>
      <p>Korisnik se zove: {ime}</p>
      <p>{ime} ima: {godine} godina</p>
      <p>{ime} voli od hrane:</p>
      <ul>
        {omiljenaHrana.map((hrana, index) => (
          <li key={index}>{hrana.ime} - {hrana.kalorija}</li>
        ))}
      </ul>
      <form onSubmit={handleOnClick}>
        <label>
          Ime:
          <input type="text" value={novoIme} onChange={(event) => setNovoIme(event.target.value)} />
        </label>
        <br />
        <label>
          Godine:
          <input type="number" value={noveGodine} onChange={(event) => {setNoveGodine(event.target.value); console.log(event)}} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Home;
