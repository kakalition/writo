import React from 'react';
import NoteListPageTabEnum from '../features/app/note-list/typedefs/NoteListPageTabEnum';
import BookIcon from './icons/BookIcon';
import GridIcon from './icons/GridIcon';
import PlusIcon from './icons/PlusIcon';
import TagIcon from './icons/TagIcon';
import UserIcon from './icons/UserIcon';

type Params = {
  currentTab: NoteListPageTabEnum,
  onNewNoteClick: React.MouseEventHandler,
  onNoteTabClick: React.MouseEventHandler,
  onTagTabClick: React.MouseEventHandler,
  onUserClick: React.MouseEventHandler,
};

export default function AppNavbarComponent({
  currentTab, onNewNoteClick, onNoteTabClick, onTagTabClick, onUserClick,
}: Params) {
  const iconClass = 'w-6 h-6 stroke-[0.12rem]';

  return (
    <div id="navbar" className="flex flex-col justify-start items-center p-4 h-full bg-gray-900">
      <button
        className="p-2 w-10 h-10 bg-white rounded-lg stroke-gray-900 stroke-[0.12rem]"
        type="button"
        onClick={onNewNoteClick}
      >
        <PlusIcon />
      </button>
      <div className="h-16" />
      <button
        type="button"
        onClick={onNoteTabClick}
        className={`${iconClass} ${currentTab === NoteListPageTabEnum.NoteList ? 'stroke-gray-100' : 'stroke-gray-400'}`}
      >
        <GridIcon />
      </button>
      <div className="h-16" />
      <button
        type="button"
        onClick={onTagTabClick}
        className={`${iconClass} ${currentTab === NoteListPageTabEnum.TagList ? 'stroke-gray-100' : 'stroke-gray-400'}`}
      >
        <TagIcon />
      </button>
      <div className="h-16" />
      <button
        type="button"
        onClick={onTagTabClick}
        className={`${iconClass} ${currentTab === NoteListPageTabEnum.Note ? 'stroke-gray-100' : 'stroke-gray-400'}`}
      >
        <BookIcon />
      </button>
      <div className="h-full" />
      <button
        type="button"
        onClick={onUserClick}
        className={`${iconClass} stroke-white`}
      >
        <UserIcon />
      </button>
      <div className="h-4" />
    </div>
  );
}
