<script setup lang="ts">
import { ref } from "vue";
// import { useNuxtApp } from '#app'

type OrderBody = {
  product_name: string;
  product_description?: string;
  image?: string;
  images?: string[];
  quantity?: number;
  price: number;
};

// Default order payload used by the button
const order: OrderBody = {
  product_name: "Nuxt Course",
  product_description:"A Nuxt course teaches you to build modern web apps with Nuxt, a powerful, open-source framework on top of Vue.js, covering features like file-based routing, server-side rendering (SSR), static site generation, API routes, auto-imports, and performance optimization for faster, SEO-friendly full-stack applications. Courses guide you from project setup (using Vite) to deploying production-ready sites, simplifying complex tasks for both beginners and experienced developers. ",
  image: "https://nuxt.com/logo.png",
  quantity: 2,
  price: 50,
};

const pending = ref(false);
const payWithStripe = async (body: OrderBody) => {
  pending.value = true;

  const response = await $fetch<{ url: string }>("/api/create-order", {
    method: "POST",
    body,
  });

  pending.value = false;

  if (response.url) {
    window.location.href = response.url;
  } else {
    alert("Something went wrong");
  }
};
</script>

<template>
  <UContainer class="flex flex-col gap-6 items-center py-24">
    <UCard class="max-w-sm w-full">
      <template #header>
        <h1 class="font-bold text-xl text-center">Payments in Nuxt</h1>
      </template>
      <UButton
        @click="payWithStripe(order)"
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
