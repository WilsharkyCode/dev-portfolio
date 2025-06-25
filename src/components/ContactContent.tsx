export default function ContactContent() {
  return (
    <div>
      <div className="dashboard-container-contacts xl:h-[20rem] lg:h-[10rem] lg:mb-4 z-0">
        <b className="xl:text-2xl lg:text-xl text-base text-slate-100 z-0">
          CONTACT ME
        </b>
        {/* Link Container */}
        <div>
          <p className="xl:text-xl lg:text-sm text-sm text-slate-100 text-wrap">
            EMAIL: markwilshirefamorca@gmail.com
          </p>

          <p
            className="flex items-center gap-2 xl:text-xl lg:text-sm text-sm text-slate-100 cursor-pointer hover:text-cyan-300 hover:animate-glow"
            onClick={() => window.open('https://github.com/WilsharkyCode', '_blank')}
          >
            GITHUB
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline align-middle xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-4 h-4"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/>
              </g>
            </svg>
          </p>

          <p
            className="flex items-center gap-2 xl:text-xl lg:text-sm text-sm text-slate-100 cursor-pointer hover:text-cyan-300 hover:animate-glow"
            onClick={() => window.open('https://linkedin.com/in/wilshire-famorca', '_blank')}
          >
            LINKEDIN
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline align-middle xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-4 h-4 "
            >
              <g fill="none" fillRule="evenodd">
                <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/>
              </g>
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
