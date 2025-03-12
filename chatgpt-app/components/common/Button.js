export default function Button({ children, className, onclick, ...props }) {
  return <button {...props}>{children}</button>;
}

// className={`rounded-md border border-gray-300 hover:bg-green-600 active:bg-sky-700 ${className}`}
