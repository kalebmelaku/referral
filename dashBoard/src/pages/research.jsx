import React, { useState } from "react";

function Research() {
  const [year, setYear] = useState("");
  const [feedback, setFeedback] = useState(false);

  const handleInputChange = (event) => {
    setYear(event.target.value);
  };

  const handleInputBlur = () => {
    if (year < 1900 || year > 2099) {
      setFeedback(!feedback);
      setYear("");
    } else {
      setFeedback(false);
    }
  };
  return (
    <>
      <div className="w-[700px] h-max mx-auto border my-2 rounded">
        <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg dark:text-white text-center">
            Upload Research Documents
          </h2>
          <div class="mb-4">
            <label
              class="block dark:text-white  text-sm font-bold mb-2"
              for="username"
            >
              Name of Author
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label
              class="block dark:text-white  text-sm font-bold mb-2"
              for="username"
            >
              Title of Research
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label
              class="block dark:text-white  text-sm font-bold mb-2"
              for="username"
            >
              Publication Year
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="number"
              min={1900}
              max={2099}
              step={1}
              value={year}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {feedback ? (
              <p className="text-red-500 text-xs italic mt-1">
                Please enter a year between 1900 and 2099.
              </p>
            ) : null}
          </div>
          <div class="mb-6">
            <label
              class="block dark:text-white  text-sm font-bold mb-2"
              for="password"
            >
              Research File
            </label>
            <input
              class="shadow dark:text-white appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="file"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Research;
