<script setup lang="ts">
import { ref } from 'vue'
// import { useNuxtApp } from '#app'

const pending = ref(false)
const payWithStripe = async () => {
	pending.value = true

	const response = await $fetch<{ url: string }>('/api/create-order', {
		method: 'POST',
		body: {
			product_name: 'Nuxt Course',
			product_description: 'Learn how to integrate Stripe payments with Nuxt 3',
			image: 'https://nuxt.com/logo.png',
			quantity: 3,
			price: 50,
		},
	})

	pending.value = false

	if (response.url) {
		window.location.href = response.url
	} else {
		alert('Something went wrong')
	}
}
</script>

<template>
	<UContainer class="flex flex-col gap-6 items-center py-24">
		<UCard class="max-w-sm w-full">
			<template #header>
				<h1 class="font-bold text-xl text-center">Payments in Nuxt</h1>
			</template>
			<UButton
				@click="payWithStripe"
				:loading="pending"
				block
				size="xl"
				icon="i-mdi-credit-card"
			>
				Pay with Stripe
			</UButton>
		</UCard>
	</UContainer>
</template>
