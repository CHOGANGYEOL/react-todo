import { useState } from "react"

export const useInput = () => {
    const [value, setValue] = useState("");

    const bind = {
        value,
        onChange: (e) => setValue(e.target.value)
    };
    const reset = () => {
        setValue("");
    };
    return [value, bind, reset];
}