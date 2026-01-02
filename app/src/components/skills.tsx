interface SkillProps {
  tags: string[];
  title: string;
}

export default function Skills({ tags, title }: SkillProps) {
  return (
    <div className="m-3">
      <div className="bg-black/20 backdrop-blur-[5px] flex flex-col p-6 rounded-2xl gap-3 m-auto h-40 lg:w-[300px] max-w-[300px] pb-6 border border-white/10">
        <h3 className="text-md font-semibold">{title}</h3>

        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <button
              key={tag}
              className="bg-white/5 border border-white/5 rounded-2xl py-1.5 px-6 text-[14px]"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
