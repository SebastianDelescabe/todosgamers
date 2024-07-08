import { useEffect } from 'react';

const FacebookLogin = () => {
  useEffect(() => {
    // Inicializar el SDK de Facebook
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '326172080446193',
        cookie     : true,
        xfbml      : true,
        version    : 'v20.0'
      });
      FB.AppEvents.logPageView();
    };

    // Cargar el SDK de Facebook
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/es_LA/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const checkLoginState = () => {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };

  const statusChangeCallback = (response) => {
    if (response.status === 'connected') {
      console.log('Logged in and authenticated', response);
      // Aquí puedes manejar la respuesta del login
    } else {
      console.log('Not authenticated');
    }
  };

  const handleLogin = () => {
    FB.login(checkLoginState, { scope: 'public_profile,email' });
  };

  return (
    <div>
      <div id="fb-root"></div>
      <button onClick={handleLogin}>Login with Facebook</button>
    </div>
  );
};

export default FacebookLogin;
