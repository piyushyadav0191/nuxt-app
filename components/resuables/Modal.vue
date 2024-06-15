<template>
    <Dialog :open="isModalVisible" @update:open="$emit('onClose')">
    <DialogContent>
      <DialogHeader class="flex flex-col justify-center items-center">
        <DialogTitle v-if="title">{{ title }} </DialogTitle>
        <DialogDescription  v-if="description">
        {{ description }}
        </DialogDescription>
      </DialogHeader>

    <slot />
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'


interface ModalProps {
    isOpen?: boolean
    title?: string
    description?: string
}
const props = defineProps<ModalProps>()

const emit = defineEmits(["onClose"])

const isModalVisible = computed({
    get(){
        return props.isOpen
    },
    set(value) {
        emit('onClose')
    }
})


</script>


