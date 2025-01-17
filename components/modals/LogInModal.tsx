"use client"

import LogInForm from "../forms/LogInForm";


type TLogInModal = {
    closeLogInModal: () => void;
    openSignUpModal: () => void;
}

const LogInModal = ({closeLogInModal, openSignUpModal}: TLogInModal) => {
  return (
    <div className="w-[95vw] md:w-[28rem] max-h-[90vh] scroll-bar-y overflow-auto py-5 px-3 bg-gradient-to-b from-[#3a0ca3]/15 to-transparents to-40% rounded-lg border bg-white">
        <h2 className="text-primary font-semibold text-xl text-center">Welcome back!</h2>
        <h3 className="text-center text-sm">Log in to your account</h3>
        <LogInForm closeLogInModal={closeLogInModal} openSignUpModal={openSignUpModal} />
    </div>
  )
}

export default LogInModal