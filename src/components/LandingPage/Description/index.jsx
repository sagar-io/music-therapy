export const Description = () => {
  return (
    <div className="float-right w-10/12 p-8 my-28">
      <h1 id="#Introduction" className="text-black text-5xl pb-12">Introduction</h1>
      <div className="  flex justify-around gap-8">
        <p className="border-l-4 pl-3 border-orange-600 max-w-xl text-xl font-comfotaa text-justify">
          Music therapy is a technique of complementary medicine that uses music
          prescribed in a skilled manner by trained therapists. Programs are
          designed to help patients overcome physical, emotional, intellectual,
          and social challenges. Applications range from improving the well
          being of geriatric patients in nursing homes to lowering the stress
          level and pain of women in labor. Music therapy is used in many
          settings, including schools, rehabilitation centers, hospitals,
          hospices, nursing homes, community centers, and sometimes even in the
          home.
        </p>

        <AsideDescription />
      </div>
    </div>
  );
};

const AsideDescription = () => {
  return (
    <div className="border-2 rounded-lg shadow-md">
      <img
        className="text-center rounded-lg "
        src="assets/music-logo-b.png"
        alt="musical-note-icon"
      />
      <a
        href="https://en.wikipedia.org/wiki/Music_therapy"
        rel="noreferrer"
        target="_blank"
      >
        <button className="border-2 rounded-lg px-4 py-1 m-auto block outline-none border-slate-800 bg-blue-600 text-white">
          Read more <br />
          <span className="text-xs float-left text-gray-300">WikiPedia</span>
        </button>
      </a>
    </div>
  );
};
