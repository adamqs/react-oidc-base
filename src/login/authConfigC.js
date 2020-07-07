const REACT_APP_AUTH_URL = 'https://localhost:56774';

export const IDENTITY_CONFIG = {
  authority: 'https://localhost:56774/connect/authorize',
  client_id: 'mint',
  redirect_uri: 'https://localhost:58658/popup.html',
  silent_redirect_uri: 'https://localhost:58658/popup.html',
  post_logout_redirect_uri: 'https://localhost:58658/',
  // audience: process.env.REACT_APP_AUDIENCE,
  response_type: 'id_token token',
  // automaticSilentRenew: false,
  automaticSilentRenew: true,
  loadUserInfo: false,
  scope: 'openid profile cirqa',
};

export const METADATA_OIDC = {
  issuer: 'https://localhost:56774',
  jwks_uri: REACT_APP_AUTH_URL + '/.well-known/openid-configuration/jwks',
  authorization_endpoint: REACT_APP_AUTH_URL + '/connect/authorize',
  token_endpoint: REACT_APP_AUTH_URL + '/connect/token',
  userinfo_endpoint: REACT_APP_AUTH_URL + '/connect/userinfo',
  end_session_endpoint: REACT_APP_AUTH_URL + '/connect/endsession',
  check_session_iframe: REACT_APP_AUTH_URL + '/connect/checksession',
  revocation_endpoint: REACT_APP_AUTH_URL + '/connect/revocation',
  introspection_endpoint: REACT_APP_AUTH_URL + '/connect/introspect',
};

const apiBaseUrl = 'https://localhost:56764';
const oidcConfiguration = {
  authority: 'https://localhost:56774/connect/authorize',
  client_id: 'mint',
  redirect_uri: 'http://localhost:58658/popup.html',
  response_type: 'id_token token',
  post_logout_redirect_uri: 'http://localhost:58658/',
  silent_redirect_uri: 'http://localhost:58658/popup.html',
  scope: 'openid profile cirqa',
  accessTokenExpiringNotificationTime: 4,
  automaticSilentRenew: true,
  loadUserInfo: true,
  state: 'RANDOM_STATE',
  // automaticSilentRenew: true,
  // post_logout_redirect_uri: "http://localhost:58658/index.html",
  // popup_redirect_uri: "http://localhost:58658/popup.html",
  // acr_values: "login_hint:R0009",

  // authority: 'https://demo.identityserver.io',
  // silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
};
