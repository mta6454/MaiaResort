export default defineNuxtPlugin(() => {
  if (process.client) {
    // Import Bootstrap bundle (includes Popper)
    // Dynamic import to avoid SSR
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
})


