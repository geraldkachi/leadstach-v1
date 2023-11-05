import ForgotPasswordForm from "./ForgotPasswordForm"

const ForgotPassword = () => {
    return (
        <div className="grid md:grid-cols-2 h-screen bg-[#F2F5F9]">
            <div className=" hidden md:block p-10 place-content-center">
                {/* <Stepper {...{ currentStep, setCurrentStep }} /> */}
                <div className="relative col-span-2 place-content-center p-0  bg-contain bg-no-repeat w-full text-white h-full">
                    <img src="/login-logo.svg" className=" pt-10" alt="" />

                    <p className="text-[64px] mt-20 text-[#0A2E65] whitespace-nowrap font-extrabold">Forgot Password?</p>
                    <p className="text-[#535768] text-lg">No worries! We even forget our birthday sometimes 😂.
                        We&apos;ßll send you reset instructions.</p>

                    <div className=" bottom-36 p-5 pr-16 text-2xl">

                    </div>
                    <img src="/forgot-password.svg" alt="" />
                </div>

            </div>

            <div className="flex-col flex-1 flex mx-auto md:m-20 mt-20 md:mt-[unset] md:justify-between relative">
                <div></div>
                <div className="p-8 md:pt-20 md:pb-32 rounded-[19.095px] bg-white ">
                    <ForgotPasswordForm />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ForgotPassword