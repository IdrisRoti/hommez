import { z } from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RiErrorWarningLine } from "react-icons/ri";

const formSchema = z.object({
    email: z.string().email("Please input a valid email"),
    password: z.string().min(8, "Minimum of 8 characters")
})

type TLogInForm = {
    closeLogInModal: () => void;
    openSignUpModal: () => void;
}

const LogInForm = ({closeLogInModal, openSignUpModal}: TLogInForm) => { 

    type LogInFormType = z.infer<typeof formSchema>;

     const {
        register,
        handleSubmit,
        formState: { errors },
     } = useForm<LogInFormType>({
        resolver: zodResolver(formSchema)
     })

     const onSubmit = (data: LogInFormType) => {
        console.log(data)
     }

     const handleOpenSignUpModal = () => {
        closeLogInModal();

        openSignUpModal();
     }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 w-full mt-4">
            <label className="text-sm font-medium" htmlFor="firstname">Email<span className="text-red-600">*</span></label>
            <input {...register("email")} type="email" className="bg-transparent outline-none border-2 border-[#1e1e1e]/15 focus:border-primary px-2 py-1.5 rounded-lg placeholder:text-sm placeholder:font-semibold focus:placeholder:opacity-0 placeholder:transition placeholder:duration-500 w-full" placeholder="Your email address" />
            {
                    errors.email && 
                        <div className="flex items-center gap-1">
                            <RiErrorWarningLine className="text-red-500 size-3" />
                            <small className="text-red-500 text-xs">{errors.email.message}</small>
                        </div>
                }
        </div>
        <div className="flex flex-col gap-2 w-full mt-4">
            <label className="text-sm font-medium" htmlFor="firstname">Password<span className="text-red-600">*</span></label>
            <input {...register("password")} type="text" className="bg-transparent outline-none border-2 border-[#1e1e1e]/15 focus:border-primary px-2 py-1.5 rounded-lg placeholder:text-sm placeholder:font-semibold focus:placeholder:opacity-0 placeholder:transition placeholder:duration-500 w-full" placeholder="Your password" />           
            {
                    errors.password && 
                        <div className="flex items-center gap-1">
                            <RiErrorWarningLine className="text-red-500 size-3" />
                            <small className="text-red-500 text-xs">{errors.password.message}</small>
                        </div>
                }
        </div>
        <div className="w-full flex border-t mt-6 p-3">
            <button className="bg-primary hover:bg-primary/60 transition px-3 py-2 rounded-lg font-semibold ml-auto text-sm text-white w-full">Log in</button>
        </div>
        <div className="flex items-center justify-center gap-2">
            <p>Don&apos;t have an account? </p>
            <button type="button" onClick={handleOpenSignUpModal} className="font-semibold text-primary">Sign up</button>
        </div>
    </form>
  )
}

export default LogInForm;