import { Link } from 'react-router-dom';

export function Homepage() {
  return (
    <div>
      <h1>Welcome to the homepage!</h1>
      <p>Please click a buton:</p>
      <Link to={'signup'}>
        <button>Sign-up</button>
      </Link>
      <br />
      <br />
      <Link to={'login'}>
        <button>Login</button>
      </Link>
      <br />
      <br />
      <Link to={'members'}>
        <button>Members Only</button>
      </Link>
    </div>
  );
}
