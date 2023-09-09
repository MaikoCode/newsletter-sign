import Illustration from "../assets/images/illustration-sign-up-mobile.svg"
import IconSuccess from "../assets/images/icon-success.svg"



export default function SignComponent() {
  return (
    <div className="bg-white sm:bg-pale-navy h-full flex flex-col">

        <img 
        className=""
        src={Illustration} alt="illustration" />

        <div className="pt-5 p-3">
            <h1 className="text-dark-navy font-bold text-4xl pb-5">Stay updated!</h1>
            <p className="text-xl">Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li className="flex justify-between">
                <img 
                className="w-8 h-8"
                src={IconSuccess} alt="icon success" />
                <span>Product discovery and building what matters</span>
              </li>
              <li className="flex justify-between">
                <img src={IconSuccess} alt="icon success" />
                <span>Measuring to ensure updates are a success</span>
              </li>
              <li>
                <img src={IconSuccess} alt="icon success" />
                <span>And much more!</span>
              </li>
              

            </ul>
        </div>




    </div>
  )
}
