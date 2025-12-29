export default defineNuxtConfig({
	colorMode: {
		preference: 'light',
	},
	modules: ['@nuxt/ui'],
	runtimeConfig: {
 		stripeSecretKey: process.env.NUXT_STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY || '',
 		stripeWebhookSecret: process.env.NUXT_STRIPE_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET || '',
 		public: {
 			baseURL: process.env.NUXT_BASE_URL || process.env.PUBLIC_BASE_URL || 'http://localhost:3000',
 		},
 	},
})
