export function SidebarButton({ children, href, selected = false }) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
        selected ? 'bg-muted text-primary' : 'text-muted-foreground'
      }`}
    >
      {children}
    </a>
  );
}