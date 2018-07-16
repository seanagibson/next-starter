import { Component } from 'react';
import { H2 } from '../components/headings';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <H2>Header</H2>
        </div>
        <style jsx>{`
          header {
            min-height: 100px;
            width: 100%;
            grid-area: header;
          }
          .header-container {
            z-index: 1000;
            width: 100%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
          }
        `}</style>
      </header>
    );
  }
}
