export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Robert Musin. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
