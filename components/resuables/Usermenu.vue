<template>
    <div class="relative">

    <div class="flex flex-row items-center gap-3">
        <div class="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
        Nuxt your home
        </div>
        <DropdownMenu>
    <DropdownMenuTrigger as-child>
       <Button  variant="ghost" class="p-4 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md hover:bg-transparent transition " size="sm">
        <template v-if="user">
            <div class="hidden md:block">
                    <img v-if="user && user.username" class="rounded-full w-8 h-8" :alt="user.name" :src="user.image"  >
            </div>
        </template>
        <template v-else>
            <div class="hidden md:block">
                    <Icon name="mingcute:menu-fill"  />
            </div>
        </template>
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56" align="end">
        <template v-if="user">
            <DropdownMenuItem @click="navigateTo('/trips')">
                <span>My Trips</span>
            </DropdownMenuItem>
            <DropdownMenuItem @click="navigateTo('/reservations')">
                <span>My Reservations</span>
            </DropdownMenuItem>
            <DropdownMenuItem @click="navigateTo('/favorites')">
                <span>My Favorites</span>
            </DropdownMenuItem>
            <DropdownMenuItem @click="navigateTo('/properties')">
                <span>My Properties</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <span>Nuxt your home</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="logout">
               <Icon name="material-symbols-light:login-outline-rounded" class="mr-2 h-4 w-4" />
               Logout
            </DropdownMenuItem>
        </template>
    
        <template v-else>
            <DropdownMenuItem @click="onOpen">
                <span>Register</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <span>Login</span>
            </DropdownMenuItem>
        </template>
      
    </DropdownMenuContent>
  </DropdownMenu>
    </div>

    </div>
</template>

<script setup lang="ts">
 
    import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useRegister from '~/composables/useRegister';

const {onOpen} = useRegister()

const user = useUser()

async function logout() {
	await $fetch("/api/logout", {
		method: "POST"
	});
    await navigateTo("/login")
}

</script>

<style scoped>

</style>