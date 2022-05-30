import { Button } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

const testStyles = createUseStyles({
  test: {
    width: '10%',
  },
});

export default function HomePage() {
  const testStyle = testStyles();
  return (
    <div className="d-flex flex-column bg-dark vh-100 vw-100">
      <div id="topbar" className="d-flex flex-row w-100 justify-content-between align-items-center cp-3r">
        <h1 className="text-white libre-baskerville">Writio</h1>
        <div className={testStyle.test}><Button className="w-100 h-100" variant="outline-light">Login</Button></div>
      </div>
      <div id="main-content" className="w-100 h-100 d-flex flex-row">
        <div id="content" className="flex flex-col" />
        <div id="illustration" />
      </div>
    </div>
  );
}
