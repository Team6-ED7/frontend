import LogoPortrait from "../components/common/LogoPortrait"

export const SessionLayout = ({ children }) => {
  return (
    <main className="bg-[url('/src/assets/background.svg')] flex flex-col w-screen items-center ">
      <section className="w-7xl px-10  py-10 flex flex-col items-center gap-10">
        <LogoPortrait />
        <div className="max-w-4xl p-10 rounded-md bg-black bg-opacity-10 flex flex-col gap-5">
          {children}

        </div>
      </section>

    </main>
  )
}
