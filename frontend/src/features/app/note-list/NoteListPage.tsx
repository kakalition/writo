import SearchbarComponent from './components/SearchbarComponent';

type Params = {
  noteComponents: React.ReactNode[],
};

export default function NoteListPage({ noteComponents }: Params) {
  return (
    <div className="w-full h-full bg-white">
      <SearchbarComponent />
      <div className="flex overflow-y-scroll flex-col py-8 px-12 w-full h-full">
        {noteComponents}
      </div>
    </div>
  );
}
