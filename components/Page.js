import Head from 'next/head';
import NProgress from 'nprogress';
import debounce from 'lodash.debounce';
import Header from './Header';
import Footer from './Footer';
import RouterEvents from '../utils/router-events';

const start = debounce(NProgress.start, 200);
RouterEvents.on('routeChangeStart', start);
RouterEvents.on('routeChangeComplete', () => {
  start.cancel();
  NProgress.done();
});
RouterEvents.on('routeChangeError', () => {
  start.cancel();
  NProgress.done();
});

export default ({ children, title }) => (
  <div className="page-container">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
    <style jsx global>{`
      html {
        height: 100%;
        box-sizing: border-box;
        font-size: 62.5%;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
          'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        text-rendering: optimizeLegibility;
        line-height: 1.5;
        font-size: 1.6rem;
      }

      a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      html,
      body {
        background-color: #fff;
        color: #000;
      }

      ::selection {
        background-color: #000;
        color: #fff;
      }
    `}</style>
    <style jsx>{`
      .page-container {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 1fr;
        grid-template-rows: minmax(auto, max-content) minmax(calc(100vh - 100px), max-content) minmax(auto, max-content);
        grid-template-areas:
          'header'
          'main'
          'footer';
      }
      main {
        grid-area: main;
      }
    `}</style>
  </div>
);
