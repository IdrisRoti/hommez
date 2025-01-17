"use client"

import SignUpForm from "../forms/SignUpForm";

const SignUpModal = () => {
  return (
    <div className="font-[Inter] w-[95vw] md:w-[28rem] max-h-[90vh] sprint-scroll-bar overflow-auto pt-5 px-3 bg-gradient-to-b from-[#3a0ca3]/15 to-transparents to-40% rounded-lg border bg-white">
        <h2 className="text-primary font-semibold text-xl text-center">Create a profile</h2>
        <h3 className="text-center text-sm">Create a free profile in less than 5 minutes</h3>
        <SignUpForm />
    </div>
  )
}

export default SignUpModal