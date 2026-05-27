import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  demoLink,
  githubLink,
}: ProjectCardProps) {

  return (
  <div
    className="
      relative

      p-5

      rounded-3xl
      border border-white/5

      bg-purple-900/5
      backdrop-blur-xl

      overflow-hidden

      flex flex-col lg:flex-row

      shadow-[0_20px_80px_rgba(0,0,0,0.35)]

      transition-all duration-300
      hover:border-purple-500/30
      hover:shadow-[0_25px_90px_rgba(0,0,0,0.45),0_0_40px_rgba(168,85,247,0.06)]
    "
  >
    {/* TOP LIGHT REFLECTION */}
    
     {/* Purple bloom */}
  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_55%)]
      pointer-events-none
    "
  />
    

    {/* LEFT SIDE */}
    <div
      className="
        
        lg:w-3/5

        p-6

        flex
        items-center

        border-b lg:border-b-0
        lg:border-r

        border-white/5
      "
    >

      {/* MINI BROWSER CARD */}
      <div
        className="
          w-full

          rounded-xl

          overflow-hidden

          border border-white/10

          bg-neutral-900

          shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        "
      >

        {/* Browser Top */}
        <div
          className="
            flex gap-3

            bg-neutral-800/90

            px-4 py-5

            border-b border-white/10
          "
        >
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* Screenshot */}
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="
            w-full
            object-cover
            brightness-110

            transition-transform
            duration-500

            hover:scale-[1.02]
          "
        />

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div
      className="
        lg:w-2/5

        p-8 lg:p-10

        flex
        flex-col
        justify-center

        gap-6
      "
    >

      <span
        className="
          text-sm
          font-semibold

          tracking-wide

          text-purple-400
        "
      >
        FEATURE PROJECT
      </span>

      <h2
        className="
          text-3xl
          font-bold

          text-white
        "
      >
        {title}
      </h2>

      <p
        className="
          text-gray-400

          leading-relaxed
        "
      >
        {description}
      </p>

      {/* STACK */}
      <div
        className="
          flex
          flex-wrap

          gap-3
        "
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full

              bg-white/5

              px-4 py-2

              text-sm
              text-gray-200

              border border-white/5
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div
        className="
          flex
          flex-wrap

          gap-4

          pt-2
        "
      >

        <a
          href={demoLink}
          className="
            rounded-xl

            bg-purple-600

            px-6 py-3

            font-medium

            transition

            hover:bg-purple-500
          "
        >
          Live Demo
        </a>

        <a
          href={githubLink}
          className="
            rounded-xl

            border border-white/10

            px-6 py-3

            font-medium

            transition

            hover:border-white/30
          "
        >
          Github
        </a>

      </div>

    </div>

  </div>
)

}