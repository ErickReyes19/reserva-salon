import type { ReactNode } from "react"

interface Step {
  title: string
  icon: ReactNode
}

interface ProgressStepsProps {
  steps: Step[]
  currentStep: number
}

export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="mb-10">
      <div className="flex justify-center items-center mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                index <= currentStep
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-300 bg-white text-gray-400"
              } transition-all duration-300`}
            >
              {step.icon}
            </div>

            {index < steps.length - 1 && (
              <div className="w-24 h-1 mx-2 bg-gray-200">
                <div
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ width: index < currentStep ? "100%" : "0%" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <p className="text-lg font-medium">{steps[currentStep].title}</p>
      </div>
    </div>
  )
}
