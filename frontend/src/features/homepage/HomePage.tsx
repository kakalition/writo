export default function HomePage() {
  return (
    <div className="full-screen flex flex-col bg-dark">
      <div id="topbar" />
      <div id="main-content" className="w-full flex flex-row">
        <div id="content" className="flex flex-col" />
        <div id="illustration" />
      </div>
    </div>
  );
}
