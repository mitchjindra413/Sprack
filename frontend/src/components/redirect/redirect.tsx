import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Buffer } from "buffer"
import { LoadingSpinner } from "@/components/ui/loadingspinner"

const Redirect = () => {
   const [searchParams] = useSearchParams();
   const navigate = useNavigate();

   useEffect(() => {
     if(searchParams?.get('code')){
       const code = searchParams?.get('code');
       const client = 'react-frontend';
       const secret = 'secret';
       const headers = new Headers();
       headers.append('Content-type', 'application/x-www-form-urlencoded');
       headers.append('Authorization', `Basic ${Buffer.from(`${client}:${secret}`).toString('base64')}`);
       const verifier = sessionStorage.getItem('codeVerifier');

       const tokenEndpoint = 'http://localhost:8080/oauth2/token';
       const formData = new URLSearchParams();
       formData.append('grant_type', 'authorization_code');
       formData.append('code', code);
       formData.append('redirect_uri', 'http://localhost:3000/authorized');
       formData.append('client_id', 'client');
       formData.append('code_verifier', verifier);

       fetch(tokenEndpoint, {
         method: 'POST',
         mode: 'cors',
         headers: headers,
         body: formData
       }).then(async (response) => {
         const token = await response.json();
         if(token?.id_token) {
           sessionStorage.setItem('id_token', token.id_token);
           navigate('/');
         }
       }).catch((err) => {
         console.log(err);
       })
     }
   }, []);

   useEffect(() => {
     if(!searchParams?.get('code')){
       const codeChallenge = sessionStorage.getItem('codeChallenge');
       const link = `http://localhost:8080/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=http://localhost:3000/authorized&code_challenge=${codeChallenge}&code_challenge_method=S256`;

       window.location.href = link;
     }
   }, []);

   return(
     <main className={"flex items-center justify-center min-h-screen"}>
       <LoadingSpinner size={60}/>
     </main>
   )
}
export default Redirect;