"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface FormData {
  name: string
  email: string
  street: string
  city: string
  zipcode: string
}

interface FormContextType {
  currentStep: number
  setCurrentStep: (step: number) => void
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  resetForm: () => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

const initialFormData: FormData = {
  name: "",
  email: "",
  street: "",
  city: "",
  zipcode: "",
}

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)

  useEffect(() => {
    const savedData = localStorage.getItem("userFormData")
    const savedStep = localStorage.getItem("userFormStep")

    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
    if (savedStep) {
      setCurrentStep(Number.parseInt(savedStep))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("userFormData", JSON.stringify(formData))
  }, [formData])

  useEffect(() => {
    localStorage.setItem("userFormStep", currentStep.toString())
  }, [currentStep])

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const resetForm = () => {
    setFormData(initialFormData)
    setCurrentStep(1)
    localStorage.removeItem("userFormData")
    localStorage.removeItem("userFormStep")
  }

  return (
    <FormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        updateFormData,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}
