const state = reactive({
    isOpen: false
})

import * as z from "zod"

const RegisterSchema = z.object({
    email: z.string().email({message:"Email is requried"}),
    password: z.string().min(6, {message: "Minimum 6 character long"}),
    name: z.string().min(2, {message: "name is Required"})
})

export default () => {
    const {isOpen} = toRefs(state)
    const onOpen = () => {
        state.isOpen = true
    }
    const onClose = () => {
        state.isOpen = false
    }
    return {
        isOpen,
        onOpen,
        onClose,
        RegisterSchema
    }
}