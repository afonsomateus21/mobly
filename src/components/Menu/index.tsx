import './styles.scss';

export function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <select name="" id="">
            <option value="default">Por Ambiente</option>
          </select>
        </li>
        <li>
          <select name="" id="">
            <option value="default">Por Categoria</option>
          </select>
        </li>
        <li>Mobly Inspira</li>
        <li>Lançamentos</li>
        <li>Outlet</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}