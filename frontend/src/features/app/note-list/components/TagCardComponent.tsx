import { TagType } from '../../typedefs/TagType';

type Params = {
  tag: TagType
};

export default function TagCardComponent({ tag }: Params) {
  return (
    <div
      className="flex relative justify-center items-center py-20 w-full rounded-lg"
      style={{ backgroundColor: tag.body_color }}
    >
      <p
        className="text-3xl font-libre-baskerville"
        style={{ color: tag.text_color }}
      >
        {tag.name}
      </p>
      <p
        className="absolute top-4 right-5 text-xl font-libre-baskerville"
        style={{ color: tag.text_color }}
      >
        {tag.total}
      </p>
    </div>
  );
}
