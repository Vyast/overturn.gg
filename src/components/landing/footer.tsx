export function Footer() {
  return (
    <div className="flex items-center justify-between px-4 pb-2">
      <p className="text-sm">est. 2022</p>
      <p className="text-sm">© {new Date().getFullYear()} overturn.gg</p>
    </div>
  );
}
