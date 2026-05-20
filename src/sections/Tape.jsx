import { StarIcon } from 'lucide-react';
import React from 'react';

const words = [
  { id: 1, text: 'Performant' },
  { id: 2, text: 'Accessible' },
  { id: 3, text: 'Secure' },
  { id: 4, text: 'Interactive' },
  { id: 5, text: 'Scable' },
  { id: 6, text: 'User Friendly' },
  { id: 7, text: 'Responsive' },
  { id: 8, text: 'Maintainable' },
  { id: 9, text: 'Search Optimized' },
  { id: 10, text: 'Usable' },
  { id: 11, text: 'Reliable' },
];

const Tape = () => {
  return (
    <div>
      <div className="overflow-x-clip py-16 lg:py-24">
        <div className="-mx-1 -rotate-3 bg-linear-to-r from-emerald-300 to-sky-400">
          <div className="flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none animate-move-left gap-4 py-3 pr-4">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <React.Fragment key={idx}>
                  {words.map((word) => (
                    <div key={word.id} className="inline-flex items-center gap-4">
                      <span className="text-sm font-extrabold text-gray-900 uppercase">{word.text}</span>

                      <StarIcon className="size-6 -rotate-12 text-gray-900" />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
