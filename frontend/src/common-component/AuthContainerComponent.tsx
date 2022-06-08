import React from 'react';

type Params = {
  heading: string,
  alternativeText: string,
  alternativeActionText: string,
  alternativeAction: React.MouseEventHandler,
  children: React.ReactNode
};

export default function AuthContainerComponent({
  heading, alternativeText, alternativeActionText, alternativeAction, children,
}: Params) {
  return (
    <div className="flex flex-col justify-center items-center w-1/3">
      <h1 className="text-6xl font-bold text-white font-roboto">{heading}</h1>
      <div className="h-16" />
      {children}
      <div className="h-16" />
      <p className="text-lg text-gray-200 font-lato">
        {alternativeText}
        {' '}
        <button
          className="text-xl text-blue-500 underline underline-offset-2 font-lato"
          type="button"
          onClick={alternativeAction}
        >
          {alternativeActionText}
        </button>
      </p>
    </div>
  );
}
