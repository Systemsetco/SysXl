<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
      <div class="flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition">
          <!-- Custom Logo -->
          <img src="/document.png" alt="SysXl Logo" class="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
          <div>
            <div class="text-base sm:text-lg font-semibold text-gray-900">SysXl</div>
            <div class="text-xs text-gray-500 hidden sm:block">Excel Functions Reference</div>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6">
          <router-link 
            to="/" 
            class="text-sm text-gray-600 hover:text-gray-900 transition flex items-center gap-1"
            active-class="text-gray-900 font-medium"
          >
            <i class="bi bi-table"></i>
            <span>Functions</span>
          </router-link>
          <router-link 
            to="/docs" 
            class="text-sm text-gray-600 hover:text-gray-900 transition flex items-center gap-1"
            active-class="text-gray-900 font-medium"
          >
            <i class="bi bi-book"></i>
            <span>Documentation</span>
          </router-link>
          <router-link 
            to="/api" 
            class="text-sm text-gray-600 hover:text-gray-900 transition flex items-center gap-1"
            active-class="text-gray-900 font-medium"
          >
            <i class="bi bi-code-slash"></i>
            <span>API</span>
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-gray-600 hover:text-gray-900 p-2"
          aria-label="Toggle menu"
        >
          <i :class="mobileMenuOpen ? 'bi bi-x-lg text-xl' : 'bi bi-list text-2xl'"></i>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="mobile-menu">
        <nav v-if="mobileMenuOpen" class="md:hidden mt-4 pb-2 space-y-2">
          <router-link 
            to="/" 
            @click="mobileMenuOpen = false"
            class="block text-sm text-gray-600 hover:text-gray-900 transition py-2 px-3 rounded flex items-center gap-2"
            active-class="text-gray-900 font-medium bg-gray-50"
          >
            <i class="bi bi-table"></i>
            <span>Functions</span>
          </router-link>
          <router-link 
            to="/docs" 
            @click="mobileMenuOpen = false"
            class="block text-sm text-gray-600 hover:text-gray-900 transition py-2 px-3 rounded flex items-center gap-2"
            active-class="text-gray-900 font-medium bg-gray-50"
          >
            <i class="bi bi-book"></i>
            <span>Documentation</span>
          </router-link>
          <router-link 
            to="/api" 
            @click="mobileMenuOpen = false"
            class="block text-sm text-gray-600 hover:text-gray-900 transition py-2 px-3 rounded flex items-center gap-2"
            active-class="text-gray-900 font-medium bg-gray-50"
          >
            <i class="bi bi-code-slash"></i>
            <span>API</span>
          </router-link>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
</script>

<style scoped>
/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
