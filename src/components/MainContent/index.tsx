import './styles.scss';

import lancamentoRack from '../../assets/lancamento-rack.jpg';
import lancamentoGuardaRoupas from '../../assets/lancamento-guarda-roupas.jpg';
import lancamentoBeliche from '../../assets/lancamento-beliche.jpg';
import cozinhaFloripa from '../../assets/cozinha-floripa.jpg';
import sofaCama from '../../assets/sofa-cama.jpg';
import sofaAdelle from '../../assets/sofa-adelle.jpg';
import bannerEspeciais from '../../assets/banner-especiais.jpg';
import poltronaElle from '../../assets/poltrona-elle.jpg';
import mesaJantar from '../../assets/mesa-jantar.gif';
import rackFendi from '../../assets/rack-fendi.gif';
import conjuntoMesa from '../../assets/conjunto-mesa.jpg';

export function MainContent() {
  return (
    <main className='container'>
      <section className='releases-content'>
        <div>
          <h1>Lançamentos</h1>
          <p>
            Todo mês, novidades para você<br/>
            decorar sua casa de M novas maneiras.
          </p>
          <button>Veja todas as ofertas</button>
        </div>

        <div className='subtitle'>
          <span>Grandes Ofertas!</span>
        </div>
        <div className='container-offers'>
          <img src={ lancamentoRack } alt="lançamento rack 3 portas" />
          <img src={ lancamentoGuardaRoupas } alt="lançamento guarda roupas casal" />
          <img src={ lancamentoBeliche } alt="lançamento beliche Montessoriano Bell" />
        </div>
      </section>

      <section className='floripa-kitchen'>
        <img src={cozinhaFloripa} alt="cozinha compacta floripa" />
      </section>

      <section className='exclusive-container'>
        <img src={sofaCama} alt="sofá cama com chaise 4 lugares" />
        <img src={sofaAdelle} alt="sofá adelle sarja" />
      </section>

      <section className='specials-container'>
        <div className="box1">
          <img src={bannerEspeciais} alt="novidades especiais" />
          <img src={poltronaElle} alt="poltrona elle" />
        </div>
        <img className="box2" src={mesaJantar} alt="mesas de jantar retangular extensíveis" />
        <div className="box3">
          <img  src={rackFendi} alt="rack fendi flex 90cm" />
          <img src={conjuntoMesa} alt="conjunto de mesa de jantar luna com seis cadeiras" />
        </div>
      </section>
    </main>
  );
}