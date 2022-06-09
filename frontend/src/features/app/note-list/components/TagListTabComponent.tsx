import React from 'react';

type Params = {
  tagComponents: React.ReactNode[]
};

export default function TagListTabComponent({ tagComponents }: Params) {
  return (
    <div className="grid grid-cols-2 gap-4 py-8 px-12 mb-16 w-full md:grid-cols-3 lg:grid-cols-4">
      {tagComponents}
    </div>
  );
}
