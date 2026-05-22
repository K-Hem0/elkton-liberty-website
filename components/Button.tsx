import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "outline-light";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-red text-white shadow-md shadow-brand-red/25 hover:bg-brand-red-dark hover:shadow-lg hover:shadow-black/20 active:scale-[0.99]",
  secondary:
    "bg-navy text-white shadow-md hover:bg-navy-dark hover:shadow-lg active:scale-[0.99]",
  outline:
    "border-2 border-navy bg-white text-navy hover:border-navy hover:bg-navy hover:text-white active:scale-[0.99]",
  "outline-light":
    "border-2 border-white/35 bg-white/10 text-white hover:border-white/60 hover:bg-white/15 hover:text-white active:scale-[0.99]",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const baseClass =
    "inline-flex min-h-11 w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto sm:min-h-12 sm:px-6 sm:py-3 sm:text-base";

  const combinedClass = `${baseClass} ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClass}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClass}>
      {children}
    </Link>
  );
}
