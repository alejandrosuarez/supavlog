type ButtonProps =
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | {
      type?: "primary";
      children: React.ReactNode;
    };

export default function Button({ children, type, ...props }: ButtonProps) {
  return (
    <button
      className={`py-2 px-4 rounded-md no-underline text-foreground ${
        type === "primary"
          ? "bg-blue-700"
          : "bg-btn-background hover:bg-btn-background-hover"
      } flex items-center group text-sm w-fit`}
      {...props}
    >
      {children}
    </button>
  );
}
