import Image from "next/image";
import { Castoro_Titling } from "next/font/google";
const castoro = Castoro_Titling({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex-center">
        <h1 className={`${castoro.className} text-7xl text-center`}>
          Museo de la Tortura
        </h1>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/skull.png"
          alt="Museo de tortura calabera"
          width={280}
          height={137}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Horarios </h2>
          <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <li>
              <b>martes</b> 10:00–19:00
            </li>
            <li>
              <b>miércoles</b> 10:00–19:00
            </li>
            <li>
              <b>jueves</b> 10:00–19:00
            </li>
            <li>
              <b>viernes</b> 10:00–19:00
            </li>
            <li>
              <b>sábado</b> 10:00–19:00
            </li>
            <li>
              <b>domingo</b> 10:00–19:00
            </li>
            <li>
              <b>lunes</b> 10:00–19:00
            </li>
          </div>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Dirección </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <a href="https://goo.gl/maps/2eXMbwFuuqsn1XfC7?coh=178571&entry=tt">
              {" "}
              Maestranza 78 Col.Centro, Guadalajara Jalisco c.p.44100{" "}
            </a>
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Precios </h2>
          <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <li>
              <b>ADULTOS</b> $110.00
            </li>
            <li>
              <b>MENORES</b> $90.00
              <br></br>
              <small>
                de 7 a 13 años, estudiantes, profesores, INSEN ( con credencial
                vigente){" "}
              </small>
            </li>
            <li>
              <b>GRUPOS</b> $80.00 <br></br>
              <small>mayores de 10 personas</small>
            </li>
          </div>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Contacto </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <b>Telefono disponible </b> <br></br>
            <a href="wa.link/taykr6">33 3801 4924</a>
          </p>
        </a>
      </div>
      <div>
        <p className={castoro.className}>
          Este sitio continua en construccion...
        </p>
      </div>
    </main>
  );
}
