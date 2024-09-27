import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <>
      <Link to="/">Home </Link>
      <Link to="/Info">Info </Link>
      <Link to="/param">Param </Link>
    </>
  )
}

export default Header;