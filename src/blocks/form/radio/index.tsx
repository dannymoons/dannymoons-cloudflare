import type { RadioField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { FieldError } from '@/components/ui/field'
import React from 'react'
import { Controller } from 'react-hook-form'

import { Width } from '../width'

export const Radio: React.FC<
  RadioField & {
    control: Control
    errors: Partial<FieldErrorsImpl>
  }
> = ({ name, control, errors, label, options, required, width, defaultValue }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name} className='mb-2'>
        {label}
        {required && (
          <span className='required'>
            * <span className='sr-only'>(required)</span>
          </span>
        )}
      </Label>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, value } }) => (
          <RadioGroup onValueChange={onChange} value={value} id={name}>
            {options.map(({ label: optionLabel, value: optionValue }) => (
              <div key={optionValue} className='flex items-center gap-2'>
                <RadioGroupItem
                  value={optionValue}
                  id={`${name}-${optionValue}`}
                />
                <Label htmlFor={`${name}-${optionValue}`}>
                  {optionLabel}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
        rules={{ required }}
      />
      {errors[name] && (
        <FieldError
          errors={[errors[name] as { message?: string }]}
        />
      )}
    </Width>
  )
}
