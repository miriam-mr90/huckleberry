export const CodePreview = () => {
  return (
    <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden text-white">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-slate-400 ml-2">playground.js</span>
      </div>

      <div className="p-6 font-mono text-sm">
        <div className="text-cyan-400">
          <span className="text-purple-400">const</span>{' '}
          <span className="text-blue-300">developer</span> ={' '}
          <span className="text-amber-300">{'{'}</span>
        </div>
        <div className="pl-4 text-slate-300">
          <div>
            <span className="text-red-300">name</span>:{' '}
            <span className="text-green-300">'Miriam Martín'</span>,
          </div>
          <div>
            <span className="text-red-300">job position</span>:{' '}
            <span className="text-green-300">'Frontend Developer'</span>,
          </div>
        </div>
        <div className="text-amber-300">{'}'}</div>

        <div className="mt-4">
          <span className="text-purple-400">function</span>{' '}
          <span className="text-blue-300">makeMagic</span>
          <span className="text-amber-300">{'() {'}</span>
        </div>
        <div className="pl-4">
          <span className="text-purple-400">const</span>{' '}
          <span className="text-green-300">thingsDeveloperDoes</span>{' '}
          <span className="text-amber-300">= [</span>
        </div>
        <div className="pl-8 ">
          <span className="text-green-300">
            'Transforms designs into fully functional interfaces'
          </span>
          ,<br />
          <span className="text-green-300">
            'Writes efficient and maintainable code'
          </span>
          ,<br />
          <span className="text-green-300">
            'Understands the product and the user needs'
          </span>
          ,<br />
          <span className="text-green-300">
            'Creates engaging and polished user experiences'
          </span>
        </div>
        <div className="pl-4">
          <span className="text-amber-300">]</span>
          <br />
          <span className="text-purple-400">return</span>{' '}
          <span className="text-green-300">
            thingsDeveloperDoes.join(' + ')
          </span>
        </div>
        <div className="text-amber-300">{'}'}</div>
      </div>
    </div>
  )
}
