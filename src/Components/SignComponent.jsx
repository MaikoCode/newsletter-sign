import Illustration from "../assets/images/illustration-sign-up-mobile.svg"

export default function SignComponent() {
  return (
    <div className="bg-white sm:bg-pale-navy h-full flex flex-col">

        <img 
        className=""
        src={Illustration} alt="illustration" />

        <div className="pt-5">
            <h1 className="text-dark-navy font-bold text-4xl">Stay updated!</h1>
            <p className="">Join 60,000+ product managers receiving monthly updates on:</p>

        </div>




    </div>
  )
}
