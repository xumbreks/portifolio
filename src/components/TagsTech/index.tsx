export interface TagsTechProps {
  title: string;
  className: string;
}

export function TagsTech({ title, className }: TagsTechProps) {
  return (
    <span className={`px-3 py-1 text-sm rounded-full ${className}`}>
      {title}
    </span>
  );
}
