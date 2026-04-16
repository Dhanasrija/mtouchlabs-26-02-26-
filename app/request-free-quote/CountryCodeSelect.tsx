"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountryOption = {
  code: string;
  flagSrc: string;
  label: string;
};

type CountryCodeSelectProps = {
  buttonClassName: string;
  defaultValue: string;
  id: string;
  name: string;
  options: readonly CountryOption[];
};

export function CountryCodeSelect({
  buttonClassName,
  defaultValue,
  id,
  name,
  options,
}: CountryCodeSelectProps) {
  const initialOption = useMemo(
    () => options.find((option) => option.code === defaultValue) ?? options[0],
    [defaultValue, options]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialOption);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedOption(initialOption);
  }, [initialOption]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" id={id} name={name} value={selectedOption.code} />
      <button
        type="button"
        aria-controls={`${id}-listbox`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`${buttonClassName} justify-between gap-3`}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="flex items-center gap-3">
          <img
            src={selectedOption.flagSrc}
            alt=""
            aria-hidden="true"
            className="h-4 w-6 rounded-[4px] object-cover ring-1 ring-[#d9ddea]"
          />
          <span>{selectedOption.code}</span>
        </span>
        <span
          className={`h-2.5 w-2.5 shrink-0 border-r-2 border-b-2 border-[#1b1d22] transition-transform ${
            isOpen ? "rotate-[225deg]" : "rotate-45"
          }`}
        />
      </button>

      {isOpen ? (
        <div
          id={`${id}-listbox`}
          role="listbox"
          aria-labelledby={id}
          className="absolute left-0 top-full z-30 mt-2 max-h-72 min-w-full max-w-[calc(100vw-2rem)] overflow-y-auto rounded-[18px] border border-[#d9ddea] bg-white p-2 shadow-[0_20px_50px_rgba(52,78,144,0.14)] sm:w-[260px]"
        >
          {options.map((option) => {
            const isSelected = option.code === selectedOption.code;

            return (
              <button
                key={option.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`flex w-full items-center justify-between rounded-[14px] px-3 py-3 text-left transition-colors ${
                  isSelected
                    ? "bg-[#edf4ff] text-[#1b1d22]"
                    : "text-[#34363d] hover:bg-[#f5f7ff]"
                }`}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
              >
                <span className="flex items-center gap-3">
                  <img
                    src={option.flagSrc}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-6 rounded-[4px] object-cover ring-1 ring-[#d9ddea]"
                  />
                  <span>
                    <span className="block text-[15px] font-medium leading-5">
                      {option.label}
                    </span>
                    <span className="block text-[13px] leading-5 text-[#6f6f76]">
                      {option.code}
                    </span>
                  </span>
                </span>
                {isSelected ? (
                  <span className="text-[13px] font-semibold text-[#4386ee]">
                    Selected
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
