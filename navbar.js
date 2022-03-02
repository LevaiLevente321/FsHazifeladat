import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

export function Navbar() {

  let user= JSON.parse (localStorage.getItem('user-info'))
  const history = useHistory();
  function logOut()
  {
    localStorage.clear();
    history.push('/RegisterLogin')
  }

    return(
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Navbar</span>
    </nav>
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="/home">Home</a>
  </nav>
  <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="/entries">Entries</a>
</nav>
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="/cart">Cart</a>
</nav>
<Nav>
  <NavDropdown title="Fiók">
    <NavDropdown.item onClick={logOut}>Kijelentkezés</NavDropdown.item>
  </NavDropdown>
</Nav>
:null
</nav>
</>
    )
}