import { generateCodeChallenge, generateCodeVerifier } from "../../utils/pkce/pkce"
import { Link } from "react-router-dom"

const Login = () => {
  const verifier = generateCodeVerifier();
  sessionStorage.setItem('codeVerifier', verifier);
  const codeChallenge = generateCodeChallenge();
  sessionStorage.setItem('codeChallenge', codeChallenge);
  return (
    <>
      <Link to={'/redirect'}>Login</Link>
    </>
  );
}
export default Login;