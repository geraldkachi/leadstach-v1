import { useRef } from "react";
import { Button, Input } from "../../components"
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setCurrentStep }: any) => {
    const formInput = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-xl mx-auto px-3">
            <div className="text-center mb-[28px]"> </div>

            <div className="text-[] mb-12">
                {/* <div className="text-[#0D1227] text-2xl font-bold  md:text-4xl ">
          Register your Company
        </div> */}
                <div className="text-[#535768] text-base leading-6 font-normal mt-2">
                    This is your first step to redefine work in your organization, kindly
                    Fill in the details below to get started{" "}
                </div>
            </div>

            <form action="" className="w-full">
                <div className="grid grid-col-1">
                    <Input
                        label="Email Address"
                        ref={formInput}
                        type="text"
                        name="password"
                        placeholder="hr@techworld.com"
                    // TrailingIcon={() => (
                    //     <PasswordMe
                    //         showPassword={showPassword}
                    //         setShowPassword={setShowPassword}
                    //     />
                    // )}
                    />

                    {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}
                </div>

                <Input
                    label="Password"
                    ref={formInput}
                    type="email"
                    name="password"
                    placeholder="techworldvibe"
                />
                <div className="-mt-2 text-xs">Forgot Password? <span className="text-[#1D8EE6] text-xs cursor-pointer" onClick={() => navigate('/forgot-password')}> Retrieve Here</span></div>


                <div className="flex items-center justify-between mt-10">
                    <div className="text-[14.321px]">
                        Don&apos;t have an account? <span className="text-[#1D8EE6] cursor-pointer" onClick={() => navigate('/') }>Sign Up</span>
                    </div>

                    <Button
                        type="button"
                        className="!bg-[#1D8EE6] !text-white !px-8"
                        onClick={() => navigate('/dashboard')}
                        title="Continue"
                    />
                </div>


                <div className="text-center mt-6">
                Having issues signing  in? <span className="text-[#1D8EE6] cursor-pointer" onClick={() => navigate('/') }>Click here</span>
                </div>
            </form>

            <div></div>
        </div>
    )
}

export default LoginForm