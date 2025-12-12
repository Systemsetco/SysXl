<template>
  <div class="home-container">
    <div class="content-wrapper">
      <div class="mb-8">
        <h1 class="text-3xl font-semibold text-gray-900 mb-2">Excel Functions</h1>
        <p class="text-gray-600">Most commonly used Excel functions</p>
      </div>

      <div class="mb-8 space-y-4">
        <!-- Search Input -->
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search functions..."
            class="search-input w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
          />
          <i class="bi bi-search absolute right-4 top-3.5 text-gray-400"></i>
        </div>

        <!-- Category Filter - Fixed Width Container -->
        <div class="min-h-[2.5rem]">
          <CategoryFilter v-model="currentCategory" :categories="categories" />
        </div>
      </div>

      <!-- Results Count -->
      <div class="mb-4">
        <span class="text-sm text-gray-600">{{ resultsText }}</span>
      </div>

    <!-- Functions Table -->
    <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-1/6">
                Function
              </th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-1/5">
                Category
              </th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="filteredFunctions.length === 0"
              class="border-b border-gray-200"
            >
              <td colspan="3" class="px-6 py-4 text-gray-500 text-center">
                Koi function nahi mila.
              </td>
            </tr>
            <tr
              v-for="func in filteredFunctions"
              :key="func.name"
              @click="selectedFunction = func"
              class="function-row"
            >
              <td class="px-6 py-4 align-top font-medium">{{ func.name }}</td>
              <td class="px-6 py-4 align-top">
                <span class="category-badge px-2 py-1 rounded">{{ func.category }}</span>
              </td>
              <td class="px-6 py-4 align-top text-sm text-gray-700">{{ func.desc }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Function Modal -->
    <FunctionModal v-model="selectedFunction" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { excelFormulas } from '../data/functions.js';
import CategoryFilter from '../components/CategoryFilter.vue';
import FunctionModal from '../components/FunctionModal.vue';

const searchQuery = ref('');
const currentCategory = ref('all');
const selectedFunction = ref(null);

// Get unique categories + add 'Most Used'
const categories = computed(() => {
  const cats = new Set(excelFormulas.map(f => f.category || 'Other'));
  return ['all', 'Most Used', ...Array.from(cats).sort((a, b) => a.localeCompare(b))];
});

// Filter functions based on search and category
const filteredFunctions = computed(() => {
  return excelFormulas.filter(func => {
    // Category filter
    if (currentCategory.value === 'Most Used') {
      if (!func.mostUsed) return false;
    } else if (currentCategory.value !== 'all' && func.category !== currentCategory.value) {
      return false;
    }

    // Search filter
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase();
      return (
        func.name.toLowerCase().includes(query) ||
        func.category.toLowerCase().includes(query) ||
        func.desc.toLowerCase().includes(query)
      );
    }

    return true;
  });
});

// Results text
const resultsText = computed(() => {
  const count = filteredFunctions.value.length;
  const catText = currentCategory.value !== 'all' ? ` in ${currentCategory.value}` : '';
  return `${count} result${count !== 1 ? 's' : ''}${catText}`;
});

// Debounced search - using a simple timeout
let searchTimeout = null;
watch(searchQuery, () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    // The computed property will automatically update
  }, 180);
});
</script>

<style scoped>
/* Fixed width container to prevent layout shifts */
.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
}

.content-wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  flex: 1;
}

/* Mobile responsive styles */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 1.5rem 1rem;
  }

  h1 {
    font-size: 1.875rem;
  }

  table th,
  table td {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  table th {
    font-size: 0.625rem;
  }

  table td {
    font-size: 0.875rem;
  }
}

@media (max-width: 640px) {
  .content-wrapper {
    padding: 1rem 0.75rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .search-input {
    font-size: 0.875rem;
  }
}
</style>
