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
    <div className="flex flex-col justify-center items-start px-24 w-screen h-screen bg-gray-900">
      <h1 className="text-6xl text-white font-lato">{heading}</h1>
      <div className="h-8" />
      {children}
      <div className="h-8" />
      <p className="text-xl text-white font-lato">
        {alternativeText}
        {' '}
        <button
          className="text-xl text-blue-500 font-lato"
          type="button"
          onClick={alternativeAction}
        >
          {alternativeActionText}
        </button>
      </p>
    </div>
  );
}
