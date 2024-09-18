import { generateCodeChallenge, generateCodeVerifier } from "../../utils/pkce/pkce"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Login = () => {
  const verifier = generateCodeVerifier();
  sessionStorage.setItem('codeVerifier', verifier);
  const codeChallenge = generateCodeChallenge();
  sessionStorage.setItem('codeChallenge', codeChallenge);
  return (
    <Button asChild variant="outline">
      <Link to={'/redirect'}>Login</Link>
    </Button>
  );
}
export default Login;