import { useMemo } from 'react';
import SearchbarComponent from '../note-list/components/SearchbarComponent';
import TagCardComponent from '../note-list/components/TagCardComponent';
import { TagCollectionType } from '../typedefs/TagCollectionType';

type Params = {
  tagCollectionData: TagCollectionType[]
};

export default function TagListPage({ tagCollectionData }: Params) {
  const generatedTags = useMemo(() => tagCollectionData.map(
    (element) => <TagCardComponent key={`${element.name}${element.text_color}`} tag={element} />,
  ), [tagCollectionData]);

  return (
    <div className="w-full h-full bg-white">
      <SearchbarComponent />
      <div className="grid grid-cols-2 gap-4 py-8 px-12 mb-16 w-full md:grid-cols-3 lg:grid-cols-4">
        {generatedTags}
      </div>
    </div>
  );
}
