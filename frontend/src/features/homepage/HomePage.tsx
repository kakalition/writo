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

  return (
    <div className="flex flex-col py-8 px-24 w-screen h-screen bg-gray-900">
      <div id="topbar" className="flex flex-row justify-between items-center w-full">
        <h1 className="text-4xl text-white font-libre-baskerville">Writio</h1>
        <button
          type="button"
          className="py-2 px-10 text-xl text-white rounded-full border-[1px] border-white font-roboto"
          onClick={onLoginClick}
        >
          Login
        </button>
      </div>
      <div id="main-content-container" className="flex flex-col justify-center items-center w-full h-full">
        <div id="main-content" className="flex flex-row justify-between items-center w-full h-full">
          <div id="content" className="flex flex-col justify-center items-start w-1/2">
            <h2 className="text-8xl text-white font-libre-baskerville">
              Taking note
              <br />
              have never been
              <br />
              this fun.
            </h2>
            <div className="h-16" />
            <button
              type="button"
              className="py-6 px-16 text-2xl text-black bg-white rounded-full font-roboto"
              onClick={onGetStartedClick}
            >
              Get Started
            </button>
          </div>
          <div id="illustration" className="flex flex-col justify-center items-center w-1/2">
            <div className="w-full h-full"><UndrawBookSvg /></div>
            <div id="adjustment0" className="h-10" />
          </div>
        </div>
        <div id="adjustment1" className="h-6" />
      </div>
    </div>
  );
}
