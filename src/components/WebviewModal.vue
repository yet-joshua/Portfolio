<script setup lang="ts">
const props = withDefaults(defineProps<{
  url: string
  title: string
  show?: boolean
}>(), {
  show: true,
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const iframeRef = ref<HTMLIFrameElement>()
const loading = ref(true)

onKeyStroke('Escape', (e) => {
  emit('close')
  e.preventDefault()
})

onMounted(() => {
  document.documentElement.classList.add('overflow-hidden')
})

onUnmounted(() => {
  document.documentElement.classList.remove('overflow-hidden')
})

function onLoad() {
  loading.value = false
}

function reload() {
  loading.value = true
  iframeRef.value?.contentWindow?.location.reload()
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="props.show"
      fixed inset-0 z-500
      @click.self="emit('close')"
    >
      <div fixed inset-0 bg-black:50 z--1 @click="emit('close')" />

      <div class="webview-modal m-auto max-w-7xl h-full md:h-[90vh] flex flex-col bg-base border border-base rounded-xl overflow-hidden shadow-2xl slide-enter">
        <div class="flex items-center gap-2 px-3 py-2 border-b border-base bg-base/80 backdrop-blur-sm select-none">
          <button
            type="button"
            aria-label="Close"
            class="p-1.5 rounded-full hover:bg-black:8 dark:hover:bg-white:8 transition cursor-pointer border-none bg-transparent op60 hover:op100"
            @click="emit('close')"
          >
            <div i-ri-close-line text-lg />
          </button>

          <div class="flex items-center gap-1 ml-1">
            <div class="w-3 h-3 rounded-full bg-black:15 dark:bg-white:15" />
            <div class="w-3 h-3 rounded-full bg-black:15 dark:bg-white:15" />
            <div class="w-3 h-3 rounded-full bg-black:15 dark:bg-white:15" />
          </div>

          <div class="flex-1 mx-3">
            <div class="flex items-center gap-2 bg-black:5 dark:bg-white:5 rounded-lg px-3 py-1.5 max-w-xl mx-auto">
              <div i-ph-lock-simple-duotone text-xs op40 />
              <span class="text-xs op50 font-mono truncate">{{ url }}</span>
            </div>
          </div>

          <button
            type="button"
            aria-label="Reload"
            class="p-1.5 rounded-full hover:bg-black:8 dark:hover:bg-white:8 transition cursor-pointer border-none bg-transparent op60 hover:op100"
            @click="reload"
          >
            <div i-ph-arrow-clockwise-duotone text-lg />
          </button>

          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="p-1.5 rounded-full hover:bg-black:8 dark:hover:bg-white:8 transition op60 hover:op100"
          >
            <div i ph-arrow-up-right text-lg />
          </a>
        </div>

        <div class="relative flex-1 bg-white dark:bg-[#0D100E]">
          <div
            v-if="loading"
            class="absolute inset-0 flex items-center justify-center"
          >
            <div class="i-ph-circle-notch-duotone text-3xl op30 animate-spin" />
          </div>
          <iframe
            ref="iframeRef"
            :src="url"
            class="w-full h-full border-none"
            :title="title"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
            @load="onLoad"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.webview-modal {
  width: calc(100% - 2rem);
  max-height: 100vh;
}

@media (min-width: 768px) {
  .webview-modal {
    width: calc(100% - 4rem);
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
}
</style>
