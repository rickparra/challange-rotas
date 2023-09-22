import { useState } from 'react';

export default function DenunciaForm({ onDenunciaSubmit }) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crie um objeto de denúncia com os dados do formulário
    const novaDenuncia = {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      titulo,
      descricao,
    };
    // Chame a função para adicionar a denúncia ao estado do Feed
    onDenunciaSubmit(novaDenuncia);
    // Limpe os campos do formulário
    setLatitude('');
    setLongitude('');
    setTitulo('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Latitude:
        <input
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          required
        />
      </label>
      <label>
        Longitude:
        <input
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
      </label>
      <label>
        Título:
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </label>
      <label>
        Descrição:
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </label>
      <button type="submit">Enviar Denúncia</button>
    </form>
  );
}
