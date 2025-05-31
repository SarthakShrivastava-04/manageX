"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useFormContext } from "./form-context"
import { BasicInfoStep } from "./steps/basic-info-step"
import { AddressStep } from "./steps/address-step"
import { ReviewStep } from "./steps/review-step"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

const steps = [
  { id: 1, title: "Basic Information", component: BasicInfoStep },
  { id: 2, title: "Address Details", component: AddressStep },
  { id: 3, title: "Review & Confirm", component: ReviewStep },
]

export function AddUserForm() {
  const { currentStep, setCurrentStep, formData, resetForm } = useFormContext()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const progress = (currentStep / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("User data submitted:", formData)

    toast({
      title: "Success!",
      description: "User has been added successfully.",
    })

    resetForm()
    setIsSubmitting(false)
  }

  const CurrentStepComponent = steps[currentStep - 1].component

  return (
    <Card className="w-full border-2 rounded-2xl shadow-lg">
      <CardHeader className="border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-2xl font-bold">
            Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
          </CardTitle>
          <Link href="/dashboard">
            <Button variant="outline" size="sm" className="rounded-xl border-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Progress</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2 rounded-full" />
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-between mt-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  currentStep > step.id
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : currentStep === step.id
                      ? "bg-gray-200 text-black dark:bg-gray-700 dark:text-white border-2 border-black dark:border-white"
                      : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
                }`}
              >
                {currentStep > step.id ? <CheckCircle className="h-4 w-4" /> : step.id}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-16 mx-2 transition-all ${
                    currentStep > step.id ? "bg-black dark:bg-white" : "bg-gray-200 dark:bg-gray-700"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentStepComponent />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="rounded-xl border-2 px-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          {currentStep < steps.length ? (
            <Button type="button" onClick={handleNext} className="rounded-xl px-6">
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button type="button" onClick={handleSubmit} disabled={isSubmitting} className="rounded-xl px-8">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
