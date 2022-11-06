import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex'>
        <div className=" overflow-y-auto px-4 fixed border-4 border-dashed border-gray-200 w-[300px] hidden lg:block h-[calc(100vh-83.96px)]">
          {[1, 1, 1, 1, 1, 1,].
            map((v, i) => (
              <li class="mt-12 lg:mt-8 list-none" key={i}>
                <h5 class="mb-8 lg:mb-3 font-semibold text-slate-800" _msthash="309909" _msttexthash="324753">Personalización</h5>
                <ul class="space-y-6 lg:space-y-2 border-l border-slate-200 ">
                  <li>
                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-600 hover:text-slate-900" href="/docs/configuration" >
                      Configuración
                    </a>
                  </li>
                  <li>
                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-600 hover:text-slate-900  " href="/docs/content-configuration">
                      Contenido
                    </a>
                  </li>
                  <li>
                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400    text-slate-600 hover:text-slate-900  " href="/docs/theme" >
                      Tema
                    </a>
                  </li>
                  <li data-active="true"><a class="block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400" href="/docs/screens" >
                    Pantallas
                  </a>
                  </li>
                  <li>
                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400    text-slate-600 hover:text-slate-900  " href="/docs/customizing-colors" >
                      Colores
                    </a>
                  </li>
                  <li>
                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400    text-slate-600 hover:text-slate-900  " href="/docs/customizing-spacing">
                      Espaciamiento
                    </a>
                  </li>
                  <li>
                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400    text-slate-600 hover:text-slate-900  " href="/docs/plugins">
                      Plugins
                    </a>
                  </li>
                  <li>
                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400    text-slate-600 hover:text-slate-900  " href="/docs/presets">
                      Presets
                    </a>
                  </li>
                </ul>
              </li>
            ))}
        </div>
        <div className="border-4 border-dashed border-gray-200 lg:ml-[300px] w-full">
          <ol class="border-l-2 border-blue-600">
            <li>
              <div class="flex flex-start items-center">
                <div class="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                <h4 class="text-gray-800 font-semibold text-xl -mt-2">Title of section 1</h4>
              </div>
              <div class="ml-6 mb-6 pb-6">
                <a href="#!" class="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">4 February, 2022</a>
                <p class="text-gray-700 mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
              </div>
            </li>
            <li>
              <div class="flex flex-start items-center">
                <div class="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                <h4 class="text-gray-800 font-semibold text-xl -mt-2">Title of section 2</h4>
              </div>
              <div class="ml-6 mb-6 pb-6">
                <a href="#!" class="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">12 January, 2022</a>
                <p class="text-gray-700 mt-2 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
              </div>
            </li>
            <li>
              <div class="flex flex-start items-center">
                <div class="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                <h4 class="text-gray-800 font-semibold text-xl -mt-2">Title of section 3</h4>
              </div>
              <div class="ml-6 mb-6 pb-6">
                <a href="#!" class="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">27 December, 2021</a>
                <p class="text-gray-700 mt-2 mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
              </div>
            </li>
          </ol>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,].
            map((v, i) => <h1 key={i}>Content line {i}</h1>)}
        </div>
      </main>

    </>
  )
}

export default App
