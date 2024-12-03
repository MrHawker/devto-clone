

export function HeadNav({ width }: { width: number }) {
  return (
    <header className="sticky top-0 z-[60] flex h-[57px] justify-center border-b border-t-0 bg-white shadow-sm">
      <nav className="flex h-full w-full max-w-[1380px] items-center justify-between md:px-[16px]">
        <div className="flex flex-1 flex-row items-center">
          {width < 768 && (
            <div className="mx-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="asvsi6r1u7ja019xgicufoxwh6ty9c7w"
              >
                <title id="asvsi6r1u7ja019xgicufoxwh6ty9c7w">
                  Navigation menu
                </title>
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
              </svg>
            </div>
          )}

          <img
            className="h-[40px] w-[50px]"
            src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="DEV Community"
          />
          {width >= 768 && (
            <div className="relative mx-[16px] w-full max-w-[680px] flex-1 lg:w-[680px]">
              <input
                className="w-full flex-1 rounded-md border border-slate-300 py-[6.5px] pl-[40px] pr-[142px] font-light text-black placeholder-black transition-all duration-100 placeholder:text-[15px] hover:border-slate-400 focus:outline-none focus:ring-[1.5px] focus:ring-blue-700"
                placeholder="Search..."
              ></input>
              <div className="absolute bottom-[1px] left-[1px] right-auto top-[1px] px-[8px]">
                <button className="h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                  </svg>
                </button>
              </div>
              <button className="absolute bottom-[8.1px] left-auto right-[8px] top-[3px] mt-[8px] flex pl-[3px] text-[12.5px] font-light text-slate-600">
                <span>Powered by</span>
                <div className="flex h-full flex-col justify-center">
                  <svg
                    className="mx-[4px]"
                    fill="#64748b"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    width="14"
                    height="14"
                    viewBox="0 0 500 500.34"
                  >
                    <defs></defs>
                    <path d="M250,0C113.38,0,2,110.16,.03,246.32c-2,138.29,110.19,252.87,248.49,253.67,42.71,.25,83.85-10.2,120.38-30.05,3.56-1.93,4.11-6.83,1.08-9.52l-23.39-20.74c-4.75-4.22-11.52-5.41-17.37-2.92-25.5,10.85-53.21,16.39-81.76,16.04-111.75-1.37-202.04-94.35-200.26-206.1,1.76-110.33,92.06-199.55,202.8-199.55h202.83V407.68l-115.08-102.25c-3.72-3.31-9.43-2.66-12.43,1.31-18.47,24.46-48.56,39.67-81.98,37.36-46.36-3.2-83.92-40.52-87.4-86.86-4.15-55.28,39.65-101.58,94.07-101.58,49.21,0,89.74,37.88,93.97,86.01,.38,4.28,2.31,8.28,5.53,11.13l29.97,26.57c3.4,3.01,8.8,1.17,9.63-3.3,2.16-11.55,2.92-23.6,2.07-35.95-4.83-70.39-61.84-127.01-132.26-131.35-80.73-4.98-148.23,58.18-150.37,137.35-2.09,77.15,61.12,143.66,138.28,145.36,32.21,.71,62.07-9.42,86.2-26.97l150.36,133.29c6.45,5.71,16.62,1.14,16.62-7.48V9.49C500,4.25,495.75,0,490.51,0H250Z"></path>
                  </svg>
                </div>
                <span>Algolia</span>
              </button>
            </div>
          )}
        </div>
        <div className="ml-auto flex items-center">
          {width >= 768 ? (
            <button className="mr-[6px] border border-white px-[16px] py-[8px] text-slate-700 hover:rounded-md hover:bg-blue-600 hover:bg-opacity-15 hover:text-blue-800 hover:underline">
              Log in
            </button>
          ) : (
            <a className="mx-1 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="a4xe9ngxc9oq5cfqfmuwv51twx3m7kek"
              >
                <title id="a4xe9ngxc9oq5cfqfmuwv51twx3m7kek">Search</title>
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
              </svg>
            </a>
          )}

          <button className="mr-[8px] h-full rounded-md border border-blue-700 pb-[7px] pl-[13px] pr-[15px] pt-[9px] text-[15px] font-[550] text-blue-700 hover:bg-blue-700 hover:text-white hover:underline hover:decoration-[1.5px]">
            Create account
          </button>
        </div>
      </nav>
    </header>
  );
}
