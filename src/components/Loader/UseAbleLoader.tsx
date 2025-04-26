import Loader from "./loader";


export default function UseLoader() {
    return (
        <div className="flex w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <div className="flex flex-col items-center gap-2 text-center justify-center">
            <Loader />
            </div>
          </div>
        </div>
      )
}