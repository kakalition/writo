import { useNavigate } from 'react-router-dom';
import UndrawBookSvg from '../../common-component/UndrawBookSvg';

export default function HomePage() {
  const navigator = useNavigate();

  const onGetStartedClick: React.MouseEventHandler = () => {
    navigator('/register');
  };

  const onLoginClick: React.MouseEventHandler = () => {
    navigator('/login');
  };

  return (<div />
  /*     <div className={`d-flex flex-column vh-100 vw-100 ${homeStyles.pageClass} ${backgroundStyles.bgDark}`}>
      <div id="topbar" className={`d-flex flex-row w-100 justify-content-between align-items-center ${homeStyles.topbarClass}`}>
        <h1 className={homeStyles.topbarHeadingClass}>Writio</h1>
        <Button
          className={homeStyles.buttonClass}
          variant="outline-light"
          onClick={onLoginClick}
        >
          Login
        </Button>
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
            <Button
              className={homeStyles.ctaClass}
              variant="light"
              onClick={onGetStartedClick}
            >
              Get Started
            </Button>
          </div>
          <div id="illustration" className="d-flex flex-column align-items-center justify-content-center w-50">
            <UndrawBookSvg />
            <div id="adjustment0" className={spacerStyles.h2} />
          </div>
        </div>
        <div id="adjustment1" className={spacerStyles.h4} />
      </div>
    </div> */
  );
}
