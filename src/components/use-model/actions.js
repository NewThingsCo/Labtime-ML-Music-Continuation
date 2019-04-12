export const EXECUTE_INPUT_ON_MODEL = "EXECUTE_INPUT_ON_MODEL";
export const REGISTER_INPUT = "REGISTER_INPUT";

export const registerCurrentInput = input => ({
    type: REGISTER_INPUT,
    input
});

export const executeInputOnModel = input => ({
    type : EXECUTE_INPUT_ON_MODEL,
    input
});