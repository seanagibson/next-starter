import { H4 } from '../components/headings';

export default () => (
  <footer>
    <div>
      <H4>Footer</H4>
    </div>
    <style jsx>{`
      footer {
        background: rgb(37, 37, 37);
        color: rgb(199, 199, 199);
        min-height: 150px;
        grid-area: footer;
      }
    `}</style>
  </footer>
);
