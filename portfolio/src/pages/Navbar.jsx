import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex grow'>
      <ul className='text-white p-7 space-y-4'>
        <li><Link to="/" className="text-white">Accueil</Link></li>
        <li><Link to="/about" className="text-white">Présentation</Link></li>
        <li><Link to="/competences" className="text-white">Compétences</Link></li>
        <li><Link to="/projects" className="text-white">Projets</Link></li>
        <li><Link to="/contacts" className="text-white">Contacts</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar