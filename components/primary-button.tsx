import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { children, ...rest } = props;
  const className =
    "max-w-fit inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-80 disabled:pointer-events-none";

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
}
