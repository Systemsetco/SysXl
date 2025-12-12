<template>
  <div class="category-filter-container">
    <div class="category-filter-scroll">
      <button
        v-for="category in categories"
        :key="category"
        @click="$emit('update:modelValue', category)"
        :class="[
          'px-3 py-1 rounded-full text-sm category-badge transition whitespace-nowrap',
          { 'active-category': modelValue === category }
        ]"
      >
        {{ category === 'all' ? 'All' : category }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    default: 'all'
  }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.category-filter-container {
  width: 100%;
  position: relative;
}

.category-filter-scroll {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0.5rem;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.category-filter-scroll::-webkit-scrollbar {
  height: 6px;
}

.category-filter-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.category-filter-scroll::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.category-filter-scroll::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* For mobile devices - thinner scrollbar */
@media (max-width: 768px) {
  .category-filter-scroll::-webkit-scrollbar {
    height: 4px;
  }
}
</style>
