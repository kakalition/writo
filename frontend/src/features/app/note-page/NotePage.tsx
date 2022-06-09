import SearchbarComponent from '../note-list/components/SearchbarComponent';
import { NoteType } from '../typedefs/NoteType';

type Params = {
  notesData: NoteType[]
};

export default function NotePage({ notesData }: Params) {
  const noteList = notesData.map((element) => (
    <button type="button" className="flex flex-col p-6 w-full hover:bg-gray-100">
      <p className="text-2xl leading-tight text-left text-black font-libre-baskerville">{element.title}</p>
      <div className="h-1" />
      <p className="text-sm text-gray-600 font-roboto">{(new Date(element.timestamp).toDateString())}</p>
    </button>
  ));

  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-[20%] h-full bg-gray-50">
        <SearchbarComponent isSmall />
        <div className="overflow-y-scroll h-full">
          {noteList}
        </div>
      </div>
      <div className="w-[80%] h-full bg-white" />
    </div>
  );
}
