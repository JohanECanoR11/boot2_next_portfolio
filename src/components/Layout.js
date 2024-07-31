import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Nprogress from 'nprogress';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Layout = ({ children, footer = true }) => {

  const router = useRouter();

  useEffect(() => {
    // Efecto para manejar cambios de ruta
    const handleRouteChange = (url) => {
      Nprogress.start();
    };

    const handleRouteComplete = (url) => {
      Nprogress.done();
    };

    const handleRouteError = (url) => {
      Nprogress.done();
    };
    
    // Escucha el inicio de cambio de ruta
    router.events.on("routeChangeStart", handleRouteChange);

    // Escucha el final exitoso de cambio de ruta
    router.events.on("routeChangeComplete", handleRouteComplete);

    // Escucha el error en el cambio de ruta
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      // Limpia el event listener al desmontar el componente
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, []);

  return (
    <>
      <Navbar />

      {children}

      { footer && (
        <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h1>&copy; Johan Eduardo Cano Ruiz Portafolio</h1>
          <p>2024 - {new Date().getFullYear()}</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </footer>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.bool
};

export default Layout;