import routePaths from './routePaths';

 function windowLocationRedirect () {
    window.location.href =
        routePaths.login +
        '?resume=' +
        window.location.pathname.replace('/', '') +
        encodeURI(window.location.search);
}


export default windowLocationRedirect