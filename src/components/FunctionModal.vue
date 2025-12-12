<template>
  <Transition name="modal">
    <div 
      v-if="modelValue" 
      @click="closeOnOutside"
      class="fixed inset-0 bg-black/30 z-50 overflow-y-auto"
    >
      <div class="min-h-screen px-4 py-8 flex items-start justify-center pt-20 md:pt-20">
        <Transition name="modal-content">
          <div 
            v-if="modelValue"
            ref="modalContent"
            class="detail-section rounded-lg max-w-4xl w-full relative shadow-xl"
          >
            <button 
              @click="$emit('update:modelValue', null)"
              class="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-gray-600 transition z-10"
            >
              <i class="bi bi-x-lg text-xl"></i>
            </button>
            
            <div class="p-6 md:p-8">
              <h2 class="text-xl md:text-2xl font-semibold mb-2 pr-8">{{ selectedFunction.name }}</h2>
              <div class="text-sm text-gray-500 mb-4">{{ selectedFunction.category }}</div>
              <p class="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">{{ selectedFunction.desc }}</p>

              <div class="mb-4 syntax-box p-3 md:p-4 rounded">
                <div class="text-xs uppercase text-gray-500 mb-2 flex items-center gap-2">
                  <i class="bi bi-code-slash"></i>
                  Syntax
                </div>
                <pre class="text-xs md:text-sm whitespace-pre-wrap overflow-x-auto"><code>{{ syntax }}</code></pre>
              </div>

              <div class="text-sm text-gray-600 flex items-center gap-2">
                <i class="bi bi-lightbulb"></i>
                Example
              </div>
              <div class="bg-gray-50 border rounded p-3 mt-2 text-xs md:text-sm overflow-x-auto">
                <code>{{ example }}</code>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { getSyntax, getExample } from '../data/functions.js';

const props = defineProps({
  modelValue: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['update:modelValue']);

const modalContent = ref(null);

const selectedFunction = computed(() => props.modelValue || {});
const syntax = computed(() => getSyntax(selectedFunction.value.name || ''));
const example = computed(() => getExample(selectedFunction.value.name || ''));

// Close on Escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && props.modelValue) {
    emit('update:modelValue', null);
  }
};

// Close when clicking outside
const closeOnOutside = (e) => {
  if (modalContent.value && !modalContent.value.contains(e.target)) {
    emit('update:modelValue', null);
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
/* Mobile responsive modal */
@media (max-width: 768px) {
  .min-h-screen {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .detail-section {
    margin: 0;
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
  }
}

@media (max-width: 640px) {
  .min-h-screen {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
