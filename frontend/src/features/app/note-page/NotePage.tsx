import SearchbarComponent from '../note-list/components/SearchbarComponent';

export default function NotePage() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-[20%] h-full bg-gray-50">
        <SearchbarComponent isSmall />
      </div>
      <div className="w-[80%] h-full bg-white" />
    </div>
  );
}
