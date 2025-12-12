<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top"
      aria-label="Scroll to top"
    >
      <i class="bi bi-arrow-up text-xl"></i>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background: #9ACD32;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 40;
}

.scroll-to-top:hover {
  background: #7FA82E;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.scroll-to-top:active {
  transform: translateY(0);
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 2.75rem;
    height: 2.75rem;
  }
}

@media (max-width: 640px) {
  .scroll-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .scroll-to-top i {
    font-size: 1.125rem;
  }
}
</style>
