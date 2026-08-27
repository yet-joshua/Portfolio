<script setup lang="ts">
import type { Project } from '~/types'
import { withBase } from '~/logics'

defineProps<{ projects: Record<string, Project[]> }>()

const selectedProject = ref<Project>()
const webviewProject = ref<Project>()

function hasDetails(item: Project): boolean {
  return Boolean(item.hero || item.problem || item.solution || item.role || item.screenshots?.length)
}

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
</script>

<template>
  <div class="max-w-300 mx-auto">
    <p text-center mt--6 mb5 op50 text-lg italic>
      Projects I built solo or shipped for clients.
    </p>
    <div class="prose pb5 mx-auto mt10 text-center">
      <div flex="~ gap-2 justify-center">
        <a
          href="https://github.com/yet-joshua"
          target="_blank"
          class="group btn-emerald inline-block"
        >
          <div
            i-ph-github-logo-duotone
            group-hover="i-ph-github-logo-fill text-emerald"
          />
          GitHub
        </a>
        <a
          :href="withBase('/resume.pdf')"
          target="_blank"
          class="group btn-emerald inline-block"
        >
          <div
            i-ph-file-pdf-duotone
            group-hover="i-ph-file-pdf-fill text-emerald"
          />
          Resume
        </a>
      </div>
      <hr>
    </div>
    <div
      v-for="key, cidx in Object.keys(projects)" :key="key" slide-enter
      :style="{ '--enter-stage': cidx + 1 }"
    >
      <div
        :id="slug(key)"
        select-none relative h18 mt5 pointer-events-none slide-enter
        :style="{
          '--enter-stage': cidx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span text-5em color-transparent absolute left--1rem top-0rem font-bold leading-1em text-stroke-1.5 text-stroke-hex-aaa op35 dark:op20>{{ key }}</span>
      </div>
      <div
        class="project-grid py-2 max-w-500 w-max mx-auto"
        grid="~ cols-1 md:cols-2 gap-4 lg:cols-3"
      >
        <component
          :is="hasDetails(item) ? 'button' : (item.link ? 'a' : 'div')"
          v-for="item, idx in projects[key]"
          :key="idx"
          class="item relative flex items-center text-left"
          v-bind="hasDetails(item)
            ? { type: 'button', onClick: () => { selectedProject = item } }
            : (item.link ? { onClick: (e: MouseEvent) => { e.preventDefault(); webviewProject = item } } : {})"
          :title="item.name"
        >
          <div v-if="item.icon" class="pt-2 pr-5">
            <div class="text-3xl opacity-50" :class="item.icon" />
          </div>
          <div class="flex-auto">
            <div class="text-normal">
              {{ item.name }}
            </div>
            <div class="desc text-sm opacity-50 font-normal" v-html="item.desc" />
            <div v-if="item.tags?.length" class="flex flex-wrap gap-1 mt-1.5">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="text-[10px] px-1.5 py-0.5 rounded bg-black:5 dark:bg:white:8 op50"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </component>
      </div>
    </div>
  </div>
  <div>
    <div class="table-of-contents">
      <div class="table-of-contents-anchor">
        <div class="i-ri-menu-2-fill" />
      </div>
      <ul>
        <li v-for="key of Object.keys(projects)" :key="key">
          <a :href="`#${slug(key)}`">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>

  <ProjectDetail
    v-if="selectedProject"
    :project="selectedProject"
    @close="selectedProject = undefined"
  />
</template>

<style scoped>
.project-grid a.item,
.project-grid div.item,
.project-grid button.item {
  background: transparent;
  font-size: 1.1rem;
  width: 350px;
  max-width: 100%;
  padding: 0.5rem 0.875rem 0.875rem;
  border-radius: 6px;
  border: none;
  color: inherit;
  font-family: inherit;
}

.project-grid a.item,
.project-grid button.item {
  cursor: pointer;
  transition: 0.2s all ease-out;
  opacity: 0.6;
}

.project-grid a.item:hover,
.project-grid button.item:hover {
  background: #88888811;
  opacity: 1;
}
</style>
