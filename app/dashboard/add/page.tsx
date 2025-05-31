"use client"

import { AddUserForm } from "@/components/forms/add-user-form"
import { FormProvider } from "@/components/forms/form-context"
import { motion } from "framer-motion"

export default function AddUserPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Add New User</h1>
        <p className="text-muted-foreground">Fill out the form below to add a new user to the system</p>
      </div>

      <FormProvider>
        <AddUserForm />
      </FormProvider>
    </motion.div>
  )
}
