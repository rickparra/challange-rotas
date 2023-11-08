import { useState } from 'react';
import styles from './DenunciaForm.module.scss'; // Importe o arquivo CSS


export default function DenunciaForm({ onDenunciaSubmit }) {
  const [endereco, setEndereco] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const geocodeAddress = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          endereco
        )}&key=AIzaSyDPQAq8xtySd-OEqbD5VPzRru08juMEwdo`
      );
      if (!response.ok) {
        throw new Error('Erro ao geocodificar o endereço');
      }
      const data = await response.json();
      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        const novaLatitude = location.lat;
        const novaLongitude = location.lng;
        setLatitude(novaLatitude);
        setLongitude(novaLongitude);
        setMensagemErro(''); // Limpa qualquer mensagem de erro anterior
        // Crie um objeto de denúncia com os dados do formulário
        const novaDenuncia = {
          latitude: parseFloat(novaLatitude),
          longitude: parseFloat(novaLongitude),
          titulo,
          descricao,
        };
        // Chame a função para adicionar a denúncia ao estado do Feed
        onDenunciaSubmit(novaDenuncia);
        // Limpe os campos do formulário
        setEndereco('');
        setTitulo('');
        setDescricao('');
      } else {
        setLatitude(''); // Limpa as coordenadas em caso de erro
        setLongitude('');
        throw new Error('Endereço não encontrado');
      }
    } catch (error) {
      console.error(error);
      setMensagemErro('Erro ao geocodificar o endereço. Verifique se o formato do endereço está correto.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    geocodeAddress();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      {mensagemErro && <p style={{ color: 'red' }}>{mensagemErro}</p>}
      <label className={styles.label}>
        Endereço (Número e Nome da Rua):
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Título:
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Descrição:
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          className={styles.textarea}
        />
      </label>
      <button type="submit" className={styles.button}>Enviar Denúncia</button>
    </form>
  );
}