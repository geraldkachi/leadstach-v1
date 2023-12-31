import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components"
import { useRef } from "react";

const ForgotPasswordForm = () => {
    const formInput = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-xl mx-auto px-3">
            <div className="text-center mb-[28px]"> </div>

            <form action="" className="w-full">
                <div className="grid grid-col-1">
                    <Input
                        label="Enter Email Address"
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



                <div className="flex items-center justify-end mt-10 gap-2">
                    <div className="text-[14.321px] cursor-pointer p-4" onClick={() => navigate('/login')}>Back to Login</div>

                    <Button
                        type="button"
                        className="!bg-[#1D8EE6] !text-white !px-8"
                        onClick={() => navigate('/dashboard')}
                        title="Continue"
                    />
                </div>


                <div className="text-center mt-6">
                    Still having issues signing  in?<span className="text-[#1D8EE6] cursor-pointer" onClick={() => navigate('/')}>Click here</span>
                </div>
            </form>

            <div></div>
        </div>
    )
}

export default ForgotPasswordForm