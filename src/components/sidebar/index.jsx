import React from "react";

const Sidebar = () => {
  return (
    <div
      id="logo-sidebar"
      className="flex top-[80px] left-0  w-64 "
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-WHITE dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <div
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5Z"
                  fill="#4388BB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.16146 4L18.8385 4C19.3657 3.99999 19.8205 3.99997 20.195 4.03057C20.5904 4.06288 20.9836 4.13419 21.362 4.32699C21.9265 4.61461 22.3854 5.07355 22.673 5.63803C22.8658 6.01641 22.9371 6.40963 22.9694 6.80498C23 7.17954 23 7.6343 23 8.16144V15.8386C23 16.3657 23 16.8205 22.9694 17.195C22.9371 17.5904 22.8658 17.9836 22.673 18.362C22.3854 18.9265 21.9265 19.3854 21.362 19.673C20.9836 19.8658 20.5904 19.9371 20.195 19.9694C19.8205 20 19.3657 20 18.8386 20L5.16131 20C4.63424 20 4.17951 20 3.80497 19.9694C3.40963 19.9371 3.01641 19.8658 2.63803 19.673C2.07355 19.3854 1.6146 18.9265 1.32698 18.362C1.13419 17.9836 1.06287 17.5904 1.03057 17.195C0.999971 16.8205 0.999985 16.3657 1 15.8386V8.16141C0.999985 7.6343 0.999971 7.17953 1.03057 6.80497C1.06287 6.40963 1.13419 6.01641 1.32698 5.63803C1.6146 5.07354 2.07355 4.6146 2.63803 4.32698C3.01641 4.13419 3.40963 4.06287 3.80498 4.03057C4.17953 3.99997 4.63434 3.99998 5.16146 4ZM8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12ZM6 9C6.55229 9 7 9.44772 7 10V14C7 14.5523 6.55229 15 6 15C5.44772 15 5 14.5523 5 14V10C5 9.44772 5.44772 9 6 9ZM19 10C19 9.44772 18.5523 9 18 9C17.4477 9 17 9.44772 17 10V14C17 14.5523 17.4477 15 18 15C18.5523 15 19 14.5523 19 14V10Z"
                  fill="#4388BB"
                />
              </svg>

              <span className="ms-3 text-PRIMARY">Transaksi</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
