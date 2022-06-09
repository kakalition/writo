import React from 'react';

type Params = {
  noteComponents: React.ReactNode[],
};

export default function NoteListTabComponent({ noteComponents }: Params) {
  return (
    <div className="flex overflow-y-scroll flex-col py-8 px-12 w-full">
      {noteComponents}
    </div>
  );
}
