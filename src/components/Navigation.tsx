import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
<nav className="px-2 py-1 flex items-center justify-between border-b border-neutral-200 bg-black text-white">
        <div className="flex items-center gap-6">
          <Link to="/">
            <img src="/12b121_5346d265dce543d091ba698f4cfd1461~mv2.png" alt="Logo" className="w-20 h-20" />
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm">
          </div>
        </div>
        <div className="flex items-center gap-2">
        </div>
      </nav>
  )
}

export default Navigation