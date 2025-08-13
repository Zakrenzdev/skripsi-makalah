import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'bg-bg-tertiary text-text-primary hover:bg-bg-secondary',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-white',
  };
  
  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}