import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'

export default function Example() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-teal-500'>
      <Fieldset className="space-y-8">
      <Legend className="text-lg font-bold">Shipping details</Legend>
      <Field>
        <Label className="block">Street address</Label>
        <Input className="mt-1 block" name="address" />
      </Field>
      <Field>
        <Label className="block">Country</Label>
        <Select className="mt-1 block" name="country">
          <option>Canada</option>
          <option>Mexico</option>
          <option>United States</option>
        </Select>
      </Field>
      <Field>
        <Label className="block">Delivery notes</Label>
        <Textarea className="mt-1 block" name="notes" />
      </Field>
    </Fieldset>
    </div>
  )
}