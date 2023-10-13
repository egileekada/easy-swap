
import { BASEURL } from '../BasicUrl/Url';

function getGoogleOAuthURL() {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    
    const options = {
      redirect_uri: BASEURL.URL+"/users/google-auth",
      client_id: "727859404694-0c3ti1r9ndvqk6f2tq817lsbvas8aqt4.apps.googleusercontent.com",
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };
  
    const qs = new URLSearchParams(options);
    console.log(rootUrl);
    
  
    return `${rootUrl}?${qs.toString()}`;
  }
  
  export default getGoogleOAuthURL;