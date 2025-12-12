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
      <div class="mb-4 flex items-center justify-between">
        <span class="text-sm text-gray-600">{{ resultsText }}</span>
        
        <!-- Reset Filter Button -->
        <button 
          v-if="selectedLetter"
          @click="clearLetterFilter"
          class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition flex items-center gap-2"
        >
          <i class="bi bi-x-circle"></i>
          Clear Filter
        </button>
      </div>

    <!-- Functions Table with Alphabet Headers -->
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
            
            <!-- Grouped by Alphabet -->
            <template v-for="(group, letter) in groupedFunctions" :key="letter">
              <!-- Alphabet Header Row -->
              <tr class="alphabet-header-row">
                <td colspan="3" class="px-6 py-3 bg-gray-100 border-y border-gray-200">
                  <div class="flex items-center gap-2">
                    <div class="alphabet-header-letter">{{ letter }}</div>
                    <div class="text-xs text-gray-500">({{ group.length }} functions)</div>
                  </div>
                </td>
              </tr>
              
              <!-- Functions in this letter group -->
              <tr
                v-for="func in group"
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
            </template>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Function Modal -->
    <FunctionModal v-model="selectedFunction" />

    <!-- Alphabet Index Navigator -->
    <AlphabetIndex @letterSelected="handleLetterSelected" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { excelFormulas } from '../data/functions.js';
import CategoryFilter from '../components/CategoryFilter.vue';
import FunctionModal from '../components/FunctionModal.vue';
import AlphabetIndex from '../components/AlphabetIndex.vue';

const searchQuery = ref('');
const currentCategory = ref('all');
const selectedFunction = ref(null);
const selectedLetter = ref('');

// Get unique categories + add 'Most Used'
const categories = computed(() => {
  const cats = new Set(excelFormulas.map(f => f.category || 'Other'));
  return ['all', 'Most Used', ...Array.from(cats).sort((a, b) => a.localeCompare(b))];
});

// Filter functions based on search, category, and letter
const filteredFunctions = computed(() => {
  return excelFormulas.filter(func => {
    // Letter filter (from alphabet index)
    if (selectedLetter.value) {
      if (!func.name.toUpperCase().startsWith(selectedLetter.value)) {
        return false;
      }
    }

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

// Group functions by starting letter (iOS Contacts style)
const groupedFunctions = computed(() => {
  const groups = {};
  
  filteredFunctions.value.forEach(func => {
    const firstLetter = func.name.charAt(0).toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(func);
  });
  
  // Sort groups alphabetically
  return Object.keys(groups)
    .sort()
    .reduce((sorted, key) => {
      sorted[key] = groups[key];
      return sorted;
    }, {});
});

// Handle letter selection from alphabet index
const handleLetterSelected = (letter) => {
  selectedLetter.value = letter;
  // Clear search when using alphabet index
  searchQuery.value = '';
};

// Clear letter filter
const clearLetterFilter = () => {
  selectedLetter.value = '';
};

// Results text
const resultsText = computed(() => {
  const count = filteredFunctions.value.length;
  let text = `${count} result${count !== 1 ? 's' : ''}`;
  
  if (selectedLetter.value) {
    text += ` starting with ${selectedLetter.value}`;
  } else if (currentCategory.value !== 'all') {
    text += ` in ${currentCategory.value}`;
  }
  
  return text;
});

// Debounced search - using a simple timeout
let searchTimeout = null;
watch(searchQuery, () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    // Clear letter filter when searching
    if (searchQuery.value.trim()) {
      selectedLetter.value = '';
    }
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

/* Alphabet section headers */
.alphabet-header-row {
  cursor: default;
}

.alphabet-header-row:hover {
  background-color: #f9fafb !important;
}

.alphabet-header-letter {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  font-family: 'Geist', sans-serif;
}
</style>
