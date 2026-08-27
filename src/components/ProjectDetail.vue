<script setup lang="ts">
import type { Project } from '~/types'
import { withBase } from '~/logics'

defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

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
</script>

<template>
  <Transition name="fade">
    <div
      v-if="project"
      fixed inset-0 z-500 of-y-auto backdrop-blur-7 px-4 py-8 md:py-14
      @click.self="emit('close')"
    >
      <div fixed inset-0 bg-black:50 z--1 @click="emit('close')" />

      <div
        class="prose m-auto bg-base border border-base rounded-xl p-6 md:p-10 relative shadow-2xl slide-enter"
      >
        <button
          type="button"
          aria-label="Close"
          class="absolute top-4 right-4 op60 hover:op100 transition p-2 cursor-pointer border-none bg-transparent"
          @click="emit('close')"
        >
          <div i-ri-close-line text-2xl />
        </button>

        <div v-if="project.hero" class="mb-6 mt-2">
          <img
            :src="withBase(project.hero)"
            :alt="project.name"
            class="w-full rounded-lg shadow object-cover aspect-video bg-black:5"
          >
        </div>

        <div class="mb-4">
          <div class="flex items-center gap-3 mb-1">
            <div v-if="project.icon" :class="project.icon" text-3xl op75 />
            <h2 class="m-0! text-2xl md:text-3xl font-bold">
              {{ project.name }}
            </h2>
          </div>
          <p v-if="project.timeline" class="font-mono text-sm op50 m-0!">
            {{ project.timeline }}
          </p>
        </div>

        <div v-if="project.techStack?.length" class="flex flex-wrap gap-2 my-4">
          <span
            v-for="tech in project.techStack"
            :key="tech"
            class="btn-emerald text-xs md:text-sm select-none"
          >
            {{ tech }}
          </span>
        </div>

        <p v-if="project.desc" class="text-base op80 my-4">
          {{ project.desc }}
        </p>

        <div v-if="project.links?.length" class="flex flex-wrap gap-2 my-4">
          <a
            v-for="link in project.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group btn-emerald inline-flex items-center gap-1.5"
          >
            <div v-if="link.icon" :class="link.icon" />
            <span>{{ link.label }}</span>
          </a>
        </div>

        <hr v-if="project.problem || project.solution || project.role">

        <div v-if="project.problem" class="my-4">
          <h3 class="text-lg font-semibold op90">
            Problem
          </h3>
          <p class="op80">
            {{ project.problem }}
          </p>
        </div>

        <div v-if="project.solution" class="my-4">
          <h3 class="text-lg font-semibold op90">
            Solution
          </h3>
          <p class="op80">
            {{ project.solution }}
          </p>
        </div>

        <div v-if="project.role" class="my-4">
          <h3 class="text-lg font-semibold op90">
            Role
          </h3>
          <p class="op80">
            {{ project.role }}
          </p>
        </div>

        <template v-if="project.screenshots?.length">
          <hr>
          <h3 class="text-lg font-semibold op90 mb-4">
            Screenshots
          </h3>
          <div class="grid gap-4">
            <img
              v-for="(img, idx) in project.screenshots"
              :key="idx"
              :src="withBase(img)"
              :alt="`${project.name} screenshot ${idx + 1}`"
              class="w-full rounded-lg shadow object-cover aspect-video bg-black:5 cursor-zoom-in"
            >
          </div>
        </template>
      </div>
    </div>
  </Transition>
</template>
