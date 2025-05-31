"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useFormContext } from "../form-context"
import { User, MapPin } from "lucide-react"

export function ReviewStep() {
  const { formData } = useFormContext()

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold">Review Your Information</h3>
        <p className="text-muted-foreground">Please review the information below before submitting</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium">Name:</span>
            <span>{formData.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{formData.email}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Address Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium">Street:</span>
            <span>{formData.street}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">City:</span>
            <span>{formData.city}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Zip Code:</span>
            <span>{formData.zipcode}</span>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          By submitting this form, you confirm that the information provided is accurate and complete. The user data
          will be logged to the console for demonstration purposes.
        </p>
      </div>
    </div>
  )
}
