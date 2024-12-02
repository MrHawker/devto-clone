export function Body() {
  return (
    <div>
      <header className="flex justify-start py-[8px] text-[18px] tracking-tighter md:mb-2 md:py-0">
        <div className="rounded-lg px-[12px] py-[4px] font-bold hover:cursor-pointer hover:bg-white hover:text-blue-700">
          Relevant
        </div>
        <div className="rounded-lg px-[12px] py-[4px]  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700">
          Latest
        </div>
        <div className="rounded-lg px-[12px] py-[4px]  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700">
          Top
        </div>
      </header>
      <div
        id="Featured"
        className="mb-2 lg:rounded shadow-sm ring-[1px] ring-slate-200"
      >
        <img
          src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Forqhkfvmo0d09p69hq52.PNG"
          width="1000"
          height="420"
          className="lg:rounded bg-[#dddddd]"
          alt="Cover image for How to Write a Token Price Oracle Smart Contract"
        />
        <div className="rounded-b bg-white p-[20px] pb-[23px]">
          <div className="mb-2 flex h-[35px]">
            <img
              className="mr-[9px] mt-[1px] h-[32px] w-[32px] rounded-full ring-[0.2px] ring-black"
              src="https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2461201%2F44044c84-4d08-40a0-bc28-56942db7d6e6.png"
              alt="marksantiago02 profile"
              loading="lazy"
            />
            <div className="flex flex-col justify-center">
              <button className="ml-[-4px] rounded p-1 text-sm transition-colors duration-200 hover:bg-[#f5f5f5]">
                Mark Santiago
              </button>
              <button className="mt-[-4px] pb-1 text-start text-[12.5px]  text-slate-600 hover:text-black">
                Dec 1
              </button>
            </div>
          </div>
          <div className="lg:pl-[40px]">
            <h1
              style={{ lineHeight: "38px" }}
              className="mb-[4px] font-bold tracking-tight hover:cursor-pointer hover:text-blue-800 lg:text-3xl"
            >
              How to Write a Token Price Oracle Smart Contract
            </h1>
            <div className="mb-[11.5px] ml-[-4px] mt-2 text-[13.2px]  text-slate-700">
              <a className="px-[7px] py-[4px] hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:bg-opacity-10 hover:border-blue-400 hover:border border border-transparent">
                #webdev
              </a>
              <a className="px-[7px] py-[4px] hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:bg-opacity-10 hover:border-blue-400 hover:border border border-transparent">
                #smartcontract
              </a>
              <a className="px-[7px] py-[4px] hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:bg-opacity-10 hover:border-blue-400 hover:border border border-transparent">
                #oracle
              </a>
              <a className="px-[7px] py-[4px] hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:bg-opacity-10 hover:border-blue-400 hover:border border border-transparent">
                #solidity
              </a>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-[13.2px]">
                <div className="ml-[-10.5px] mt-1 flex items-center rounded-md py-1 pl-2 pr-3 text-slate-600 transition-colors duration-200 hover:cursor-pointer hover:bg-[#f5f5f5]">
                  <span className="z-50 mr-[-10.5px] rounded-full border-2 border-white bg-[#f5f5f5] p-[3.5px] py-[5px]">
                    <img
                      className="mt-[-3px]"
                      src="https://assets.dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                      width="18"
                      height="18"
                    />
                  </span>
                  <span className="z-40 mr-[-10.5px] rounded-full border-2 border-white bg-[#f5f5f5] p-[3.5px] py-[5px]">
                    <img
                      className="mt-[-3px]"
                      src="https://assets.dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                      width="18"
                      height="18"
                    />
                  </span>
                  <span className="z-30 mr-[-10.5px] rounded-full border-2 border-white bg-[#f5f5f5] p-[3.5px] py-[5px]">
                    <img
                      className="mt-[-3px]"
                      src="https://assets.dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                      width="18"
                      height="18"
                    />
                  </span>
                  <span className="z-20 mr-[-10.5px] rounded-full border-2 border-white bg-[#f5f5f5] p-[3.5px] py-[5px]">
                    <img
                      className="mt-[-3px]"
                      src="https://assets.dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                      width="18"
                      height="18"
                    />
                  </span>
                  <span className="z-10 mr-[-10.5px] rounded-full border-2 border-white bg-[#f5f5f5] p-[3.5px] py-[5px]">
                    <img
                      className="mt-[-3px]"
                      src="https://assets.dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                      width="18"
                      height="18"
                    />
                  </span>
                  <span className="ml-[14px]">19 reactions</span>
                </div>
                <button className="mt-[4px] flex items-center rounded-md py-[5px] pl-[8px] pr-[12px] text-slate-600 transition-colors duration-200 hover:cursor-pointer hover:bg-[#f5f5f5]">
                  <svg
                    fill="#475569"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    role="img"
                    aria-labelledby="al6gkz6lljlc2hedem16mimh60ep36wx"
                    className="mr-1"
                  >
                    <title id="al6gkz6lljlc2hedem16mimh60ep36wx">
                      Comments
                    </title>
                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                  </svg>
                  5 comments
                </button>
              </div>
              <div className="flex items-center">
                <small className="mr-[8px] mt-1 text-xs tracking-tight text-slate-600">
                  4 min read
                </small>
                <button className="rounded p-2 hover:bg-blue-600 hover:bg-opacity-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Array.from({ length: 30 }, (_, index) => (
        <div key={index} className="lg:rounded bg-white p-[20px] pb-[23px] mb-2 shadow-sm ring-[1px] ring-slate-200">
          <div className="mb-2 flex h-[35px]">
            <img
              className="mr-[9px] mt-[1px] h-[32px] w-[32px] rounded-full ring-[0.2px] ring-black"
              src="https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F429722%2F42a2e2d8-e835-4781-9fd7-6c9da021a43f.jpg"
              alt="marksantiago02 profile"
              loading="lazy"
            />
            <div className="flex flex-col justify-center">
              <button className="ml-[-4px] rounded p-1 text-sm transition-colors duration-200 hover:bg-[#f5f5f5]">
                Pratik Singh
              </button>
              <button className="mt-[-4px] pb-1 text-start text-[12.5px]  text-slate-600 hover:text-black">
                Nov 30
              </button>
            </div>
          </div>
          <div className="lg:pl-[40px]">
            <h1 className="mb-[4px] font-bold tracking-tight hover:cursor-pointer hover:text-blue-800 lg:text-[23.5px]">
              Say Goodbye to tedious Code Reviews
            </h1>
            <div className="mb-[11.5px] ml-[-4px] mt-2 text-[13.2px]  text-slate-700">
              <a className="px-[7px] py-[4px] hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:bg-opacity-10 hover:border-blue-400 hover:border border border-transparent">
                #webdev
              </a>
              <a className="px-[7px] py-[4px] hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:bg-opacity-10 hover:border-blue-400 hover:border border border-transparent">
                #smartcontract
              </a>
              <a className="px-[7px] py-[4px] hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:bg-opacity-10 hover:border-blue-400 hover:border border border-transparent">
                #oracle
              </a>
              <a className="px-[7px] py-[4px] hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:bg-opacity-10 hover:border-blue-400 hover:border border border-transparent">
                #solidity
              </a>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-[13.2px]">
                <div className="ml-[-10.5px] mt-1 flex items-center rounded-md py-1 pl-2 pr-3 text-slate-600 transition-colors duration-200 hover:cursor-pointer hover:bg-[#f5f5f5]">
                  <span className="z-50 mr-[-10.5px] rounded-full border-2 border-white bg-[#f5f5f5] p-[3.5px] py-[5px]">
                    <img
                      className="mt-[-3px]"
                      src="https://assets.dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                      width="18"
                      height="18"
                    />
                  </span>
                  <span className="z-40 mr-[-10.5px] rounded-full border-2 border-white bg-[#f5f5f5] p-[3.5px] py-[5px]">
                    <img
                      className="mt-[-3px]"
                      src="https://assets.dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                      width="18"
                      height="18"
                    />
                  </span>
                  <span className="z-30 mr-[-10.5px] rounded-full border-2 border-white bg-[#f5f5f5] p-[3.5px] py-[5px]">
                    <img
                      className="mt-[-3px]"
                      src="https://assets.dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                      width="18"
                      height="18"
                    />
                  </span>
                  <span className="z-20 mr-[-10.5px] rounded-full border-2 border-white bg-[#f5f5f5] p-[3.5px] py-[5px]">
                    <img
                      className="mt-[-3px]"
                      src="https://assets.dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                      width="18"
                      height="18"
                    />
                  </span>
                  <span className="z-10 mr-[-10.5px] rounded-full border-2 border-white bg-[#f5f5f5] p-[3.5px] py-[5px]">
                    <img
                      className="mt-[-3px]"
                      src="https://assets.dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                      width="18"
                      height="18"
                    />
                  </span>
                  <span className="ml-[14px]">19 reactions</span>
                </div>
                <button className="mt-[4px] flex items-center rounded-md py-[5px] pl-[8px] pr-[12px] text-slate-600 transition-colors duration-200 hover:cursor-pointer hover:bg-[#f5f5f5]">
                  <svg
                    fill="#475569"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    role="img"
                    aria-labelledby="al6gkz6lljlc2hedem16mimh60ep36wx"
                    className="mr-1"
                  >
                    <title id="al6gkz6lljlc2hedem16mimh60ep36wx">
                      Comments
                    </title>
                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                  </svg>
                  5 comments
                </button>
              </div>
              <div className="flex items-center">
                <small className="mr-[8px] mt-1 text-xs tracking-tight text-slate-600">
                  4 min read
                </small>
                <button className="rounded p-2 hover:bg-blue-600 hover:bg-opacity-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
