<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1">
    <div class="mb-8">
      <h1 class="text-3xl font-semibold text-gray-900 mb-2">API Reference</h1>
      <p class="text-gray-600">REST API for Excel Functions data</p>
    </div>

    <div class="space-y-6">
      <!-- API Overview -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-broadcast text-primary"></i>
          API Overview
        </h2>
        <p class="text-gray-700 mb-4">
          Access Excel function data programmatically via our REST API. Perfect for integrating into your own applications, tools, or services.
        </p>
        <div class="bg-gray-50 border rounded p-4">
          <div class="text-sm font-medium text-gray-700 mb-1">Base URL</div>
          <code class="text-primary">https://sysxl.netlify.app/api/v1</code>
        </div>
      </section>

      <!-- Authentication -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-shield-lock text-primary"></i>
          Authentication
        </h2>
        <p class="text-gray-700">
          Currently, the API is <strong>public and does not require authentication</strong>. 
          Future versions may include API keys for advanced features.
        </p>
      </section>

      <!-- Endpoints -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-plugin text-primary"></i>
          Endpoints
</h2>

        <!-- GET all functions -->
        <div class="mb-6 pb-6 border-b">
          <div class="flex items-center gap-3 mb-3">
            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">GET</span>
            <code class="text-sm">/functions</code>
          </div>
          <p class="text-gray-700 mb-3">Retrieve all Excel functions</p>
          
          <div class="mb-3">
            <div class="text-sm font-medium mb-2">Response Example</div>
            <div class="code-block">
<pre class="language-json"><code class="language-json">{
  "success": true,
  "count": 150,
  "data": [
    {
      "name": "SUM",
      "category": "Math",
      "desc": "Numbers add karta hai."
    },
    ...
  ]
}</code></pre>
            </div>
          </div>
        </div>

        <!-- GET single function -->
        <div class="mb-6 pb-6 border-b">
          <div class="flex items-center gap-3 mb-3">
            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">GET</span>
            <code class="text-sm">/functions/:name</code>
          </div>
          <p class="text-gray-700 mb-3">Get details of a specific function by name</p>
          
          <div class="mb-3">
            <div class="text-sm font-medium mb-2">Example Request</div>
            <div class="code-block">
<pre class="language-bash"><code class="language-bash">GET /functions/VLOOKUP</code></pre>
            </div>
          </div>

          <div class="mb-3">
            <div class="text-sm font-medium mb-2">Response Example</div>
            <div class="code-block">
<pre class="language-json"><code class="language-json">{
  "success": true,
  "data": {
    "name": "VLOOKUP",
    "category": "Lookup",
    "desc": "Table ke left-most column me lookup.",
    "syntax": "VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
    "example": "=VLOOKUP(\"Apple\", A2:C100, 3, FALSE)"
  }
}</code></pre>
            </div>
          </div>
        </div>

        <!-- GET by category -->
        <div class="mb-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">GET</span>
            <code class="text-sm">/functions/category/:category</code>
          </div>
          <p class="text-gray-700 mb-3">Filter functions by category</p>
          
          <div class="mb-3">
            <div class="text-sm font-medium mb-2">Example Request</div>
            <div class="code-block">
<pre class="language-bash"><code class="language-bash">GET /functions/category/Math</code></pre>
            </div>
          </div>

          <div class="mb-3">
            <div class="text-sm font-medium mb-2">Available Categories</div>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Most Used</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Math</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Statistical</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Text</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Logical</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Date & Time</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Lookup</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Financial</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Database</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Rate Limiting -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-speedometer2 text-primary"></i>
          Rate Limiting
        </h2>
        <p class="text-gray-700 mb-3">
          Current rate limits: <strong>100 requests per minute</strong> per IP address.
        </p>
        <p class="text-sm text-gray-600">
          Rate limit headers are included in all responses:
        </p>
        <div class="bg-gray-50 border rounded p-3 mt-2">
          <code class="text-sm">
            X-RateLimit-Limit: 100<br>
            X-RateLimit-Remaining: 95<br>
            X-RateLimit-Reset: 1702345678
          </code>
        </div>
      </section>

      <!-- Code Examples -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-code-square text-primary"></i>
          Code Examples
        </h2>

        <!-- JavaScript -->
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-3">JavaScript (Fetch API)</h3>
          <div class="code-block">
<pre class="language-javascript"><code class="language-javascript">// Get all functions
fetch('https://sysxl.netlify.app/api/v1/functions')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Get specific function
fetch('https://sysxl.netlify.app/api/v1/functions/SUM')
  .then(res => res.json())
  .then(data => console.log(data));

// Get by category
fetch('https://sysxl.netlify.app/api/v1/functions/category/Math')
  .then(res => res.json())
  .then(data => console.log(data));</code></pre>
          </div>
        </div>

        <!-- Python -->
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-3">Python (requests)</h3>
          <div class="code-block">
<pre class="language-python"><code class="language-python">import requests

# Get all functions
response = requests.get('https://sysxl.netlify.app/api/v1/functions')
data = response.json()
print(data)

# Get specific function
response = requests.get('https://sysxl.netlify.app/api/v1/functions/VLOOKUP')
print(response.json())

# Get by category
response = requests. get('https://sysxl.netlify.app/api/v1/functions/category/Text')
print(response.json())</code></pre>
          </div>
        </div>

        <!-- cURL -->
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-3">cURL</h3>
          <div class="code-block">
<pre class="language-bash"><code class="language-bash"># Get all functions
curl https://sysxl.netlify.app/api/v1/functions

# Get specific function
curl https://sysxl.netlify.app/api/v1/functions/XLOOKUP

# Get by category
curl https://sysxl.netlify.app/api/v1/functions/category/Logical</code></pre>
          </div>
        </div>
      </section>

      <!-- Try It Out -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-flask text-primary"></i>
          Try It Out
        </h2>
        <p class="text-gray-700 mb-4">
          Test the API directly from your browser or use tools like Postman, Insomnia, or HTTPie.
        </p>
        <div class="bg-primary/10 border border-primary/20 rounded p-4">
          <p class="text-sm">
            <i class="bi bi-info-circle text-primary me-2"></i>
            <strong>Note:</strong> The API endpoint is currently in development. For now, you can use the data directly from this website or contact us for early access.
          </p>
        </div>
      </section>

      <!-- Support -->
      <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i class="bi bi-chat-dots text-primary"></i>
          Support
        </h2>
        <p class="text-gray-700">
          Have questions or need help? Contact us at 
          <a href="mailto:systemset.co@gmail.com" class="text-primary hover:underline">systemset.co@gmail.com</a>
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

onMounted(() => {
  Prism.highlightAll();
});
</script>

<style scoped>
.code-block {
  background: #1e1e1e;
  color: #d4d4d4;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Cascadia Code', 'Monaco', 'Courier New', monospace;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  background: transparent;
  color: #d4d4d4;
  padding: 0;
}

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

  .code-block {
    padding: 0.75rem;
    font-size: 0.75rem;
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

  .code-block {
    font-size: 0.7rem;
  }
}
</style>
