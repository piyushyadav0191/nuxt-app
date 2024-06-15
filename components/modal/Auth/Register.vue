<template>
    <Modal :is-open="isOpen" title="Welcome" description="Login to your Account" @on-close="onClose" v-if="isOpen">
        Login

        </Modal>
</template>

<script setup lang="ts">
import Modal from '~/components/resuables/Modal.vue';
import useRegister from '~/composables/useRegister';
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'


const {isOpen, onClose,RegisterSchema} = useRegister()

const form = useForm({
  validationSchema: RegisterSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

</script>
