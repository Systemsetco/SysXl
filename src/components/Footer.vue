<template>
  <footer class="bg-white border-t border-gray-200 mt-12">
    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About Section -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">About SysXl</h3>
          <p class="text-sm text-gray-600">
            Comprehensive Excel functions reference in Urdu/Roman. Learn Excel formulas easily with practical examples and clear explanations.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-sm text-gray-600 hover:text-primary transition">
                Functions
              </router-link>
            </li>
            <li>
              <router-link to="/docs" class="text-sm text-gray-600 hover:text-primary transition">
                Documentation
              </router-link>
            </li>
            <li>
              <router-link to="/api" class="text-sm text-gray-600 hover:text-primary transition">
                API Reference
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>
              <i class="bi bi-envelope me-2"></i>
              <a href="mailto:systemset.co@gmail.com" class="hover:text-primary transition">systemset.co@gmail.com</a>
            </li>
            <li>
              <i class="bi bi-globe me-2"></i>
              <a href="https://systemset.co" target="_blank" class="hover:text-primary transition">systemset.co</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-gray-600">
          © 2024 SysXl. All rights reserved.
        </p>
        <p class="text-sm text-gray-500 mt-2 md:mt-0">
          Developed by <span class="text-primary font-medium">Systemset Co</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No reactive state needed
</script>
