export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`border border-gray-300 hover:bg-green-600 active:bg-sky-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
