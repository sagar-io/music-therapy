
export const Footer = () => {
  return (
    <div className="w-10/12 float-right flex justify-between p-12 bg-teal-300 text-black">
      <div className="text-xl">
        <p>FRONTEND SHOWDOWN</p>
        <p>Round 2</p>
        <p>
          Designed by -{" "}
          <a
            href="https://www.sagarsharma.tech"
            rel="noreferrer"
            target="_blank"
            className="developer"
          >
            <span className="font-bold text-blue-800">
            Sagar Sharma
            </span>
          </a>
        </p>
      </div>
      <div className="flex flex-col align-middle justify-center gap-8">
        <a
          href="https://cxi-miet.github.io/Frontend-Showdown/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="w-36 h-36 rounded-xl self-center"
            src="assets/FS Logo.jpeg"
            alt="Front-end Showdown"
          />
        </a>
        <div className="flex">
          <a
            href="https://github.com/sagar-io/music-therapy"
            rel="noreferrer"
            target="_blank"
          >
            <img src="assets/github.png" alt="GitHub"
            className="w-24 h-24 rounded-full" />
          </a>
          <a
            className="ml-2"
            href="https://www.linkedin.com/in/sagar-sharma-developer/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="assets/linkedin.png"
              className="w-24 h-24 rounded-full"
              alt="linkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
