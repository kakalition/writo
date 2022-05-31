import { TagType } from './TagType';

export type NoteType = {
  title: string,
  body: string,
  tag: TagType[],
  timestamp: number,
};
