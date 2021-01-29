import React from "react";

import Textarea from "./Textarea";
import InputField from "./InputField";
import SelectField from "./SelectField";

import { parseVars, formatter } from "../lib/helpers";
import { initInputMessage } from "../lib/config";

const Main = () => {
  let initInputText = initInputMessage;
  if (typeof window !== "undefined") {
    initInputText =
      window.localStorage.getItem("inputText") || initInputMessage;
  }

  const [inputText, setInputText] = React.useState(initInputText);
  const [outputText, setOutputText] = React.useState("");
  const [variables, setVariables] = React.useState({});
  const [copyStatus, setCopyStatus] = React.useState(null);
  const [isHighlighted, setIsHighlighted] = React.useState(true);

  const wrapperRef = React.useRef(null);
  const overlayRef = React.useRef(null);
  const textareaRef = React.useRef(null);

  const handleTextareaChange = (e) => {
    const { value } = e.target;

    setInputText(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("inputText", value);
    }
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setVariables({
      ...variables,
      [name]: value,
    });
  };

  const handleCopyStatus = (statusText) => {
    setCopyStatus(statusText);
    setTimeout(() => {
      setCopyStatus(null);
    }, 1000);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(outputText).then(
      (res) => handleCopyStatus("COPIED!"),
      (err) => handleCopyStatus("ERROR!")
    );
  };

  const toggleHighlights = () => {
    setIsHighlighted(!isHighlighted);
  };

  const handleScroll = () => {
    if (wrapperRef.current && textareaRef.current) {
      const target = textareaRef.current.scrollTop;
      wrapperRef.current.scrollTop = target;
    }
  };

  // Parse inputText for variables
  React.useEffect(() => {
    const parsedVars = parseVars(inputText);

    if (parsedVars.length) {
      parsedVars.forEach((v) => {
        if (variables[v] === undefined) {
          variables[v] = "";
        }
      });
      Object.keys(variables).forEach((v) => {
        if (!parsedVars.includes(v)) {
          delete variables[v];
        }
      });
    } else {
      setVariables({});
    }
  }, [inputText]);

  // Listen for value changes and update the output text field
  React.useEffect(() => {
    const newOutputText = formatter(inputText, variables);

    setOutputText(newOutputText);
  }, [inputText, variables]);

  // Highlight handling
  React.useEffect(() => {
    if (isHighlighted) {
      const newText = inputText
        .replace(
          /{(.*?)}/g,
          '<mark class="bg-orange-500 rounded-sm opacity-50">$&</mark>'
        )
        .replace(
          /!DATE/gi,
          '<mark class="bg-orange-500 rounded-sm opacity-50">$&</mark>'
        );

      overlayRef.current.innerHTML = newText;
    } else {
      overlayRef.current.innerHTML = inputText;
    }
  }, [inputText, isHighlighted]);

  return (
    <main className="grid grid-rows-mobile lg:grid-rows-desktop lg:grid-cols-desktop">
      <div className="grid grid-rows-desktop-text">
        <div className="bg-white min-h-30 relative lg:order-2">
          <div
            ref={wrapperRef}
            className="absolute p-2 text-transparent pointer-events-none h-full w-full overflow-hidden pb-24"
          >
            <div
              ref={overlayRef}
              className="break-words whitespace-pre-wrap pb-24"
            >
              {inputText}
            </div>
          </div>
          <Textarea
            ref={textareaRef}
            handleScroll={handleScroll}
            value={inputText}
            placeholder="Input here.."
            handleChange={handleTextareaChange}
          />
        </div>
        <div className="grid justify-center items-center lg:order-1 bg-gray-800">
          <h3 className="text-white font-medium p-2">INPUT</h3>
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 shadow-sm space-y-4 justify-self-center w-full max-w-lg">
        <span className="flex justify-center space-x-1">
          <a href="https://ashco.io" target="_blank">
            <img
              className="h-12 w-12"
              src="/ashco-icon-white.svg"
              alt="AshCo Icon"
            />
          </a>
          <h1 className="text-white font-medium text-2xl my-2">
            Text Formatter
          </h1>
        </span>
        {Object.keys(variables).length > 0 && (
          <div className="flex flex-col space-y-2 w-full">
            {Object.keys(variables).map((v) => {
              if (v.includes("&")) {
                return (
                  <SelectField
                    key={v}
                    name={v}
                    handleChange={handleInputChange}
                  />
                );
              } else {
                return (
                  <InputField
                    key={v}
                    name={v}
                    handleChange={handleInputChange}
                  />
                );
              }
            })}
            <label className="text-white text-center" htmlFor="highlights">
              Highlights
              <input
                id="highlights"
                name="highlights"
                type="checkbox"
                className="m-2 color-red"
                onChange={toggleHighlights}
                checked={isHighlighted}
              />
            </label>
          </div>
        )}
        <button
          onClick={handleCopyText}
          className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 text-white flex items-center justify-around w-full h-12 font-medium text-lg disabled:bg-gray-600 "
        >
          {copyStatus || "COPY"}
        </button>
      </div>
      <div className="grid grid-rows-desktop-text">
        <div className="grid justify-center items-center bg-gray-800">
          <h3 className="text-white font-medium p-2">OUTPUT</h3>
        </div>
        <div className="bg-gray-400 min-h-30">
          <Textarea
            type="output"
            placeholder="Output here.."
            disabled={true}
            value={outputText}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
