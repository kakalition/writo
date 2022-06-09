import TagComponent from '../../../../common-component/TagComponent';
import { NoteType } from '../../typedefs/NoteType';

type Params = {
  noteType: NoteType
};

export default function NoteTileComponent({ noteType }: Params) {
  const tags = noteType.tag.map((element) => (
    <TagComponent
      key={`${element.name}${element.body_color}${element.text_color}`}
      name={element.name}
      body_color={element.body_color}
      text_color={element.text_color}
    />
  ));

  return (
    <div className="flex flex-col p-6 bg-gray-50">
      <h2 className="w-full text-3xl text-black font-libre-baskerville">
        {noteType.title}
      </h2>
      <div className="h-4" />
      <p className="w-full text-base text-gray-600 font-roboto">
        {noteType.body}
      </p>
      <div className="h-4" />
      <div className="flex flex-row flex-wrap gap-2">
        {tags}
      </div>
      <div className="h-4" />
      <p className="w-full text-base text-gray-500 font-roboto">
        {(new Date(noteType.timestamp).toDateString())}
      </p>
    </div>
  );
}
