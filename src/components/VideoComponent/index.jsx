import videoFile from '../../assets/video (1080p).mp4';
// eslint-disable-next-line no-unused-vars
import styles from './video.css'
import MaquinaEscrever from '../MaquinaEscrever';


export default function VideoComponent() {
  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source src={videoFile} type="video/mp4" />
      </video>
      <div className="text-overlay">
        <p>Uma cidade inteligente</p>
        <p>é uma cidade</p>
        <MaquinaEscrever text="SEGURA."/>
      </div>
    </div>
  );
}
