type TCustomSelect = {
    children: React.ReactNode;
    isSelected: boolean;
    onClick?: () => void;
}

const CustomSelect = ({children, isSelected = false, onClick}: TCustomSelect) => {
  return (
    <div onClick={onClick} className={`
        relative w-full border-[2.5px] rounded-lg p-2 cursor-pointer transition
        ${isSelected ? "border-brightPink" : "border-black/10 hover:border-[#f72585]/30"}
    `}>
        <div className="absolute top-2 right-2">
            {
                isSelected ? (
                    <div className="size-3 border-[3px] border-brightPink rounded-full" />
                ) : (
                    <div className="size-3 border-2 border-black/10 rounded-full" />
                ) 
            }        
        </div>
        <div className="max-w-[90%]">{children}</div>
    </div>
  )
}

export default CustomSelect