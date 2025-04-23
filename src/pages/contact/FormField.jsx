import * as React from "react";

export function FormInput({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  className = "",
}) {
  return (
    <div className={className}>
      <label className="block mb-2 text-sm">
        <span>{label}</span>
        {required && <span className="ml-1 opacity-70">(required)</span>}
      </label>
      <input
        type={type}
        className="p-2.5 w-full rounded border border-solid bg-neutral-50 border-neutral-400 text-black"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function FormTextArea({
  label,
  value,
  onChange,
  required = false,
  className = "",
}) {
  return (
    <div className={className}>
      <label className="block mb-2 text-sm">
        <span>{label}</span>
        {required && <span className="ml-1 opacity-70">(required)</span>}
      </label>
      <textarea
        className="p-2.5 w-full rounded border border-solid resize-y bg-neutral-50 border-neutral-400 min-h-[100px]"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
