"use client";

export default function Products() {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start ">
        <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
          <div className="relative max-h-125 overflow-hidden">
            <img
              className="absolute"
              src="https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt=""
            />
            <img
              className="relative transform duration-500 group-hover:opacity-0"
              src="https://images.unsplash.com/photo-1579612635567-e45dc47a0985?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt=""
            />
          </div>
          <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
            <a target="_blank" href="https://unsplash.com/@mehranhadad">
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgba(0,0,0,0.5)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <ul className="mt-6 font-semibold text-gray-500">
            <li className="inline mr-3 pb-1 border-b-2 border-green-500">
              Features
            </li>
            <li className="inline mr-3 pb-1 border-b-2 border-green-500">
              Fashion
            </li>
          </ul>
          <p className="mt-6  text-xl leading-relaxed text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            aliquid atque officia? Earum dolores voluptatibus reiciendis,
            excepturi corporis corrupti eaque!
          </p>
          <p className="text-gray-400 mt-10 font-semibold">23rd March, 2021</p>
        </article>
        <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
          <div className="relative max-h-125 overflow-hidden">
            <img
              className="absolute"
              src="https://images.unsplash.com/photo-1526411803240-adf6120a86e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=932&q=80"
              alt=""
            />
            <img
              className="relative transform duration-500 group-hover:opacity-0"
              src="https://images.unsplash.com/photo-1527189919029-aeb3d997547d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80"
              alt=""
            />
          </div>
          <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
            <a target="_blank" href="https://unsplash.com/@danteov_seen">
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgba(0,0,0,0.5)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <ul className="mt-6 font-semibold text-gray-500">
            <li className="inline mr-3 pb-1 border-b-2 border-green-500">
              Features
            </li>
            <li className="inline mr-3 pb-1 border-b-2 border-green-500">
              Fashion
            </li>
          </ul>
          <p className="mt-6  text-xl leading-relaxed text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            aliquid atque officia? Earum dolores voluptatibus reiciendis,
            excepturi corporis corrupti eaque!
          </p>
          <p className="text-gray-400 mt-10 font-semibold">23rd March, 2021</p>
        </article>
        <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
          <div className="relative max-h-125 overflow-hidden">
            <img
              className="absolute"
              src="https://images.unsplash.com/photo-1606763106075-85bfbe11e07f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt=""
            />
            <img
              className="relative transform duration-500 group-hover:opacity-0"
              src="https://images.unsplash.com/photo-1606763106198-4ffc663c2419?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt=""
            />
          </div>
          <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
            <a target="_blank" href="https://unsplash.com/@guilhermestecanella">
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgba(0,0,0,0.5)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <ul className="mt-6 font-semibold text-gray-500">
            <li className="inline mr-3 pb-1 border-b-2 border-green-500">
              Features
            </li>
            <li className="inline mr-3 pb-1 border-b-2 border-green-500">
              Fashion
            </li>
          </ul>
          <p className="mt-6  text-xl leading-relaxed text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            aliquid atque officia? Earum dolores voluptatibus reiciendis,
            excepturi corporis corrupti eaque!
          </p>
          <p className="text-gray-400 mt-10 font-semibold">23rd March, 2021</p>
        </article>
        <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
          <div className="relative max-h-125 overflow-hidden">
            <img
              className="absolute"
              src="https://images.unsplash.com/photo-1592182384017-d88cbb6c912d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt=""
            />
            <img
              className="relative transform duration-500 group-hover:opacity-0"
              src="https://images.unsplash.com/photo-1598062548091-a6fb6a052562?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt=""
            />
          </div>
          <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
            <a target="_blank" href="https://unsplash.com/@guilhermestecanella">
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgba(0,0,0,0.5)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <ul className="mt-6 font-semibold text-gray-500">
            <li className="inline mr-3 pb-1 border-b-2 border-green-500">
              Features
            </li>
            <li className="inline mr-3 pb-1 border-b-2 border-green-500">
              Fashion
            </li>
          </ul>
          <p className="mt-6  text-xl leading-relaxed text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            aliquid atque officia? Earum dolores voluptatibus reiciendis,
            excepturi corporis corrupti eaque!
          </p>
          <p className="text-gray-400 mt-10 font-semibold">23rd March, 2021</p>
        </article>
      </section>
    </section>
  );
}
