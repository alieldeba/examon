export default function NotFound() {
  return (
    <div className="h-[500px] flex items-center justify-center ltr">
      <div className="flex items-center">
        <h1 className="font-semibold text-xl">404</h1>
        <span className="mx-2 font-bold">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <h2>This page could not be found.</h2>
      </div>
    </div>
  );
}
