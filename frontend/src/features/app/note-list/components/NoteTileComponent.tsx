import { NoteType } from '../../typedefs/NoteType';

type Params = {
  noteType: NoteType
};

export default function NoteTileComponent({ noteType }: Params) {
  return (
    <div className="flex flex-col p-6 bg-gray-50">
      <h2 className="w-full text-3xl text-black font-libre-baskerville">
        {noteType.title}
      </h2>
      <div className="h-4" />
      <p className="w-full text-base text-black font-roboto">
        {noteType.body}
      </p>
      <div className="h-4" />
      <p className="w-full text-base text-gray-500 font-roboto">
        {(new Date(noteType.timestamp).toDateString())}
      </p>
    </div>
  );
}
