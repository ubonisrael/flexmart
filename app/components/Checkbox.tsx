import React from "react";
import * as CheckBox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const Checkbox = ({ label, Checked, onChange }: { label: string; Checked: boolean; onChange: (value: string) => void }) => (
  <form>
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <CheckBox.Root className="w-5 h-5 bg-slate-950 rounded flex items-center justify-center" id={`${label}`} checked={Checked} onCheckedChange={() => onChange(label)}>
        <CheckBox.Indicator className="text-slate-100">
          <CheckIcon style={{fontSize: "18px", fontWeight: "bold"}} />
        </CheckBox.Indicator>
      </CheckBox.Root>
      <label className="Label capitalize" htmlFor={`${label}`}>
        {label}
      </label>
    </div>
  </form>
);

export default Checkbox;
