"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "../form-context";
import { useEffect, useRef } from "react";

const basicInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type BasicInfoData = z.infer<typeof basicInfoSchema>;

export function BasicInfoStep({ onValid }: { onValid: (isValid: boolean) => void }) {
  const { formData, updateFormData } = useFormContext();

  const {
    register,
    formState: { errors, isValid },
    watch,
  } = useForm<BasicInfoData>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      name: formData.name || "",
      email: formData.email || "",
    },
    mode: "onChange",
  });

  const watchedValues = watch();
  const prevValues = useRef(watchedValues);

  useEffect(() => {
    if (
      prevValues.current.name !== watchedValues.name ||
      prevValues.current.email !== watchedValues.email
    ) {
      updateFormData(watchedValues);
      console.log(watchedValues);
    }
    prevValues.current = watchedValues;
  }, [watchedValues, updateFormData]);

  useEffect(() => {
    onValid(isValid);
  }, [isValid, onValid]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">
            {errors.email.message}
          </p>
        )}
      </div>
    </div>
  );
}