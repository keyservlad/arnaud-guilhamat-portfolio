import { useState } from "react";
import Rounded from "~/components/common/RoundedButton";

import {
  type SubmitHandler,
  useForm,
  type UseFormRegister,
  type FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useAppContext } from "~/context/appContext";

const validationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  message: z.string().min(1, { message: "Lastname is required" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

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
  const [isLoading, setIsLoading] = useState(false);
  const { notify } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    setIsLoading(true);
    const message = data.message
      .split("\n")
      .map((line) => {
        if (line === "") {
          // return "<br/>";
        } else {
          return "<p>" + line + "</p>";
        }
      })
      .join("");

    try {
      sendMail(
        data.email,
        "Confirmation of receipt of your message",
        "<p>Here is a copy of the message sent. I will get back to you as soon as possible.</p>" +
          message,
      );

      sendMail(
        "arnaud.guilhamat@emovin.fr",
        "contact depuis portfolio : " + data.name + " - " + data.email,
        message,
      );

      notify();
      clearInputs();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      return Promise.resolve();
    }
  };

  async function sendMail(email: string, subject: string, message: string) {
    await axios("/api/send-mail", {
      params: {
        email: email,
        subject: subject,
        message: message,
      },
    });
  }

  const clearInputs = () => {
    inputs.map((input) => {
      const inputElement = document.getElementById(
        input.idInput,
      ) as HTMLInputElement | null;
      if (inputElement) {
        inputElement.value = "";
      }
    });
  };

  return (
    <div className="w-[73%] pr-16">
      <form
        data-scroll-section
        onSubmit={handleSubmit(onSubmit)}
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
            register={register}
            errors={errors}
          />
        ))}

        <div className="relative z-10 float-right flex w-fit -translate-x-[20%] -translate-y-[60%] ">
          <button
            type={isLoading ? "button" : "submit"}
            data-scroll
            data-scroll-speed="2"
            data-scroll-offset="50%, 0%"
            // TODO : parallax doesnt work
          >
            <Rounded
              backgroundColor={"#334BD3"}
              backgroundColorHover={"#455CE9"}
              style={`relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full text-white z-10 ${
                isLoading ? "cursor-wait" : "cursor-pointer"
              }}`}
            >
              {isLoading ? (
                <p
                  style={{ transition: "color 0.4s linear" }}
                  className="font- z-30 m-0 cursor-wait text-lg"
                >
                  Sending...
                </p>
              ) : (
                <p
                  style={{ transition: "color 0.4s linear" }}
                  className="font- z-30 m-0 cursor-pointer text-lg"
                >
                  Send it!
                </p>
              )}
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
  register,
  errors,
}: {
  label: string;
  placeholder: string;
  idInput: string;
  index: number;
  type: string;
  register: UseFormRegister<{
    message: string;
    name: string;
    email: string;
  }>;
  errors: FieldErrors<{
    name: string;
    email: string;
    message: string;
  }>;
}) {
  const [isEmpty, setIsEmpty] = useState(true);

  if (idInput !== "message" && idInput !== "email" && idInput !== "name")
    return null;

  return (
    <div
      key={index}
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
            id={idInput}
            {...register(idInput)}
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
            {...register(idInput)}
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
        {errors.name && idInput === "name" ? (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.name?.message}
          </p>
        ) : errors.email && idInput === "email" ? (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.email?.message}
          </p>
        ) : errors.message && idInput === "message" ? (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.message?.message}
          </p>
        ) : (
          <p className="mt-2 text-xs italic text-transparent">
            {" "}
            {errors.message?.message}
          </p>
        )}
      </div>
    </div>
  );
}
