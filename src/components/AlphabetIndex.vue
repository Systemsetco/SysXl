<template>
  <div class="alphabet-index-container">
    <!-- Alphabet Index -->
    <div 
      ref="indexContainer"
      class="alphabet-index"
      @mousedown="startDrag"
      @touchstart="startDrag"
      @mousemove="onDrag"
      @touchmove="onDrag"
      @mouseup="endDrag"
      @touchend="endDrag"
      @mouseleave="endDrag"
    >
      <div
        v-for="letter in alphabet"
        :key="letter"
        :data-letter="letter"
        class="alphabet-letter"
        :class="{ active: selectedLetter === letter }"
      >
        {{ letter }}
      </div>
    </div>

    <!-- Center Letter Preview -->
    <Transition name="preview">
      <div v-if="showPreview" class="letter-preview">
        {{ selectedLetter }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['letterSelected']);

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const indexContainer = ref(null);
const selectedLetter = ref('');
const showPreview = ref(false);
const isDragging = ref(false);

const startDrag = (e) => {
  e.preventDefault();
  isDragging.value = true;
  showPreview.value = true;
  updateSelectedLetter(e);
};

const onDrag = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  updateSelectedLetter(e);
};

const endDrag = () => {
  isDragging.value = false;
  setTimeout(() => {
    showPreview.value = false;
    selectedLetter.value = '';
  }, 300);
};

const updateSelectedLetter = (e) => {
  if (!indexContainer.value) return;

  const touch = e.touches ? e.touches[0] : e;
  const elements = document.elementsFromPoint(touch.clientX, touch.clientY);
  
  const letterElement = elements.find(el => 
    el.classList.contains('alphabet-letter') && el.dataset.letter
  );

  if (letterElement) {
    const letter = letterElement.dataset.letter;
    if (letter !== selectedLetter.value) {
      selectedLetter.value = letter;
      emit('letterSelected', letter);
      
      // Haptic feedback on mobile
      if (navigator.vibrate) {
        navigator.vibrate(10);
      }
    }
  }
};
</script>

<style scoped>
.alphabet-index-container {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  pointer-events: none;
}

.alphabet-index {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.25rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 1rem 0 0 1rem;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
}

.alphabet-letter {
  font-size: 0.625rem;
  font-weight: 600;
  color: #666;
  padding: 0.125rem 0.5rem;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: 'Geist', sans-serif;
}

.alphabet-letter:hover,
.alphabet-letter.active {
  color: #9ACD32;
  transform: scale(1.2);
}

.letter-preview {
  position: fixed;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  font-weight: 700;
  color: #9ACD32;
  opacity: 0.3;
  pointer-events: none;
  z-index: 25;
  font-family: 'Geist', sans-serif;
  text-shadow: 0 4px 20px rgba(154, 205, 50, 0.3);
}

/* Preview transitions */
.preview-enter-active {
  transition: all 0.2s ease;
}

.preview-leave-active {
  transition: all 0.3s ease;
}

.preview-enter-from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
}

.preview-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.2);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .alphabet-index {
    padding: 0.25rem 0.15rem;
  }

  .alphabet-letter {
    font-size: 0.5rem;
    padding: 0.1rem 0.4rem;
  }

  .letter-preview {
    font-size: 6rem;
  }
}

@media (max-width: 640px) {
  .alphabet-letter {
    font-size: 0.45rem;
    padding: 0.08rem 0.35rem;
  }

  .letter-preview {
    font-size: 5rem;
  }
}
</style>
