"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "../form-context";
import { useEffect, useRef } from "react";

const addressSchema = z.object({
  street: z.string().min(5, "Street address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  zipcode: z.string().length(6, "Zipcode must be 6 numeral"),
});

type AddressData = z.infer<typeof addressSchema>;

export function AddressStep({ onValid }: { onValid: (isValid: boolean) => void }) {
  const { formData, updateFormData } = useFormContext();

  const {
    register,
    formState: { errors, isValid },
    watch,
  } = useForm<AddressData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      street: formData.street || "",
      city: formData.city || "",
      zipcode: formData.zipcode || "",
    },
    mode: "onChange",
  });

  const watchedValues = watch();
  const prevValues = useRef(watchedValues);

  useEffect(() => {
    if (
      prevValues.current.street !== watchedValues.street ||
      prevValues.current.city !== watchedValues.city ||
      prevValues.current.zipcode !== watchedValues.zipcode
    ) {
      updateFormData(watchedValues);
    }
    prevValues.current = watchedValues;
  }, [watchedValues, updateFormData]);

  useEffect(() => {
    onValid(isValid);
  }, [isValid, onValid]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="street">Street Address</Label>
        <Input id="street" {...register("street")} placeholder="Enter your street address" />
        {errors.street && <p className="text-sm text-destructive mt-1">{errors.street.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" {...register("city")} placeholder="Enter your city" />
          {errors.city && <p className="text-sm text-destructive mt-1">{errors.city.message}</p>}
        </div>

        <div>
          <Label htmlFor="zipcode">Zip Code</Label>
          <Input id="zipcode" {...register("zipcode")} placeholder="Enter your zip code" />
          {errors.zipcode && <p className="text-sm text-destructive mt-1">{errors.zipcode.message}</p>}
        </div>
      </div>
    </div>
  );
}