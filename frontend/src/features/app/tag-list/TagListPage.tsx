import React from 'react';
import SearchbarComponent from '../note-list/components/SearchbarComponent';

type Params = {
  tagComponents: React.ReactNode[]
};

export default function TagListPage({ tagComponents }: Params) {
  return (
    <div className="w-full h-full bg-white">
      <SearchbarComponent />
      <div className="grid grid-cols-2 gap-4 py-8 px-12 mb-16 w-full md:grid-cols-3 lg:grid-cols-4">
        {tagComponents}
      </div>
    </div>
  );
}
