<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1">
    <div class="mb-8">
      <h1 class="text-3xl font-semibold text-gray-900 mb-2">Documentation</h1>
      <p class="text-gray-600">Learn how to use the Excel Functions Reference</p>
    </div>

    <div class="space-y-6">
      <!-- Getting Started -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-rocket-takeoff text-primary"></i>
          Getting Started
        </h2>
        <p class="text-gray-700 mb-4">
          Welcome to SysXl - Excel Functions Reference! This platform provides a comprehensive guide to the most commonly used Excel functions in Urdu/Roman Urdu, making it easier for Pakistani users to understand and use Excel effectively.
        </p>
        <div class="bg-primary/10 border border-primary/20 rounded p-4">
          <p class="text-sm">
            <i class="bi bi-lightbulb text-primary me-2"></i>
            <strong>Quick Tip:</strong> Use the search bar on the home page to quickly find any function, or filter by category to browse specific types of functions.
          </p>
        </div>
      </section>

      <!-- How to Use -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-book-half text-primary"></i>
          How to Use This Website
        </h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-medium mb-2 flex items-center gap-2">
              <i class="bi bi-1-circle text-primary"></i>
              Browse Functions
            </h3>
            <p class="text-gray-700">View all available Excel functions in the main table on the home page.</p>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2 flex items-center gap-2">
              <i class="bi bi-2-circle text-primary"></i>
              Search
            </h3>
            <p class="text-gray-700">Type in the search box to find specific functions by name, category, or description.</p>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2 flex items-center gap-2">
              <i class="bi bi-3-circle text-primary"></i>
              Filter by Category
            </h3>
            <p class="text-gray-700">Click on category pills to see functions of specific types: Math, Text, Logical, Date & Time, etc.</p>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2 flex items-center gap-2">
              <i class="bi bi-4-circle text-primary"></i>
              View Details
            </h3>
            <p class="text-gray-700">Click on any function row to open a modal with syntax, examples, and detailed explanation.</p>
          </div>
        </div>
      </section>

      <!-- Excel Basics -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-file-earmark-spreadsheet text-primary"></i>
          Excel Basics
        </h2>
        <div class="space-y-3">
          <div class="syntax-box p-4 rounded">
            <h4 class="font-medium mb-2 flex items-center gap-2">
              <i class="bi bi-diagram-3 text-primary"></i>
              Formula Syntax
            </h4>
            <p class="text-sm text-gray-700">All Excel formulas start with an equals sign <code>=</code></p>
            <pre class="mt-2 text-sm"><code>=FUNCTION_NAME(arguments)</code></pre>
          </div>
          <div class="syntax-box p-4 rounded">
            <h4 class="font-medium mb-2 flex items-center gap-2">
              <i class="bi bi-grid-3x3 text-primary"></i>
              Cell References
            </h4>
            <p class="text-sm text-gray-700">
              - <code>A1</code>: Single cell<br>
              - <code>A1:A10</code>: Range of cells<br>
              - <code>A1:C10</code>: Multiple columns
            </p>
          </div>
          <div class="syntax-box p-4 rounded">
            <h4 class="font-medium mb-2 flex items-center gap-2">
              <i class="bi bi-braces text-primary"></i>
              Arguments
            </h4>
            <p class="text-sm text-gray-700">
              - Required: <code>SUM(number1, number2)</code><br>
              - Optional (in square brackets): <code>SUM(number1, [number2])</code>
            </p>
          </div>
        </div>
      </section>

      <!-- Common Patterns -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-tools text-primary"></i>
          Common Formula Patterns
        </h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-medium mb-2">Conditional Sum</h3>
            <div class="bg-gray-50 border rounded p-3">
              <code>=SUMIF(range, criteria, sum_range)</code>
            </div>
            <p class="text-sm text-gray-600 mt-1">Example: Sum all sales greater than 1000</p>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2">Lookup with Error Handling</h3>
            <div class="bg-gray-50 border rounded p-3">
              <code>=IFERROR(VLOOKUP(...), "Not Found")</code>
            </div>
            <p class="text-sm text-gray-600 mt-1">Prevents #N/A errors in lookups</p>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2">Nested IF Statements</h3>
            <div class="bg-gray-50 border rounded p-3">
              <code>=IFS(condition1, value1, condition2, value2, ...)</code>
            </div>
            <p class="text-sm text-gray-600 mt-1">Better than nested IF() for multiple conditions</p>
          </div>
        </div>
      </section>

      <!-- Tips & Tricks -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-lightbulb text-primary"></i>
          Tips & Tricks
        </h2>
        <ul class="space-y-2">
          <li class="flex items-start gap-2">
            <i class="bi bi-check-circle text-primary mt-0.5"></i>
            <span class="text-gray-700">Use <code>Ctrl+Shift+Enter</code> for array formulas</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="bi bi-check-circle text-primary mt-0.5"></i>
            <span class="text-gray-700">Press <code>F4</code> to toggle absolute/relative cell references</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="bi bi-check-circle text-primary mt-0.5"></i>
            <span class="text-gray-700">Use <code>XLOOKUP</code> instead of <code>VLOOKUP</code> for modern Excel</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="bi bi-check-circle text-primary mt-0.5"></i>
            <span class="text-gray-700">Combine <code>FILTER</code> and <code>SORT</code> for dynamic data</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="bi bi-check-circle text-primary mt-0.5"></i>
            <span class="text-gray-700">Always wrap lookups in <code>IFERROR</code> for better UX</span>
          </li>
        </ul>
      </section>

      <!-- FAQ -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-question-circle text-primary"></i>
          Frequently Asked Questions
        </h2>
        <div class="space-y-4">
          <details class="faq-item border-b pb-3">
            <summary class="cursor-pointer font-medium flex items-center justify-between">
              <span>What Excel versions are supported?</span>
              <i class="bi bi-chevron-down chevron-icon"></i>
            </summary>
            <p class="text-sm text-gray-700 mt-3 pl-4 border-l-2 border-primary/30">
              Most functions work in Excel 2016 and later. Modern functions like XLOOKUP, FILTER, and SORT require Microsoft 365 or Excel 2021+.
            </p>
          </details>
          <details class="faq-item border-b pb-3">
            <summary class="cursor-pointer font-medium flex items-center justify-between">
              <span>Why are descriptions in Urdu/Roman?</span>
              <i class="bi bi-chevron-down chevron-icon"></i>
            </summary>
            <p class="text-sm text-gray-700 mt-3 pl-4 border-l-2 border-primary/30">
              To make Excel more accessible for Pakistani users who are more comfortable with Urdu/Roman explanations.
            </p>
          </details>
          <details class="faq-item border-b pb-3">
            <summary class="cursor-pointer font-medium flex items-center justify-between">
              <span>Can I use these examples directly?</span>
              <i class="bi bi-chevron-down chevron-icon"></i>
            </summary>
            <p class="text-sm text-gray-700 mt-3 pl-4 border-l-2 border-primary/30">
              Yes! All examples are ready to copy and paste. Just adjust the cell references to match your data.
            </p>
          </details>
          <details class="faq-item border-b pb-3">
            <summary class="cursor-pointer font-medium flex items-center justify-between">
              <span>How often is this updated?</span>
              <i class="bi bi-chevron-down chevron-icon"></i>
            </summary>
            <p class="text-sm text-gray-700 mt-3 pl-4 border-l-2 border-primary/30">
              We regularly add new functions and improve descriptions based on user feedback.
            </p>
          </details>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// No reactive state needed for documentation page
</script>

<style scoped>
/* FAQ Animations */
.faq-item summary {
  list-style: none;
  transition: all 0.3s ease;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary:hover {
  color: #9ACD32;
}

.faq-item[open] summary {
  color: #9ACD32;
  margin-bottom: 0.5rem;
}

/* Chevron rotation animation */
.chevron-icon {
  transition: transform 0.3s ease;
}

.faq-item[open] .chevron-icon {
  transform: rotate(180deg);
}

/* Smooth content reveal */
.faq-item[open] p {
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<style scoped>
/* Mobile responsive styles */
@media (max-width: 768px) {
  h1 {
    font-size: 1.875rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.125rem;
  }

  section {
    padding: 1rem !important;
  }

  code {
    font-size: 0.75rem;
    word-break: break-all;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }
}
</style>
