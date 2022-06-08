import _ from 'lodash';
import React from 'react';
import { NoteType } from '../../typedefs/NoteType';
import NoteTileComponent from '../components/NoteTileComponent';

function SingleNoteMapper(data: NoteType[]) {
  const mappedData = data.map((element) => (
    <NoteTileComponent key={element.timestamp} noteType={element} />
  ));

  return mappedData;
}

export default function NoteDataMapper(data: NoteType[]) {
  const te = _.groupBy(data, (value) => new Date(value.timestamp).toDateString());
  const tes = _.mapValues(te, (value, key) => (
    <React.Fragment key={key}>
      <h1 className="mb-8 text-5xl text-black font-libre-baskerville">{key}</h1>
      <div className="grid grid-cols-2 gap-4 mb-16 w-full md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {SingleNoteMapper(value)}
      </div>
    </React.Fragment>
  ));
  return _.values(tes);
}
