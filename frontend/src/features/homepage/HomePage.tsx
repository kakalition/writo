import { Button } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import { SpacerStyles } from '../../common-component/JSSUtilities';
import UndrawBookSvg from '../../common-component/UndrawBookSvg';

const HomeStyles = createUseStyles({
  pageClass: {
    padding: '0 5vw 0 5vw',
  },
  topbarClass: {
    paddingTop: '4vh',
  },
  topbarHeadingClass: {
    fontFamily: ['Libre Baskerville', 'sans-serif'],
    fontSize: '2rem',
    color: 'white',
  },
  buttonClass: {
    padding: '0.8rem 2rem 0.8rem 2rem',
    fontFamily: ['Roboto', 'sans-serif'],
    fontSize: '1rem',
  },
  ctaClass: {
    padding: '1rem 3rem 1rem 3rem',
    fontFamily: ['Roboto', 'sans-serif'],
    fontSize: '2rem',
  },
  contentClass: {
    fontFamily: ['Libre Baskerville', 'serif'],
    fontSize: '5rem',
    color: 'white',
  },
});

export default function HomePage() {
  const homeStyles = HomeStyles();
  const spacerStyles = SpacerStyles();

  return (
    <div className={`d-flex flex-column vh-100 vw-100 bg-dark ${homeStyles.pageClass}`}>
      <div id="topbar" className={`d-flex flex-row w-100 justify-content-between align-items-center ${homeStyles.topbarClass}`}>
        <h1 className={homeStyles.topbarHeadingClass}>Writio</h1>
        <Button className={homeStyles.buttonClass} variant="outline-light">Login</Button>
      </div>
      <div id="main-content-container" className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
        <div id="main-content" className="d-flex align-items-center justify-content-between w-100 h-100 flex-row">
          <div id="content" className="d-flex flex-column align-items-start justify-content-center w-50">
            <h2 className={homeStyles.contentClass}>
              Taking note
              <br />
              have never been
              <br />
              this fun.
            </h2>
            <div className={spacerStyles.h4} />
            <Button className={homeStyles.ctaClass} variant="light">Get Started</Button>
          </div>
          <div id="illustration" className="d-flex flex-column align-items-center justify-content-center w-50">
            <UndrawBookSvg />
            <div className={spacerStyles.h2} />
          </div>
        </div>
        <div className={spacerStyles.h4} />
      </div>
    </div>
  );
}
