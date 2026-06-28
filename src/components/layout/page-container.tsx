interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Top-only padding when full-width sections follow below */
  tight?: boolean;
}

export function PageContainer({ children, className = "", tight = false }: PageContainerProps) {
  const padding = tight ? "pt-5 pb-0 sm:pt-6" : "py-6 sm:py-8";

  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${padding} ${className}`}>
      {children}
    </div>
  );
}
