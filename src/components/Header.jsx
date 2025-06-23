export default function Header() {
  return (
  <div className="bg-gray-100 flex justify-between items-center px-4 py-4 sm:hidden">
    <img src="/images/logo.png" alt="Mitate Logo" className="h-6" />
    <button>
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
    </button>
  </div>
  );
}
