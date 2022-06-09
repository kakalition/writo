import React from 'react';
import SearchbarComponent from './SearchbarComponent';

type Params = {
  noteComponents: React.ReactNode[],
};

export default function NoteListTabComponent({ noteComponents }: Params) {
  return (
    <div className="bg-white">
      <SearchbarComponent />
      <div className="flex overflow-y-scroll flex-col py-8 px-12 w-full">
        {noteComponents}
      </div>
    </div>
  );
}
