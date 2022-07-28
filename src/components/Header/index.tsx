import './styles.scss';
import moblyIcon  from '../../assets/mobly-icon.svg';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { BsFillCartFill } from 'react-icons/bs';

export function Header() {
  return (
    <header>
      <div className='content'>
        <div className='search'>
          <input type="text" placeholder='Encontre sofás, mesas...' />
          <button>Buscar</button>
        </div>
        <img src={ moblyIcon } alt="Mobly | Sua loja de móveis e artigos de decoração" />
        <div className='icons'>
          <i>
            <BsTelephoneFill color='#5f22a8' />
            <span>Atendimento</span>
          </i>
          <i>
            <FaUser color='#5f22a8' />
            <span>Minha Conta</span>
          </i>
          <i>
            <MdFavorite color='#5f22a8' />
            <span>Favoritos</span>
          </i>
          <button>
            <BsFillCartFill color='#f5f9f2' />
            <span>7</span>
            <MdFavorite color='#f5f9f2' />
          </button>
        </div>
      </div>
    </header>
  );
}