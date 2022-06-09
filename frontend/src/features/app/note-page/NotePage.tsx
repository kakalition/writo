import { useMemo, useState } from 'react';
import TagComponent from '../../../common-component/TagComponent';
import SearchbarComponent from '../note-list/components/SearchbarComponent';
import { NoteType } from '../typedefs/NoteType';

type Params = {
  notesData: NoteType[]
};

export default function NotePage({ notesData }: Params) {
  const [current, setCurrent] = useState(
    {
      title: 'Advanced Covalent Bonding',
      body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
      tag: [
        { name: 'Chemistry', body_color: '#E8CBA9', text_color: '#615547' },
        { name: 'Project', body_color: '#E5CEE0', text_color: '#4B4049' },
      ],
      timestamp: 1653978467000,
    },
  );

  const noteList = useMemo(() => notesData.map((element) => (
    <button type="button" className="flex flex-col p-6 w-full hover:bg-gray-100">
      <p className="text-2xl leading-tight text-left text-black font-libre-baskerville">{element.title}</p>
      <div className="h-1" />
      <p className="text-sm text-gray-600 font-roboto">{(new Date(element.timestamp).toDateString())}</p>
    </button>
  )), [notesData]);

  const tags = useMemo(
    () => current.tag.map((element) => (
      <TagComponent
        key={`${element.name}${element.body_color}${element.text_color}`}
        name={element.name}
        body_color={element.body_color}
        text_color={element.text_color}
      />
    )),
    [current],
  );

  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col w-[20%] h-full bg-gray-50">
        <SearchbarComponent isSmall />
        <div className="overflow-y-scroll h-full">
          {noteList}
        </div>
      </div>
      <div className="px-16 pt-16 w-[80%] h-full bg-bg-gray-50">
        <h1 className="text-6xl text-black font-libre-baskerville">{current.title}</h1>
        <div className="h-4" />
        <p className="text-lg text-gray-500 font-roboto">{(new Date(current.timestamp).toDateString())}</p>
        <div className="h-4" />
        <div className="flex flex-row gap-2">{tags}</div>
        <div className="h-8" />
        <p className='text-lg font-roboto text-gray-600'>{current.body}</p>
      </div>
    </div>
  );
}
