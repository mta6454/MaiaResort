export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // Import Bootstrap bundle (includes Popper)
    // Dynamic import to avoid SSR
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
})


