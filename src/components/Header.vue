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
            class="text-sm text-gray-600 hover:text-gray-900 transition"
            active-class="text-gray-900 font-medium"
          >
            Functions
          </router-link>
          <router-link 
            to="/docs" 
            class="text-sm text-gray-600 hover:text-gray-900 transition"
            active-class="text-gray-900 font-medium"
          >
            Documentation
          </router-link>
          <router-link 
            to="/api" 
            class="text-sm text-gray-600 hover:text-gray-900 transition"
            active-class="text-gray-900 font-medium"
          >
            API
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = true"
          class="md:hidden text-gray-600 hover:text-gray-900 p-2"
          aria-label="Open menu"
        >
          <i class="bi bi-list text-2xl"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu Modal -->
  <Transition name="modal">
    <div 
      v-if="mobileMenuOpen" 
      @click="closeOnOutside"
      class="fixed inset-0 bg-black/30 z-50 md:hidden"
    >
      <div class="min-h-screen px-4 py-8 flex items-start justify-center pt-20">
        <Transition name="modal-content">
          <div 
            v-if="mobileMenuOpen"
            ref="menuContent"
            class="bg-white rounded-lg w-full max-w-sm relative shadow-xl"
          >
            <button 
              @click="mobileMenuOpen = false"
              class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <i class="bi bi-x-lg text-xl"></i>
            </button>
            
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-4 pr-8">Menu</h2>
              <nav class="space-y-2">
                <router-link 
                  to="/" 
                  @click="mobileMenuOpen = false"
                  class="block text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition py-3 px-4 rounded"
                  active-class="text-gray-900 font-medium bg-gray-50"
                >
                  Functions
                </router-link>
                <router-link 
                  to="/docs" 
                  @click="mobileMenuOpen = false"
                  class="block text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition py-3 px-4 rounded"
                  active-class="text-gray-900 font-medium bg-gray-50"
                >
                  Documentation
                </router-link>
                <router-link 
                  to="/api" 
                  @click="mobileMenuOpen = false"
                  class="block text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition py-3 px-4 rounded"
                  active-class="text-gray-900 font-medium bg-gray-50"
                >
                  API
                </router-link>
              </nav>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
const menuContent = ref(null);

// Close when clicking outside
const closeOnOutside = (e) => {
  if (menuContent.value && !menuContent.value.contains(e.target)) {
    mobileMenuOpen.value = false;
  }
};

// Close on Escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    mobileMenuOpen.value = false;
  }
};

// Add/remove escape listener
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-content-enter-active {
  transition: all 0.3s ease;
}

.modal-content-leave-active {
  transition: all 0.2s ease;
}

.modal-content-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
