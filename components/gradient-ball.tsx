
export default function GradientBall({className}: {className: string}) {
  return (
    <div className={`-z-10 aspect-square bg-gradient-to-t from-white to-primary rounded-full rotate-45 ${className}`} />
  )
}
