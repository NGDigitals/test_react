import React from "react";

export const Text = () => {
    return (
        <>
            <input type="text" name="hfhdh" placeholder="Name" />
        </>
    );
};

export const Select = () => {
    return (
        <>
            <select>
                <option value={0}>Select your option</option>
                <option value={1}>PHP</option>
                <option value={2}>C++</option>
                <option value={3}>Javascript</option>
            </select>
        </>
    );
};