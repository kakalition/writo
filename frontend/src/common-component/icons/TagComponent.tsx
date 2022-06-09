type Params = {
  name: string,
  body_color: string,
  text_color: string,
};

export default function TagComponent({
  name, body_color, text_color,
}: Params) {
  return (
    <div
      className="py-[0.25rem] px-[0.55rem] rounded-md"
      style={{ backgroundColor: body_color }}
    >
      <p
        className="text-sm roboto"
        style={{ color: text_color }}
      >
        {name}
      </p>
    </div>
  );
}
