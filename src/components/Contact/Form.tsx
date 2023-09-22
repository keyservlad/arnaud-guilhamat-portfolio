import { useState } from "react";
import Rounded from "~/components/common/RoundedButton";

const inputs = [
  {
    idInput: "name",
    label: "What's your name?",
    placeholder: "John Doe *",
    type: "text",
  },
  {
    idInput: "email",
    label: "What's your email?",
    placeholder: "john@doe.com *",
    type: "email",
  },
  {
    idInput: "message",
    label: "Your message",
    placeholder: "Hello Arnaud, I would like to talk about... *",
    type: "text",
  },
];

export default function Form() {
  return (
    <div className="w-[73%] pr-16">
      <form
        data-scroll-section
        className="relative block w-full text-2xl font-medium"
      >
        {inputs.map((input, index) => (
          <InputForm
            key={index}
            index={index}
            label={input.label}
            placeholder={input.placeholder}
            idInput={input.idInput}
            type={input.type}
          />
        ))}
        <div className="relative z-10 float-right flex w-fit -translate-x-[20%] -translate-y-[60%] ">
          <button
            data-scroll
            data-scroll-speed="2"
            data-scroll-offset="50%, 0%"
            // TODO : parallax doesnt work
          >
            <Rounded
              backgroundColor={"#334BD3"}
              backgroundColorHover={"#455CE9"}
              style="relative flex h-44 w-44 cursor-pointer items-center justify-center overflow-hidden rounded-full text-white z-10"
            >
              <p
                style={{ transition: "color 0.4s linear" }}
                className="font- z-30 m-0 cursor-pointer text-lg"
              >
                Send it!
              </p>
            </Rounded>
          </button>
        </div>
      </form>
    </div>
  );
}

function InputForm({
  label,
  placeholder,
  idInput,
  index,
  type,
}: {
  label: string;
  placeholder: string;
  idInput: string;
  index: number;
  type: string;
}) {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div
      className={`relative flex w-full flex-row gap-12 border-y-[rgba(255,255,255,0.2)] pt-11 ${
        index === 0 ? "border-y" : "border-b"
      }`}
    >
      <h5 className="opacity-30">0{index + 1}</h5>
      <div className="flex w-full flex-col">
        <label
          htmlFor={idInput}
          className={`transition-all duration-200 ease-in-out ${
            !isEmpty ? "opacity-30" : "opacity-100"
          }`}
        >
          {label}
        </label>
        {idInput === "message" ? (
          <textarea
            name={idInput}
            id={idInput}
            required
            rows={8}
            placeholder={placeholder}
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setIsEmpty(false);
              } else {
                setIsEmpty(true);
              }
            }}
            className="w-full resize-none border-0 bg-transparent pb-11 pt-5 placeholder-white placeholder-opacity-30 outline-none"
          />
        ) : (
          <input
            type={type}
            name={idInput}
            id={idInput}
            required
            placeholder={placeholder}
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setIsEmpty(false);
              } else {
                setIsEmpty(true);
              }
            }}
            className="w-full border-0 bg-transparent pb-11 pt-5 placeholder-white placeholder-opacity-30 outline-none"
          />
        )}
      </div>
    </div>
  );
}
