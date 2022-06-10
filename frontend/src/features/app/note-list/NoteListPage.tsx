import { useMemo } from 'react';
import { NoteType } from '../typedefs/NoteType';
import SearchbarComponent from './components/SearchbarComponent';
import NoteDataMapper from './utils/NoteDataMapper';

type Params = {
  notesData: NoteType[],
};

export default function NoteListPage({ notesData }: Params) {
  const sortedData = notesData.sort((a, b) => b.timestamp - a.timestamp);
  const generatedNotes = useMemo(() => NoteDataMapper(sortedData), [sortedData]);

  return (
    <div className="w-full h-full bg-white">
      <SearchbarComponent />
      <div className="flex overflow-y-scroll flex-col py-8 px-12 w-full h-full">
        {generatedNotes}
      </div>
    </div>
  );
}
