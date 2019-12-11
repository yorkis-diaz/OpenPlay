export const DROPDOWN_OPEN = "DROPDOWN_OPEN";
export const DROPDOWN_CLOSE = "DROPDOWN_CLOSE";

export const openDropdown = dropdown => {
    return {
        type: DROPDOWN_OPEN,
        dropdown
    }
}

export const closeDropdown = () => {
    return {
        type: DROPDOWN_CLOSE
    }
}