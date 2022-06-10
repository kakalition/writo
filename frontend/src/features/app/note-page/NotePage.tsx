import React, {
  ChangeEventHandler, useEffect, useMemo, useState,
} from 'react';
import TagComponent from '../../../common-component/TagComponent';
import SearchbarComponent from '../note-list/components/SearchbarComponent';
import { NoteType } from '../typedefs/NoteType';

type Params = {
  notesData: NoteType[]
};
function onTextChangeFactory(
  currentState: NoteType,
  stateChanger: React.Dispatch<React.SetStateAction<NoteType>>,
  property: string,
) {
  const onTextChange: ChangeEventHandler = (ev) => {
    const element = ev.target as HTMLTextAreaElement;
    element.style.height = '0px';
    element.style.height = `${element.scrollHeight}px`;

    const newState = currentState;
    newState[property] = element.value;

    stateChanger({ ...newState });
  };

  return onTextChange;
}

export default function NotePage({ notesData }: Params) {
  const [current, setCurrent] = useState<NoteType>(
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
    <button key={`${element.timestamp}`} type="button" className="flex flex-col p-6 w-full hover:bg-gray-100">
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

  const onTitleChange = useMemo(() => onTextChangeFactory(current, setCurrent, 'title'), []);
  const onBodyChange = useMemo(() => onTextChangeFactory(current, setCurrent, 'body'), []);

  useEffect(() => {
    const titleElement = document.getElementById('title') as HTMLTextAreaElement;
    const bodyElement = document.getElementById('body') as HTMLTextAreaElement;

    titleElement.style.height = '0px';
    titleElement.style.height = `${titleElement.scrollHeight}px`;

    bodyElement.style.height = '0px';
    bodyElement.style.height = `${bodyElement.scrollHeight}px`;
  }, []);

  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col w-[20%] h-full bg-gray-50">
        <SearchbarComponent isSmall />
        <div className="overflow-y-scroll h-full">
          {noteList}
        </div>
      </div>

      <div className="overflow-y-scroll px-16 pt-16 w-[80%] h-full bg-bg-gray-50">
        <textarea
          id="title"
          className="overflow-y-hidden w-full h-auto text-6xl leading-tight text-black focus:outline-none resize-none font-libre-baskerville"
          onChange={onTitleChange}
          value={current.title}
        />
        <div className="h-4" />
        <p className="text-lg text-gray-500 font-roboto">{(new Date(current.timestamp).toDateString())}</p>
        <div className="h-4" />
        <div className="flex flex-row gap-2">{tags}</div>
        <div className="h-8" />
        <textarea
          id="body"
          className="overflow-y-hidden w-full h-auto min-h-max focus:outline-none resize-none"
          onChange={onBodyChange}
          value={current.body}
        />
        <div className="h-8" />
      </div>
    </div>
  );
}
